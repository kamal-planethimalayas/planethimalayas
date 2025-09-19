import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import "./TrekDateSlots.css"

const supabaseUrl = 'https://pkyaezvtjynzfgsfzblv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBreWFlenZ0anluemZnc2Z6Ymx2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ1NTIzMzUsImV4cCI6MjA3MDEyODMzNX0.2fW5pWvAV0snkdr6Iv4GaVcOoVuoQNmXjV_7bFIypf4';
const supabase = createClient(supabaseUrl, supabaseKey);

export default function TrekDateSlots({ trekId, startDate, maxSlots }) {
  const [slots, setSlots] = useState(null);

  useEffect(() => {
    async function fetchSlots() {
      try {
        // Count how many participants are already booked for this trek & date
        const { count, error } = await supabase
          .from("group_members")
          .select("id", { count: "exact" })
          .eq("trek_id", trekId)
          .eq("start_date", startDate);

        if (error) throw error;

        setSlots(count || 0);
      } catch (err) {
        console.error("Error fetching slots:", err.message);
        setSlots(0);
      }
    }

    fetchSlots();
  }, [trekId, startDate]);

  if (slots === null) return <span className="slot-status loading">Loading…</span>;

  if (slots >= maxSlots) return <span className="slot-status full">Full</span>;
  if (slots >= maxSlots * 0.75) return <span className="slot-status few-left">{maxSlots - slots} slot(s) left</span>;
  if (slots >= maxSlots * 0.5) return <span className="slot-status filling-fast">Filling fast</span>;
  return <span className="slot-status available">Available</span>;
}
