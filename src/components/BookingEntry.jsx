import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { treks } from '../data/treksData.js';

export default function BookingEntry() {
  const [session, setSession] = useState(null);
  const [trek, setTrek] = useState(null);
  const [trekDate, setTrekDate] = useState('');
  const [price, setPrice] = useState(0);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const trekId = params.get('trek');
    const dateParam = params.get('date');
    const priceParam = params.get('price');

    const selectedTrek = treks.find(t => t.id === trekId);

    const finalPrice =
      Number(priceParam) || selectedTrek?.price || 0;

    setTrek(selectedTrek || { id: trekId, name: trekId });
    setTrekDate(dateParam || '');
    setPrice(finalPrice);

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

  if (!trek) {
    return (
      <p style={{
        fontFamily: 'Helvetica, sans-serif',
        fontWeight: 'bold',
        color: '#ff7300',
        textAlign: 'center',
        marginTop: '2rem'
      }}>
        Loading Trek Data
        <span style={{ marginLeft: '4px' }}>...</span>
      </p>
    );
  }

  return (
    <div style={{ textAlign: 'center', padding: '2rem', fontFamily: 'sans-serif' }}>

      {/* Logo */}
      <a href="/" style={{ textDecoration: "none" }}>
        <div style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "1.5rem"
        }}>
          <img
            src="/images/main/brand-logo.png"
            alt="Planethimalayas Logo"
             style={{
      height: "55px",
      width: "auto",
      objectFit: "contain",
    }}
          />
        </div>
      </a>

      {/* Title */}
      <h1 style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "1.5rem",
        fontSize: "2rem",
        fontWeight: "700",
      }}>
        <span>
          <span style={{ color: "#000" }}>Confirm </span>
          <span style={{
            color: "#ff7300",
            borderBottom: "4px solid #ff7300",
            paddingBottom: "2px",
            display: "inline-block"
          }}>
            Booking
          </span>
        </span>
      </h1>

      {/* Trek Name */}
      <p>
        <strong>Trek Name:</strong>{" "}
        <span style={{ color: "#ff7300", fontWeight: "600" }}>
          {trek.name}
        </span>
      </p>

      {/* Date */}
      <p>
        <strong>Date:</strong>{" "}
        <span style={{ color: "#ff7300", fontWeight: "600" }}>
          {trekDate}
        </span>
      </p>

      {/* Price */}
      <p>
        <strong>Base Price:</strong>{" "}
        <span style={{
          color: "#ff7300",
          fontWeight: "600",
          fontSize: "1.05rem"
        }}>
          ₹{price ? Number(price).toLocaleString("en-IN") : "0"}
        </span>
      </p>

      <p>Please review your selection and click below to proceed:</p>

      {/* Button */}
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
          backgroundColor: hover ? "#ff7300" : "rgba(0,0,0,0.75)",
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