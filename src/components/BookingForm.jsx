import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";
import { treks } from "../data/treksData.js";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import "../styles/global.css"; // adjust path according to your project structure



export default function BookingForm() {
  const [trek, setTrek] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [basePrice, setBasePrice] = useState(0);
  const [addonsList, setAddonsList] = useState([]);
  const [participants, setParticipants] = useState([
    { name: "", email: "", dob: "", phone: "", addons: {} },
  ]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [user, setUser] = useState(null);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const [editingBookingId, setEditingBookingId] = useState(null);
  const [voucherCode, setVoucherCode] = useState("");
  const [voucherMessage, setVoucherMessage] = useState("");
  const [appliedVoucher, setAppliedVoucher] = useState(null); // store full voucher
  const [voucherHover, setVoucherHover] = useState(false);
  const [offerApplied, setOfferApplied] = useState(false);
  const [offerMessage, setOfferMessage] = useState("");
  const [appliedOfferId, setAppliedOfferId] = useState(null);
  const [offers, setOffers] = useState([]);

const removeParticipant = (index) => {
  // Do not allow removing the leader (index 0)
  if (index === 0) return;

  const newParticipants = [...participants];
  newParticipants.splice(index, 1); // remove participant at index
  setParticipants(newParticipants);
};

  // Load URL params
useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const bookingId = params.get("bookingId");
  const trekName = params.get("trek");
  const dateRange = params.get("date");

  if (bookingId) {
    setEditingBookingId(bookingId);
    fetchExistingBooking(bookingId);
  } else {
    const selectedTrek = treks.find(
      (t) => t.id === trekName || t.name === trekName
    );

    if (selectedTrek) {
      setTrek(selectedTrek);

      if (dateRange) {
        const parts = dateRange.split(" - ");

        const parseDate = (str) => {
          const months = {
            Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
            Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
          };
          const [day, month] = str.split(" ");
          const year = new Date().getFullYear(); // adjust if treks cross new year
          return new Date(year, months[month], parseInt(day));
        };

        const formatDate = (date) => {
          const y = date.getFullYear();
          const m = String(date.getMonth() + 1).padStart(2, "0");
          const d = String(date.getDate()).padStart(2, "0");
          return `${y}/${m}/${d}`;
        };

        const start = formatDate(parseDate(parts[0]));
        const end = formatDate(parseDate(parts[1]));

        setStartDate(start);
        setEndDate(end);
      } else {
        setStartDate("");
        setEndDate("");
      }

      setBasePrice(Number(selectedTrek.price));
      buildAddons(selectedTrek);
    }
    setLoading(false);
  }
}, []);


  useEffect(() => {
  async function fetchOffers() {
    try {
      // 1. Fetch all active offers
      const { data: offersData, error: offersError } = await supabase
        .from("discounts")
        .select("*")
        .eq("is_active", true)
        .order("valid_from", { ascending: true });

      if (offersError) throw offersError;

      // 2. Fetch offers already used by this user
      const { data: usedOffersData, error: usedError } = await supabase
        .from("user_discounts")
        .select("discount_id")
        .eq("user_id", user?.id);

      if (usedError) throw usedError;

      const usedIds = usedOffersData?.map(u => u.discount_id) || [];

      // 3. Mark offers as used if user already used them
      const updatedOffers = (offersData || []).map(offer => ({
        ...offer,
        alreadyUsed: usedIds.includes(offer.id),
      }));

      setOffers(updatedOffers);
    } catch (err) {
      console.error("Error fetching offers:", err);
    }
  }

  if (user) fetchOffers();
}, [user]);


  // Load logged-in user
  useEffect(() => {
    async function fetchUser() {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (!session) {
        window.location.href = "/auth";
        return;
      }
      setUser(session.user);

      if (!editingBookingId) {
        setParticipants((prev) => [
          {
            ...prev[0],
            name: session.user.user_metadata?.full_name || "",
            email: session.user.email || "",
          },
        ]);
      }
    }
    fetchUser();
  }, [editingBookingId]);

  // Fetch existing booking for edit
  async function fetchExistingBooking(bookingId) {
    try {
      const { data, error } = await supabase
        .from("bookings")
        .select(
          `
          id,
          trek_name,
          start_date,
          end_date,
          booking_status,
          voucher_id,
          discount_id,
          group_members (
            id,
            name,
            email,
            date_of_birth,
            phone,
            addon_bookings ( addon_id )
          )
        `
        )
        .eq("id", bookingId)
        .single();

      if (error) throw error;

      const selectedTrek = treks.find((t) => t.name === data.trek_name);
      setTrek(selectedTrek || { name: data.trek_name });
      setStartDate(data.start_date);
      setEndDate(data.end_date);
      setBasePrice(Number(selectedTrek?.price || 0));
      buildAddons(selectedTrek);


      // Load voucher if exists
      if (data.voucher_id) {
        const { data: voucherData } = await supabase
          .from("vouchers")
          .select("*")
          .eq("id", data.voucher_id)
          .single();
        setAppliedVoucher(voucherData || null);
      }

      // Load offer if exists
      if (data.discount_id) {
        setAppliedOfferId(data.discount_id);
        setOfferApplied(true);
        setOfferMessage("✅ Offer restored from saved booking.");
      } else {
        setAppliedOfferId(null);
        setOfferApplied(false);
        setOfferMessage("");
      }

      const formattedMembers = data.group_members.map((gm) => ({
        id: gm.id,
        name: gm.name,
        email: gm.email,
        dob: gm.date_of_birth,
        phone: gm.phone,
        addons: gm.addon_bookings.reduce((acc, ab) => {
          acc[ab.addon_id] = true;
          return acc;
        }, {}),
      }));

      setParticipants(formattedMembers);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching booking:", err.message);
      setLoading(false);
    }
  }

  function buildAddons(selectedTrek) {
    const addonsArr = [];
    if (selectedTrek?.addons?.transport) {
      addonsArr.push({
        id: "transport",
        label:
          "Transport assistance (optional). Your request will be saved. " +
          "Final transport cost will be communicated before departure and is payable directly to the driver.",
        price: 0, // IMPORTANT: do not charge at booking time
      });
    }
    if (selectedTrek?.addons?.offloadingbag) {
      addonsArr.push({
        id: "offloadingbag",
        label: `Offloading Bag (+ ₹${selectedTrek.addons.offloadingbag})`,
        price: selectedTrek.addons.offloadingbag,
      });
    }
    setAddonsList(addonsArr);
  }

  // Update total price
  useEffect(() => {
  let total = 0;

  participants.forEach((p) => {
    let participantAddonsTotal = 0;

    for (const key in p.addons) {
      // ⛔ Do NOT add transport cost at booking time
      if (p.addons[key] && key !== "transport") {
        const addonObj = addonsList.find((a) => a.id === key);
        if (addonObj) participantAddonsTotal += addonObj.price;
      }
    }

    total += basePrice + participantAddonsTotal;
  });

  // Apply voucher
  if (appliedVoucher) {
    total = Math.max(total - appliedVoucher.balance, 0);
  }

  // Apply offer
  if (appliedOfferId) {
    const offer = offers.find((o) => o.id === appliedOfferId);
    if (offer) {
      const discountAmount = offer.discount_type === "percent"
        ? (total * offer.value) / 100 // ← apply on total, not basePrice
        : offer.value;
      total = Math.max(total - discountAmount, 0);
    }
  }

  setTotalPrice(total);
}, [participants, basePrice, addonsList, appliedVoucher, appliedOfferId, offers]);


  const toggleAddon = (index, id) => {
    const newParticipants = [...participants];
    newParticipants[index].addons[id] = !newParticipants[index].addons[id];
    setParticipants(newParticipants);
  };

  const handleParticipantChange = (index, field, value) => {
    const newParticipants = [...participants];
    newParticipants[index][field] = value;
    setParticipants(newParticipants);
  };

  const addParticipant = () => {
    setParticipants([
      ...participants,
      { name: "", email: "", dob: "", phone: "", addons: {} },
    ]);
  };

  async function handleApplyOffer(offerCode) {
  try {
    const { data: offer, error } = await supabase
      .from("discounts")
      .select("*")
      .eq("code", offerCode)
      .eq("is_active", true)
      .maybeSingle();

    if (error || !offer) {
      setOfferMessage("⚠️ No active offer found.");
      return;
    }

    // Check if already used
    const { data: used } = await supabase
      .from("user_discounts")
      .select("*")
      .eq("user_id", user.id)
      .eq("discount_id", offer.id)
      .maybeSingle();

    if (used) {
      setOfferMessage("⚠️ You have already used this offer.");
      return;
    }

    setAppliedOfferId(offer.id);
    setOfferApplied(true);
    setOfferMessage(`✅ Offer applied! ${offer.value}${offer.discount_type === 'percent' ? '%' : '₹'} off`);

  } catch (err) {
    console.error("Offer error", err);
    setOfferMessage("⚠️ Could not apply offer. Try again.");
  }
}



  async function handleApplyVoucher() {
    if (!voucherCode) {
      setVoucherMessage("⚠️ Please enter a code");
      return;
    }

    try {
      const { data: voucher, error } = await supabase
        .from("vouchers")
        .select("*")
        .eq("code", voucherCode)
        .single();

      if (error || !voucher) {
        setVoucherMessage("❌ Invalid voucher code.");
        setAppliedVoucher(null);
        return;
      }

      const today = new Date();
      if (!voucher.is_active || new Date(voucher.valid_till) < today) {
        setVoucherMessage("⚠️ Voucher is expired or inactive.");
        setAppliedVoucher(null);
        return;
      }

      setAppliedVoucher(voucher);
      setVoucherMessage(`✅ Voucher applied! ₹${voucher.balance} off`);
    } catch (err) {
      console.error("Voucher error", err);
      setVoucherMessage("⚠️ Could not apply voucher. Try again.");
      setAppliedVoucher(null);
    }
  }

  // Inside your component
