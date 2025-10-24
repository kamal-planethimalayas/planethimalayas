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
        label: `Transport (+ ₹${selectedTrek.addons.transport}) ${
          selectedTrek.addons.transportNote || ""
        }`,
        price: selectedTrek.addons.transport,
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
      if (p.addons[key]) {
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
    <img src="/images/main/brand-logo.png" alt="Planethimalayas Logo" style={{ height: "50px", marginRight: "10px" }} />
    <h2 style={{ fontFamily: "Helvetica, sans-serif", fontSize: "1.8rem", margin: 0 }}>
      <span style={{ color: "black" }}>Planet</span>
      <span style={{ color: "#ff7300" }}>himalayas</span>
    </h2>
  </div>
  </a>

  <h1 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
    {editingBookingId ? "Edit Booking" : "New Booking"}
  </h1>

  <p><strong>Trek Name:</strong> {trek?.name}</p>
  <p><strong>Date:</strong> {startDate && endDate ? `${startDate} to ${endDate}` : "Not selected"}</p>
  <p><strong>Base Price:</strong> ₹{basePrice}</p>

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
          <legend>Add-ons</legend>
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
          backgroundColor: "#d32f2f",
          color: "#fff",
          marginTop: "0.5rem"
        }}
      >
        Remove Participant
      </button>
    )}
    </fieldset>
  ))}

  <button type="button" onClick={addParticipant} style={addBtnStyle}>
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
  style={{
    width: "28%",
    marginLeft: "2%",
    padding: "0.5rem",
    backgroundColor: appliedVoucher ? "#ccc" : "#ff7300",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: appliedVoucher ? "not-allowed" : "pointer",
    fontWeight: "bold",
    fontSize: "0.95rem",
  }}
  disabled={!!appliedVoucher}
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
      border: "1px solid #ccc",
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
    width: "25%",
    padding: "0.5rem",
    backgroundColor: offer.alreadyUsed || appliedOfferId === offer.id ? "#ccc" : "#ff7300",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: offer.alreadyUsed || appliedOfferId === offer.id ? "not-allowed" : "pointer",
    fontWeight: "bold",
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

  <p><strong>Total Price:</strong> ₹{totalPrice}</p>

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
    style={{ color: "#ff7300" }}
  >
    Terms and Conditions
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
    backgroundColor: "#ff7300",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    fontSize: "1rem",
    cursor: "pointer",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    transition: "background-color 0.3s ease, transform 0.2s ease",
 }}
>
  Save Booking
</button>

{/* Pay & Book - requires terms */}
<button
  type="submit"
  disabled={!termsAccepted || loadingSubmit}
  style={!termsAccepted ? disabledSubmitStyle : submitStyle}
>
  {loadingSubmit ? "Processing..." : "Pay & Book"}
</button>

</div>
</form>
  );
}

const formStyle = {
  maxWidth: "500px",
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
  border: "1px solid #ff7300",
  borderRadius: "8px",
  padding: "1rem",
  margin: "1rem 0",
};

const addBtnStyle = {
  width: "100%",
  padding: "0.8rem",
  backgroundColor: "blue",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "0.95rem",
  marginBottom: "1rem",
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  transition: "background-color 0.3s ease, transform 0.2s ease",
};
const submitStyle = {
  width: "100%",
  padding: "1rem",
  backgroundColor: "#ff7300",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  fontWeight: "bold",
  fontSize: "1rem",
  cursor: "pointer",
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  transition: "background-color 0.3s ease, transform 0.2s ease",
};
const disabledSubmitStyle = {
  ...submitStyle,
  backgroundColor: "#ccc",
  cursor: "not-allowed",
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  transition: "background-color 0.3s ease, transform 0.2s ease",
};


