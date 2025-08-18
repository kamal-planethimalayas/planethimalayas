import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient'; // Adjust path if needed

export default function BookingForm() {
  // URL params
  const params = new URLSearchParams(window.location.search);
  const trekId = params.get('trek') || '';
  const date = params.get('date') || '';
  const basePrice = Number(params.get('price') || 0);

  // Sample addons data
  const addonsList = [
    { id: 'transport', label: 'Transport (+₹4000)', price: 4000 },
    { id: 'offloadingBag', label: 'Offloading Bag (+₹5600)', price: 5600 },
  ];

  // State
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [addons, setAddons] = useState({});
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [totalPrice, setTotalPrice] = useState(basePrice);
  const [loadingUser, setLoadingUser] = useState(true);
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  // Prefill user info if logged in
  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        setEmail(user.email || '');
        setName(user.user_metadata?.full_name || '');
        setUser(user);
      }
      setLoadingUser(false);
    }
    getUser();

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setEmail(session.user.email || '');
        setName(session.user.user_metadata?.full_name || '');
      } else {
        setEmail('');
        setName('');
      }
    });
    return () => authListener.subscription.unsubscribe();
  }, []);

  // Calculate total price on addons change
  useEffect(() => {
    let addonsTotal = 0;
    for (const addonId in addons) {
      if (addons[addonId]) {
        const addon = addonsList.find((a) => a.id === addonId);
        if (addon) addonsTotal += addon.price;
      }
    }
    setTotalPrice(basePrice + addonsTotal);
  }, [addons, basePrice]);

  // Toggle addon checkbox
  function toggleAddon(addonId) {
    setAddons((prev) => ({
      ...prev,
      [addonId]: !prev[addonId],
    }));
  }

    if (!user) {
  alert('Please login first.');
  return;
}

  async function handleSubmit(e) {
    e.preventDefault();
    if (!termsAccepted) {
      alert('Please accept the terms and conditions');
      return;
    }

    setLoadingSubmit(true);

    // Prepare addons array for DB (only selected addons)
    const selectedAddons = addonsList
      .filter((addon) => addons[addon.id])
      .map((addon) => addon.label);

    // Insert booking data into Supabase 'bookings' table
    const { data, error } = await supabase.from('bookings').insert([
      {
        user_id: user.id,
        trek_name: trekId,
        trek_date: date,
        name: name,
        email: email,
        addons: selectedAddons,
        amount: totalPrice,
        booking_status: 'pending', // you can customize this
        
      },
    ]);

    setLoadingSubmit(false);

    if (error) {
      alert('Booking failed: ' + error.message);
    } else {
      alert('Booking confirmed! We will contact you soon.');
      // Optionally reset form or redirect
    }
  }

  if (loadingUser) return <p>Loading user data...</p>;

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: '480px',
        margin: '2rem auto',
        padding: '2rem',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        borderRadius: '10px',
        fontFamily: "'Roboto', sans-serif",
        backgroundColor: '#fff',
      }}
    >
      <h2 style={{ color: '#ff7300', marginBottom: '1.5rem', textAlign: 'center' }}>
        Confirm Your Booking
      </h2>

      <label style={labelStyle}>
        Trek Name
        <input type="text" value={trekId} readOnly style={inputStyle} />
      </label>

      <label style={labelStyle}>
        Date
        <input
          type="text"
          value={date}
          readOnly
          style={{ ...inputStyle, backgroundColor: '#f5f5f5', cursor: 'not-allowed' }}
        />
      </label>

      <label style={labelStyle}>
        Your Name
        <input
          type="text"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your full name"
          style={inputStyle}
        />
      </label>

      <label style={labelStyle}>
        Your Email
        <input
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          style={inputStyle}
        />
      </label>

      <fieldset
        style={{
          border: '1px solid #ff7300',
          borderRadius: '8px',
          padding: '1rem',
          marginBottom: '1rem',
        }}
      >
        <legend style={{ color: '#ff7300', fontWeight: 'bold' }}>Select Add-ons</legend>
        {addonsList.map((addon) => (
          <label
            key={addon.id}
            style={{
              display: 'block',
              marginBottom: '0.5rem',
              cursor: 'pointer',
              userSelect: 'none',
            }}
          >
            <input
              type="checkbox"
              checked={!!addons[addon.id]}
              onChange={() => toggleAddon(addon.id)}
              style={{ marginRight: '0.5rem' }}
              disabled={loadingSubmit}
            />
            {addon.label}
          </label>
        ))}
      </fieldset>

      <label style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', cursor: 'pointer' }}>
        <input
          type="checkbox"
          checked={termsAccepted}
          onChange={(e) => setTermsAccepted(e.target.checked)}
          style={{ marginRight: '0.5rem' }}
          disabled={loadingSubmit}
        />
        I accept the{' '}
        <a
          href="/terms-and-conditions"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#ff7300', marginLeft: '0.25rem', textDecoration: 'underline' }}
        >
          Terms and Conditions
        </a>
      </label>

      <p style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
        Total Price: <span style={{ color: '#ff7300' }}>₹{totalPrice}</span>
      </p>

      <button
        type="submit"
        disabled={!termsAccepted || loadingSubmit}
        style={{
          backgroundColor: termsAccepted ? '#ff7300' : '#ccc',
          color: 'white',
          padding: '0.9rem',
          border: 'none',
          borderRadius: '8px',
          width: '100%',
          fontWeight: 'bold',
          fontSize: '1.1rem',
          cursor: termsAccepted ? 'pointer' : 'not-allowed',
          transition: 'background-color 0.3s ease',
        }}
      >
        {loadingSubmit ? 'Booking...' : 'Book Now'}
      </button>
    </form>
  );
}

const labelStyle = {
  display: 'block',
  marginBottom: '1rem',
  fontWeight: '500',
  color: '#333',
};

const inputStyle = {
  width: '100%',
  padding: '0.55rem 0.8rem',
  fontSize: '1rem',
  borderRadius: '6px',
  border: '1.5px solid #ccc',
  boxSizing: 'border-box',
  outlineColor: '#ff7300',
};