async function handleSaveBooking(e) {
  e.preventDefault();

  setLoadingSubmit(true);

  try {
    let bookingId = editingBookingId;

    if (editingBookingId) {
      // Update existing booking
      await supabase
        .from("bookings")
        .update({
          start_date: startDate,
          end_date: endDate,
          voucher_id: appliedVoucher?.id || null,
          discount_id: appliedOfferId || null,
          base_price: basePrice,
          addons_price: participants.reduce((acc, p) => {
            for (const key in p.addons) {
              if (p.addons[key]) {
                const addonObj = addonsList.find((a) => a.id === key);
                acc += addonObj?.price || 0;
              }
            }
            return acc;
          }, 0),
          final_price: totalPrice,
          
          booking_status: "saved", // mark as saved
        })
        .eq("id", bookingId);

      await supabase.from("group_members").delete().eq("booking_id", bookingId);
    } else {
      // Insert new booking
      const { data: bookingData, error: bookingError } = await supabase
        .from("bookings")
        .insert([
          {
            user_id: user.id,
            trek_name: trek.name,
            start_date: startDate,
            end_date: endDate,
            booking_status: "saved", // saved instead of paid
            voucher_id: appliedVoucher?.id || null,
            discount_id: appliedOfferId || null,
            base_price: basePrice,
            addons_price: participants.reduce((acc, p) => {
              for (const key in p.addons) {
                if (p.addons[key]) {
                  const addonObj = addonsList.find((a) => a.id === key);
                  acc += addonObj?.price || 0;
                }
              }
              return acc;
            }, 0),
            final_price: totalPrice,
          },
        ])
        .select();

      if (bookingError || !bookingData?.length) throw bookingError;
      bookingId = bookingData[0].id;
    }

    // save participants
    for (let idx = 0; idx < participants.length; idx++) {
      const member = participants[idx];
      const { data: memberData, error: memberError } = await supabase
        .from("group_members")
        .insert([
          {
            booking_id: bookingId,
            name: member.name,
            email: member.email,
            date_of_birth: member.dob,
            phone: member.phone,
            voucher_id: appliedVoucher?.id || null,   // ✅ added
            discount_id: appliedOfferId || null,
          },
        ])
        .select();

      if (memberError || !memberData?.length) throw memberError;

      const gmId = memberData[0].id;

      for (const addonKey in member.addons) {
        if (member.addons[addonKey]) {
          await supabase.from("addon_bookings").insert([
            {
              booking_id: bookingId,
              group_member_id: gmId,
              addon_id: addonKey,
              quantity: 1,
            },
          ]);
        }
      }
    }

    alert("✅ Booking saved! You can pay later from your dashboard.");
  } catch (err) {
    console.error(err);
    alert("⚠️ Could not save booking. Try again.");
  } finally {
    setLoadingSubmit(false);
  }
}


  async function handleSubmit(e) {
    e.preventDefault();
    if (!termsAccepted) return alert("Please accept terms");

    // Validate all participants' phones
  for (let i = 0; i < participants.length; i++) {
    if (!participants[i].phone || participants[i].phone.trim() === "") {
      // Scroll to that participant's fieldset
      const fieldset = document.getElementById(`participant-${i}`);
      if (fieldset) {
        fieldset.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      // Focus is optional
      return alert(`Please enter phone number for participant ${i === 0 ? "Leader" : i}`);
    }
  }

    setLoadingSubmit(true);

    try {
      let bookingId = editingBookingId;

      if (editingBookingId) {
        await supabase
          .from("bookings")
          .update({
            start_date: startDate,
            end_date: endDate,
            voucher_id: appliedVoucher?.id || null,
          })
          .eq("id", bookingId);

        await supabase.from("group_members").delete().eq("booking_id", bookingId);
      } else {
        const { data: bookingData, error: bookingError } = await supabase
  .from("bookings")
  .insert([
    {
      user_id: user.id,
      trek_name: trek.name,
      start_date: startDate,
      end_date: endDate,
      booking_status: "pending",
      voucher_id: appliedVoucher?.id || null,
      discount_id: appliedOfferId || null,
      base_price: basePrice,
      addons_price: participants.reduce((acc, p) => {
        for (const key in p.addons) {
          if (p.addons[key]) {
            const addonObj = addonsList.find((a) => a.id === key);
            acc += addonObj?.price || 0;
          }
        }
        return acc;
      }, 0),
      final_price: totalPrice,
      
    },
  ])
  .select();


        if (bookingError || !bookingData?.length) throw bookingError;
        bookingId = bookingData[0].id;
      }

      // save applied offer usage
if (appliedOfferId) {
  await supabase.from("bookings").update({
    discount_id: appliedOfferId
  }).eq("id", bookingId);

  
}


      for (let idx = 0; idx < participants.length; idx++) {
        const member = participants[idx];
        const { data: memberData, error: memberError } = await supabase
          .from("group_members")
          .insert([
            {
              booking_id: bookingId,
              name: member.name,
              email: member.email,
              date_of_birth: member.dob,
              phone: member.phone,
              voucher_id: appliedVoucher?.id || null,   // ✅ added
              discount_id: appliedOfferId || null, 
            },
          ])
          .select();

        if (memberError || !memberData?.length) throw memberError;

        const gmId = memberData[0].id;

        for (const addonKey in member.addons) {
          if (member.addons[addonKey]) {
            await supabase.from("addon_bookings").insert([
              {
                booking_id: bookingId,
                group_member_id: gmId,
                addon_id: addonKey,
                quantity: 1,
              },
            ]);
          }
        }
      }

      // === after you have bookingId ===
// Load checkout script (you already do this)
const script = document.createElement("script");
script.src = "https://checkout.razorpay.com/v1/checkout.js";
document.body.appendChild(script);
await new Promise((resolve) => (script.onload = resolve));

// IMPORTANT: include bookingId in notes so webhook can match the payment to the booking
const options = {
  key: "rzp_live_R7WlxHq1qFiJNM", // keep your current key
  amount: Math.round(totalPrice * 100), // in paise
  currency: "INR",
  name: "Planethimalayas",
  description: `Trek Booking: ${trek.name}`,
  prefill: { name: participants[0].name, email: participants[0].email },
  theme: { color: "#ff7300" },

  // <-- add this notes object (Razorpay will include notes in the payment payload)
  notes: {
    booking_id: bookingId.toString()
  },

  // IMPORTANT: do NOT update booking status to "paid" here.
  // The webhook (server-side) will verify signature and then update DB and send email.
  handler: function (response) {
    // Keep UX: redirect user to thank-you page (you can show payment id)
    // Do NOT update the bookings table here -- webhook will do that.
    console.log("Razorpay handler response (do not use to mark paid):", response);
    window.location.href = `/thank-you?bookingId=${bookingId}&paymentId=${response.razorpay_payment_id}`;
  },
};

// open checkout
new window.Razorpay(options).open();


      
    } catch (err) {
      alert(err.message);
    } finally {
      setLoadingSubmit(false);
    }
  }

  if (loading) return <p style={{ fontFamily: 'Helvetica, sans-serif', fontWeight: 'bold', color: '#ff7300', textAlign: 'center', marginTop: '2rem' }}>
      Loading Booking Form
      <span style={{ display: 'inline-block', marginLeft: '4px', animation: 'dots 1.5s steps(3, end) infinite' }}>...</span>

      <style>
        {`
          @keyframes dots {
            0% { content: ''; }
            33% { content: '.'; }
            66% { content: '..'; }
            100% { content: '...'; }
          }
        `}
      </style>
    </p>;

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
  {/* Logo & Title */}
  <a href="/" style={{ textDecoration: "none" }}>
  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
    <img src="/images/main/brand-logo.png" alt="Planethimalayas Logo" style={{ height: "80px" }} />
    
  </div>
  </a>

  <h2 style={{ textAlign: "center", marginBottom: "1.5rem", fontSize: "2rem", fontWeight: "bold", marginBottom: "1.5rem" }}>
  <span style={{ color: "#000" }}>
    {editingBookingId ? "Edit" : "New"}
  </span>{" "}
  <span
    style={{
      color: "#ff7300",
      borderBottom: "4px solid #ff7300",
      paddingBottom: "4px",
    }}
  >
    Booking
  </span>
</h2>

  <p>
  <strong>Trek Name:</strong>{" "}
  <span style={{ color: "#ff7300", fontWeight: "600"}}>{trek?.name}</span>
</p>
<p>
  <strong>Date:</strong>{" "}
  <span style={{ color: "#ff7300", fontWeight: "600"}}>
    {startDate && endDate ? `${startDate} to ${endDate}` : "Not selected"}
  </span>
</p>
<p>
  <strong>Base Price:</strong>{" "}
  <span style={{ color: "#ff7300", fontWeight: "600", fontSize: "1.05rem" }}>₹{basePrice}</span>
</p>

  {/* Participants */}
  {participants.map((p, idx) => (
    <fieldset id={`participant-${idx}`} key={idx} style={fieldsetStyle}>
      <legend><strong>{idx === 0 ? "Participant Details" : `Participant ${idx}`}</strong></legend>
      <input style={inputStyle} type="text" placeholder="Full Name" value={p.name} onChange={(e) => handleParticipantChange(idx, "name", e.target.value)} required />
      <input style={inputStyle} type="email" placeholder="Email" value={p.email} onChange={(e) => handleParticipantChange(idx, "email", e.target.value)} required />
      <input style={inputStyle} type="date" placeholder="DOB" value={p.dob} onChange={(e) => handleParticipantChange(idx, "dob", e.target.value)} required />
      <PhoneInput
  country={"in"}
  value={p.phone}
  onChange={(phone) => handleParticipantChange(idx, "phone", phone)}
  inputStyle={{
    width: "100%",
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "0.5rem 0.5rem 0.5rem 60px", // space for flag
    boxSizing: "border-box",
    height: "38px",
  }}
  buttonStyle={{
    background: "transparent",
    position: "absolute",
    left: "0",
    top: "0",
    height: "100%",
    width: "55px",
  }}
  containerStyle={{
    position: "relative",
    width: "100%",
  }}
  dropdownStyle={{
    borderRadius: "6px",
  }}
  enableSearch={true}
  countryCodeEditable={false}
  // ✅ production-safe flag path
  flagsPath="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/6.6.6/flags/4x3/"
/>

      {addonsList.length > 0 && (
        <fieldset style={{ ...fieldsetStyle, padding: "0.8rem" }}>
          <legend><strong>Add-ons</strong></legend>
          {addonsList.map((a) => (
            <label key={a.id} style={{ display: "block", marginBottom: "0.5rem" }}>
              <input type="checkbox" checked={!!p.addons[a.id]} onChange={() => toggleAddon(idx, a.id)} /> {a.label}
            </label>
          ))}
        </fieldset>
      )}

      {/* Remove participant button for non-leaders */}
    {idx > 0 && (
      <button
  type="button"
  onClick={() => removeParticipant(idx)}
  style={{
    ...addBtnStyle,
    background: "rgba(0, 0, 0, 0.75)", // glassy red base
    backdropFilter: "blur(15px)",
    WebkitBackdropFilter: "blur(15px)",
    color: "red",
    border: "2px solid red", // red border
    marginTop: "0.5rem",
    boxShadow: `
      inset 0 1px 1px rgba(255,255,255,0.35),
      0 10px 28px rgba(0,0,0,0.35),
      0 0 12px rgba(211,47,47,0.35)
    `,
    transition: "transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease",
    cursor: "pointer",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.background = "red"; // solid red
    e.currentTarget.style.color = "#000";
    e.currentTarget.style.transform = "translateY(-4px)";
    e.currentTarget.style.boxShadow = `
      inset 0 1px 1px rgba(255,255,255,0.45),
      0 14px 35px rgba(0,0,0,0.45),
      0 0 30px rgba(211,47,47,1),
      0 0 60px rgba(211,47,47,0.75)
    `;
  }}
  onMouseLeave={(e) => {
    Object.assign(e.currentTarget.style, {
      ...addBtnStyle,
      background: "rgba(0, 0, 0, 0.75)",
      backdropFilter: "blur(15px)",
      WebkitBackdropFilter: "blur(15px)",
      color: "red",
      border: "2px solid #d32f2f",
      marginTop: "0.5rem",
      boxShadow: `
        inset 0 1px 1px rgba(255,255,255,0.35),
        0 10px 28px rgba(0,0,0,0.35),
        0 0 12px rgba(211,47,47,0.35)
      `,
      transition: "transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease",
      cursor: "pointer",
    });
  }}
>
  Remove Participant
</button>
    )}
    </fieldset>
  ))}

  <button
  type="button"
  onClick={addParticipant}
  style={addBtnStyle}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-4px)";
    e.currentTarget.style.background = "#ff7300";
    e.currentTarget.style.color = "#000";
    e.currentTarget.style.boxShadow = `
      inset 0 1px 1px rgba(255,255,255,0.45),
        0 14px 35px rgba(0,0,0,0.45),
        0 0 30px rgba(255,115,0,1),
        0 0 60px rgba(255,115,0,0.75)
    `;
  }}
  onMouseLeave={(e) => {
    Object.assign(e.currentTarget.style, addBtnStyle);
  }}
