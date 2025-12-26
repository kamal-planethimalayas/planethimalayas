import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { treks } from '../data/treksData.js';

export default function BookingEntry() {
  const [session, setSession] = useState(null);
  const [trek, setTrek] = useState(null);
  const [trekDate, setTrekDate] = useState('');
  const [price, setPrice] = useState('');
  const [hover, setHover] = useState(false);


  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const trekId = params.get('trek');
    const dateParam = params.get('date');
    const priceParam = params.get('price');

    const selectedTrek = treks.find(t => t.id === trekId);
    setTrek(selectedTrek || { id: trekId, name: trekId });
    setTrekDate(dateParam || '');
    setPrice(priceParam || '');

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
  }, []);

  const handleProceed = () => {
    if (!trek) return;
    const queryParams = new URLSearchParams({
      trek: trek.id,
      date: trekDate,
      price: price
    }).toString();

    if (session) {
      window.location.href = `/booking-form?${queryParams}`;
    } else {
      window.location.href = `/auth?${queryParams}`;
    }
  };

  if (!trek) return <p style={{ fontFamily: 'Helvetica, sans-serif', fontWeight: 'bold', color: '#ff7300', textAlign: 'center', marginTop: '2rem' }}>
      Loading Trek Data
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
    <div style={{ textAlign: 'center', padding: '2rem', fontFamily: 'sans-serif' }}>
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
      <h1 style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2rem', marginBottom: '0.5rem' }}>
        <span style={{ marginTop: '0.5rem' }}>Confirm Booking</span>
    </h1>
      <p><strong>Trek Name:</strong> {trek.name}</p>
      <p><strong>Date:</strong> {trekDate}</p>
      <p><strong>Base Price:</strong> ₹{price}</p>
      <p>Please review your selection and click below to proceed:</p>
      <button
  onClick={handleProceed}
  onMouseEnter={() => setHover(true)}
  onMouseLeave={() => setHover(false)}
  style={{
    width: "100%",
    maxWidth: "300px",
    padding: "1rem",
    fontSize: "1rem",
    fontWeight: "bold",
    borderRadius: "8px",
    border: "2px solid #ff7300",
    cursor: "pointer",
    marginTop: "1rem",
    backgroundColor: hover ? "#ff7300" : "rgba(255,255,255,0.1)", // glassy base
    color: hover ? "black" : "#ff7300",
    boxShadow: hover
      ? "inset 0 1px 2px rgba(255,255,255,0.25), 0 8px 25px rgba(255,115,0,0.8), 0 0 22px rgba(255,115,0,1)"
      : "0 4px 12px rgba(255,115,0,0.45), 0 0 10px rgba(255,115,0,0.3)",
    transition: "all 0.3s ease",
  }}
>
  Proceed to Booking
</button>
    </div>
  );
}
