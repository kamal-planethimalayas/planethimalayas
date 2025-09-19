import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { treks } from '../data/treksData.js';

export default function BookingEntry() {
  const [session, setSession] = useState(null);
  const [trek, setTrek] = useState(null);
  const [trekDate, setTrekDate] = useState('');
  const [price, setPrice] = useState('');

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
        style={{
          padding: '1rem 2rem',
          fontSize: '1rem',
          backgroundColor: '#ff7300',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Proceed to Booking
      </button>
    </div>
  );
}