>
  + Add Participant
</button>

  {/* Voucher Code */}
  <div style={{ marginBottom: "1rem" }}>
    <input style={{ ...inputStyle, width: "70%", display: "inline-block" }} 
    type="text" 
    value={voucherCode} 
    placeholder="Voucher Code" 
    onChange={(e) => setVoucherCode(e.target.value)} 
    className="voucher-input"
    />
<button
  type="button"
  onClick={handleApplyVoucher}
  disabled={!!appliedVoucher}
  onMouseEnter={() => !appliedVoucher && setVoucherHover(true)}
  onMouseLeave={() => setVoucherHover(false)}
  style={{
    width: "28%",
    marginLeft: "2%",
    padding: "0.5rem",

    /* BACKGROUND */
    background: appliedVoucher
      ? "#888"        // dead
      : voucherHover
      ? "#ff7300"                       // active hover
      : "rgba(0,0,0,0.75)",             // glass base

    backdropFilter: appliedVoucher ? "none" : "blur(15px)",
    WebkitBackdropFilter: appliedVoucher ? "none" : "blur(15px)",

    color: appliedVoucher
      ? "#555"
      : voucherHover
      ? "#000"
      : "#ff7300",

    fontWeight: "bold",
    fontSize: "0.95rem",

    borderRadius: "8px",
    border: `2px solid ${appliedVoucher ? "#888" : "#ff7300"}`,

    cursor: appliedVoucher ? "not-allowed" : "pointer",

    /* SHADOW */
    boxShadow: appliedVoucher
      ? "none"
      : voucherHover
      ? `
        inset 0 1px 1px rgba(255,255,255,0.45),
        0 14px 35px rgba(0,0,0,0.45),
        0 0 30px rgba(255,115,0,1),
        0 0 60px rgba(255,115,0,0.75)
      `
      : `
        inset 0 1px 1px rgba(255,255,255,0.35),
        0 10px 28px rgba(0,0,0,0.35),
        0 0 12px rgba(255,115,0,0.35)
      `,

    transform:
      !appliedVoucher && voucherHover ? "translateY(-4px)" : "none",

    transition:
      "transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease",
  }}
