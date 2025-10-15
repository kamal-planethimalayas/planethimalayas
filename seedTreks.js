import { createClient } from '@supabase/supabase-js';
import { treks } from "./src/data/treksData.js";

const supabaseUrl = 'https://pkyaezvtjynzfgsfzblv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBreWFlenZ0anluemZnc2Z6Ymx2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ1NTIzMzUsImV4cCI6MjA3MDEyODMzNX0.2fW5pWvAV0snkdr6Iv4GaVcOoVuoQNmXjV_7bFIypf4';
const supabase = createClient(supabaseUrl, supabaseKey);

async function seedTreks() {
  for (const trek of treks) {
    try {
      // --- Upsert Trek ---
      const { data: trekData, error: trekError } = await supabase
        .from('treks')
        .upsert({
          id: trek.id,
          name: trek.name,
          price: trek.price,
          date: trek.dates[0]?.start || null,
          addons: trek.addons ? JSON.stringify(trek.addons) : null
        })
        .select();

      if (trekError) {
        console.log(`Error upserting trek ${trek.name}:`, trekError);
        continue;
      } else {
        console.log(`Trek upserted: ${trek.name}`);
      }

      // --- Upsert Addons ---
      const addonIdsMap = {}; // map addonName → addon UUID
      if (trek.addons) {
        for (const [addonName, addonPrice] of Object.entries(trek.addons)) {
          if (addonName.toLowerCase().includes('note')) continue; // skip notes

          const { data: addonData, error: addonError } = await supabase
            .from('addons')
            .upsert({
              trek_id: trek.id,
              name: addonName,
              price: addonPrice,
              description: trek.addons[`${addonName}Note`] || null
            })
            .select();

          if (addonError) {
            console.log(`Error upserting addon ${addonName} for ${trek.name}:`, addonError);
          } else {
            console.log(`Addon upserted: ${addonName} for ${trek.name}`);
            // store UUID of this addon for later use in addon_bookings
            if (addonData && addonData[0]) addonIdsMap[addonName] = addonData[0].id;
          }
        }
      }

      // --- Populate addon_bookings ---
      // Fetch all bookings for this trek
      const { data: bookingsData, error: bookingsError } = await supabase
        .from('bookings')
        .select('id, user_id')
        .eq('trek_name', trek.name);

      if (bookingsError) {
        console.log(`Error fetching bookings for ${trek.name}:`, bookingsError);
        continue;
      }

      for (const booking of bookingsData) {
        // Fetch group_members for this booking
        const { data: membersData, error: membersError } = await supabase
          .from('group_members')
          .select('id, name, email')
          .eq('booking_id', booking.id);

        if (membersError) {
          console.log(`Error fetching members for booking ${booking.id}:`, membersError);
          continue;
        }

        // Upsert addon_bookings for each member based on addons selected
        for (const member of membersData) {
          if (!trek.addons) continue;

          for (const [addonName, addonPrice] of Object.entries(trek.addons)) {
            if (addonName.toLowerCase().includes('note')) continue; // skip notes

            const addonId = addonIdsMap[addonName];
            if (!addonId) continue;

            // Example: here you might define quantity or check if the member opted for this addon
            const quantity = 1;

            const { error: addonBookingError } = await supabase
              .from('addon_bookings')
              .upsert({
                booking_id: booking.id,
                group_member_id: member.id,
                addon_id: addonId,
                quantity
              });

            if (addonBookingError) {
              console.log(`Error upserting addon ${addonName} for member ${member.name}:`, addonBookingError);
            } else {
              console.log(`Addon ${addonName} booked for ${member.name}`);
            }
          }
        }
      }

    } catch (err) {
      console.log('Unexpected error:', err);
    }
  }

  console.log('Seeding finished!');
}

seedTreks();
