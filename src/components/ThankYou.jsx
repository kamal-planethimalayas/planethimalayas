import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function ThankYouPage() {
  const [booking, setBooking] = useState(null);
  const [user, setUser] = useState(null);
  const [addons, setAddons] = useState([]);
  const [amountPaid, setAmountPaid] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const bookingId = params.get('bookingId');

    if (!bookingId) return;

    async function fetchBookingDetails() {
      // 1️⃣ Fetch booking
      const { data: bookingData, error: bookingError } = await supabase
        .from('bookings')
        .select('*')
        .eq('id', bookingId)
        .single();

      if (bookingError || !bookingData) return;

      setBooking(bookingData);

      // 2️⃣ Fetch user/profile info
      const { data: userData } = await supabase
        .from('profiles')
        .select('email')
        .eq('id', bookingData.user_id)
        .single();
      setUser(userData);

      // 3️⃣ Fetch addons
      const { data: addonsData } = await supabase
        .from('addon_bookings')
        .select('quantity, addons(name)')
        .eq('booking_id', bookingId);

      if (addonsData) {
        const formattedAddons = addonsData.map(a => `${a.addons.name} x${a.quantity}`);
        setAddons(formattedAddons);
      }

      // 4️⃣ Fetch payment amount
      const { data: paymentData } = await supabase
        .from('payments')
        .select('amount')
        .eq('booking_id', bookingId)
        .order('created_at', { ascending: true })
        .limit(1)
        .single();

      setAmountPaid(paymentData?.amount || null);
    }

    fetchBookingDetails();
  }, []);

  if (!booking)
    return (
      <p style={{ fontFamily: 'Helvetica, sans-serif', fontWeight: 'bold', color: '#ff7300', textAlign: 'center', marginTop: '2rem' }}>
        Loading Booking Details
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
      </p>
    );

  const formattedDate =
    booking.start_date && booking.end_date
      ? `${booking.start_date} to ${booking.end_date}`
      : booking.start_date || 'N/A';

  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '3rem auto',
        padding: '2rem',
        fontFamily: "'Roboto', sans-serif",
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      }}
    >
      {/* Logo & Title */}
      <a href="/" style={{ textDecoration: 'none' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <img src="/images/main/brand-logo.png" alt="Planethimalayas Logo" style={{ height: '50px', marginRight: '10px' }} />
          <h2 style={{ fontFamily: 'Helvetica, sans-serif', fontSize: '1.8rem', margin: 0 }}>
            <span style={{ color: 'black' }}>Planet</span>
            <span style={{ color: '#ff7300' }}>himalayas</span>
          </h2>
        </div>
      </a>

      <h1 style={{ color: '#ff7300', textAlign: 'center', marginBottom: '1rem' }}>Thank You!</h1>
      <p style={{ textAlign: 'center', fontSize: '1.1rem' }}>
        Your booking is confirmed.
      </p>
      <p style={{ textAlign: 'center', fontSize: '1.1rem' }}>
        A confirmation email has been sent to <strong>{user?.email || 'N/A'}</strong>.
      </p>

      <h2 style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2rem', marginBottom: '0.5rem' }}>
        <span style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/images/main/brand-logo.png" alt="Planethimalayas Logo" style={{ height: '40px', marginRight: '8px' }} />
          <span style={{ color: 'black' }}>Planet</span>
          <span style={{ color: '#ff7300' }}>himalayas</span>
        </span>
        <span style={{ marginTop: '0.5rem' }}>Booking Details</span>
      </h2>

      <ul>
        <li>
          <strong>Booking ID:</strong> {booking.id}
        </li>
        <li>
          <strong>Trek Name:</strong> {booking.trek_name}
        </li>
        <li>
          <strong>Date:</strong> {formattedDate}
        </li>
        {addons.length > 0 && (
          <li>
            <strong>Add-ons:</strong> {addons.join(', ')}
          </li>
        )}
        <li>
          <strong>Amount Paid:</strong> ₹{amountPaid || 'N/A'}
        </li>
      </ul>

      <p style={{ marginTop: '2rem', textAlign: 'center' }}>
        <a href="/cancellation-and-refund-policy" style={{ color: '#ff7300', textDecoration: 'underline', marginRight: '1rem' }}>
          Read Cancellation & Refund Policy
        </a>
      </p>
      <p>
        <a href="/faqs" style={{ color: '#ff7300', textDecoration: 'underline' }}>
        Read FAQs
        </a>
      </p>
    </div>
  );
}