>
  Apply
</button>
    {voucherMessage && <p style={{ marginTop: "0.5rem", fontSize: "0.9rem" }}>{voucherMessage}</p>}
  </div>

  {/* Special Offer */}
  <div style={{ margin: "1rem 0" }}>
  <h3 style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>Offers:</h3>
  {offers.length === 0 && <p>No active offers at the moment.</p>}
  {offers.map((offer) => (
  <div
    key={offer.id}
    style={{
      display: "flex",
      alignItems: "center",
      padding: "1rem",
      border: "2px solid #ff7300",
      borderRadius: "8px",
      marginBottom: "0.8rem",
      gap: "1rem",
    }}
  >
    <button
  type="button"
  onClick={() => handleApplyOffer(offer.code)}
  disabled={offer.alreadyUsed || appliedOfferId === offer.id}
  style={{
    width: "28%",
    padding: "0.5rem",
    position: "relative",

    /* BACKGROUND */
    background:
      offer.alreadyUsed || appliedOfferId === offer.id
        ? "#888" // dead
        : "rgba(0,0,0,0.75)",      // glass base

    backdropFilter:
      offer.alreadyUsed || appliedOfferId === offer.id
        ? "none"
        : "blur(15px)",
    WebkitBackdropFilter:
      offer.alreadyUsed || appliedOfferId === offer.id
        ? "none"
        : "blur(15px)",

    /* TEXT */
    color:
      offer.alreadyUsed || appliedOfferId === offer.id
        ? "#555"
        : "#ff7300",

    fontWeight: "bold",
    fontSize: "0.9rem",

    borderRadius: "8px",
    border:
  offer.alreadyUsed || appliedOfferId === offer.id
    ? "2px solid #888"
    : "2px solid #ff7300",

    cursor:
      offer.alreadyUsed || appliedOfferId === offer.id
        ? "not-allowed"
        : "pointer",

    /* ELEVATION */
    boxShadow:
      offer.alreadyUsed || appliedOfferId === offer.id
        ? "none"
        : `
          inset 0 1px 1px rgba(255,255,255,0.35),
          0 10px 28px rgba(0,0,0,0.35),
          0 0 12px rgba(255,115,0,0.35)
        `,

    transition:
      "transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease, color 0.3s ease",
  }}
  onMouseEnter={e => {
    if (offer.alreadyUsed || appliedOfferId === offer.id) return;

    e.currentTarget.style.background = "#ff7300";
    e.currentTarget.style.color = "#000";
    e.currentTarget.style.transform = "translateY(-4px)";
    e.currentTarget.style.boxShadow = `
      inset 0 1px 1px rgba(255,255,255,0.45),
      0 14px 35px rgba(0,0,0,0.45),
      0 0 30px rgba(255,115,0,1),
      0 0 60px rgba(255,115,0,0.75)
    `;
  }}
  onMouseLeave={e => {
    if (offer.alreadyUsed || appliedOfferId === offer.id) return;

    e.currentTarget.style.background = "rgba(0,0,0,0.75)";
    e.currentTarget.style.color = "#ff7300";
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = `
      inset 0 1px 1px rgba(255,255,255,0.35),
      0 10px 28px rgba(0,0,0,0.35),
      0 0 12px rgba(255,115,0,0.35)
    `;
  }}
>
  {offer.code}
</button>

<p style={{ margin: 0, flex: 1 }}>
  {appliedOfferId === offer.id
    ? `✅ Offer applied! ${offer.value}${offer.discount_type === "percent" ? "%" : "₹"} off`
    : offer.alreadyUsed
    ? "⚠️ You have already used this offer."
    : offer.description}
</p>

  </div>
))}

</div>

  <p>
  <strong>Total Price:</strong>{" "}
  <span
    style={{
      fontSize: "2.5rem",
      fontWeight: "700",
      color: "#ff7300",
    }}
  >
    ₹{totalPrice}
  </span>
</p>

  <label style={{ display: "block", marginBottom: "1rem" }}>
  <input 
    type="checkbox" 
    checked={termsAccepted} 
    onChange={(e) => setTermsAccepted(e.target.checked)} 
  />{" "}
  I accept{" "}
  <a 
    href="/terms-and-conditions" 
    target="_blank" 
    rel="noopener noreferrer" 
    style={{ color: "#ff7300", fontWeight: "bold" }}
  >
    Terms & Conditions
  </a>
</label>


<div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
 {/* Save Booking - can click anytime */}
<button
  type="button"
  onClick={handleSaveBooking}
  style={{
    width: "100%",
    padding: "1rem",
    position: "relative",

    /* Glass base */
    background: "rgba(0, 0, 0, 0.75)",
    backdropFilter: "blur(15px)",
    WebkitBackdropFilter: "blur(15px)",

    color: "#ff7300",
    fontWeight: "bold",
    fontSize: "1rem",

    border: "2px solid #ff7300",
    borderRadius: "10px",

    cursor: "pointer",

    /* Elevated feel */
    boxShadow: `
      inset 0 1px 1px rgba(255,255,255,0.35),
      0 10px 28px rgba(0,0,0,0.35),
      0 0 12px rgba(255,115,0,0.35)
    `,

    transition:
      "transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease, color 0.3s ease",
  }}
  onMouseEnter={e => {
    e.currentTarget.style.background = "#ff7300";
    e.currentTarget.style.color = "#000";
    e.currentTarget.style.transform = "translateY(-4px)";
    e.currentTarget.style.boxShadow = `
      inset 0 1px 1px rgba(255,255,255,0.45),
      0 14px 35px rgba(0,0,0,0.45),
      0 0 30px rgba(255,115,0,1),
      0 0 60px rgba(255,115,0,0.75)
    `;
  }}
  onMouseLeave={e => {
    e.currentTarget.style.background = "rgba(0, 0, 0, 0.75)";
    e.currentTarget.style.color = "#ff7300";
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = `
      inset 0 1px 1px rgba(255,255,255,0.35),
      0 10px 28px rgba(0,0,0,0.35),
      0 0 12px rgba(255,115,0,0.35)
    `;
  }}
>
  Save Booking
</button>

{/* Pay & Book - requires terms */}
<button
  type="submit"
  disabled={!termsAccepted || loadingSubmit}
  style={!termsAccepted ? disabledSubmitStyle : submitStyle}
  onMouseEnter={e => {
    if (!termsAccepted || loadingSubmit) return;

    e.currentTarget.style.background = "#ff7300";
    e.currentTarget.style.color = "#000";
    e.currentTarget.style.transform = "translateY(-4px)";
    e.currentTarget.style.boxShadow = `
      inset 0 1px 1px rgba(255,255,255,0.45),
      0 14px 35px rgba(0,0,0,0.45),
      0 0 30px rgba(255,115,0,1),
      0 0 60px rgba(255,115,0,0.75)
    `;
  }}
  onMouseLeave={e => {
    if (!termsAccepted || loadingSubmit) return;

    e.currentTarget.style.background = "rgba(0, 0, 0, 0.75)";
    e.currentTarget.style.color = "#ff7300";
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = `
      inset 0 1px 1px rgba(255,255,255,0.35),
      0 10px 28px rgba(0,0,0,0.35),
      0 0 12px rgba(255,115,0,0.35)
    `;
  }}
>
  {loadingSubmit ? "Processing..." : "Pay & Book"}
</button>

</div>
</form>
  );
}

const formStyle = {
  maxWidth: "800px",
  margin: "2rem auto",
  padding: "2rem",
  fontFamily: "sans-serif",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  borderRadius: "10px",
  backgroundColor: "#fff",
};

const inputStyle = {
  width: "100%",
  height:"38px",
  padding: "0.5rem",
  marginBottom: "1rem",
  borderRadius: "5px",
  border: "1px solid #ccc",
  boxSizing: "border-box",
};

const fieldsetStyle = {
  border: "2px solid #ff7300",
  borderRadius: "8px",
  padding: "1rem",
  margin: "1rem 0",
};

const addBtnStyle = {
  width: "100%",
  padding: "0.8rem",

  /* glass background */
  background: "rgba(0, 0, 0, 0.75)",
  backdropFilter: "blur(15px)",
  WebkitBackdropFilter: "blur(15px)",

  color: "#ff7300",
  fontWeight: "bold",
  fontSize: "0.95rem",

  borderRadius: "8px",
  border: "2px solid #ff7300",

  cursor: "pointer",
  marginBottom: "1rem",

  boxShadow: `
    inset 0 1px 1px rgba(255,255,255,0.35),
    0 10px 28px rgba(0,0,0,0.35),
    0 0 12px rgba(255,115,0,0.35)
  `,

  transition:
    "transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease",
};

const disabledSubmitStyle = {
  width: "100%",
  padding: "1rem",

  background: "#888",
  color: "#555",

  border: "2px solid #888",
  borderRadius: "10px",

  fontWeight: "bold",
  fontSize: "1rem",

  cursor: "not-allowed",
  boxShadow: "none",
};

const submitStyle = {
  width: "100%",
  padding: "1rem",
  position: "relative",

  /* Glass base */
  background: "rgba(0, 0, 0, 0.75)",
  backdropFilter: "blur(15px)",
  WebkitBackdropFilter: "blur(15px)",

  color: "#ff7300",
  fontWeight: "bold",
  fontSize: "1rem",

  border: "2px solid #ff7300",
  borderRadius: "10px",

  cursor: "pointer",

  /* Elevated */
  boxShadow: `
    inset 0 1px 1px rgba(255,255,255,0.35),
    0 10px 28px rgba(0,0,0,0.35),
    0 0 12px rgba(255,115,0,0.35)
  `,

  transition:
    "transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease, color 0.3s ease",
};



