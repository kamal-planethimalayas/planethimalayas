// src/pages/admindashboard.jsx
import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function AdminDashboard() {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [treks, setTreks] = useState([]);
  const [addons, setAddons] = useState([]);
  const [addonBookings, setAddonBookings] = useState([]);
  const [vouchers, setVouchers] = useState([]);
  const [discounts, setDiscounts] = useState([]);
  const [payments, setPayments] = useState([]);
  const [selectedBookingId, setSelectedBookingId] = useState("");
  const [filterBookingId, setFilterBookingId] = useState("");
  const [error, setError] = useState(null);

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
  // Redirect to home whenever the user signs out (or there is no session)
  const { data: { subscription } } = supabase.auth.onAuthStateChange(
    (event, session) => {
      if (event === "SIGNED_OUT" || !session) {
        window.location.replace("/"); // go to homepage
      }
    }
  );

  return () => {
    subscription.unsubscribe();
  };
}, []);


  useEffect(() => {
    const init = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        window.location.replace("/");
        return;
      }

      setUser(session.user);

      const { data: profileData } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", session.user.id)
        .maybeSingle();

      const userRole = profileData?.role ?? "user";
      setRole(userRole);
      if (userRole !== "admin") return window.location.href = "/dashboard";

      await fetchAllData();
      setLoading(false);
    };

    init();
  }, []);

  const fetchAllData = async () => {
    try {
      const [{ data: usersData }, { data: bookingsData }, { data: treksData },
             { data: addonsData }, { data: addonBookingsData }, { data: vouchersData },
             { data: discountsData }, { data: paymentsData }] = await Promise.all([
        supabase.from("profiles").select("*"),
        supabase.from("bookings").select("*"),
        supabase.from("treks").select("*"),
        supabase.from("addons").select("*"),
        supabase.from("addon_bookings").select("*"),
        supabase.from("vouchers").select("*"),
        supabase.from("discounts").select("*"),
        supabase.from("payments").select("*")
      ]);

      setUsers(usersData);
      // Merge bookings with user email
      const mergedBookings = bookingsData.map(b => {
        const profile = usersData.find(u => u.id === b.user_id);
        return { ...b, user_email: profile?.email || "N/A" };
      });
      setBookings(mergedBookings);
      setTreks(treksData);
      setAddons(addonsData);
      setAddonBookings(addonBookingsData);
      setVouchers(vouchersData);
      setDiscounts(discountsData);
      setPayments(paymentsData);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const handleSendEmail = (booking) => {
    const email = booking.user_email;
    if (!email) return alert("No email available.");
    window.location.href = `mailto:${email}?subject=Booking ${booking.id}`;
  };

  // Master filtered booking
  const masterBooking = filterBookingId
    ? bookings.find(b => b.id === filterBookingId)
    : null;

  // Related data filtered by selected booking
  const relatedAddonsBooked = masterBooking
    ? addonBookings.filter(ab => ab.booking_id === masterBooking.id)
    : [];

  const relatedPayments = masterBooking
    ? payments.filter(p => p.booking_id === masterBooking.id)
    : [];

  const relatedVoucher = masterBooking
    ? vouchers.find(v => v.redeemed_bookings?.includes(masterBooking.id))
    : null;

  const relatedDiscount = masterBooking
    ? discounts.find(d => d.id === masterBooking.discount_id)
    : null;

  const relatedUser = masterBooking
    ? users.find(u => u.id === masterBooking.user_id)
    : null;

  const relatedTrek = masterBooking
    ? treks.find(t => t.name === masterBooking.trek_name)
    : null;

  if (loading) return <p style={{ textAlign: "center", marginTop: 50, color: "#ff7300", fontWeight: "bold" }}>Loading Admin Dashboard...</p>;
  if (error) return <p style={{ textAlign: "center", marginTop: 50, color: "red" }}>{error}</p>;

  return (
    <div style={{ padding: 24, maxWidth: 1400, margin: "auto", fontFamily: "Roboto, sans-serif" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <h1 style={{ fontFamily: "Helvetica, sans-serif" }}>Admin Dashboard</h1>
        <button
          style={{ background: "red", color: "#fff", border: "none", padding: "8px 12px", borderRadius: 4, cursor: "pointer" }}
          onClick={handleLogout}
        >Logout</button>
      </header>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontFamily: "Helvetica", color: "#ff7300", marginBottom: 16 }}>
          Welcome, {user?.user_metadata?.full_name || user?.email}
        </h2>
      </section>

      {/* Booking Filter */}
      <section style={{ marginBottom: 24 }}>
        <label>Enter Booking ID to filter: </label>
        <input
          type="text"
          value={filterBookingId}
          onChange={e => setFilterBookingId(e.target.value)}
          style={{ marginLeft: 8, padding: 4 }}
        />
      </section>

      {/* Master Booking Table */}
      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontFamily: "Helvetica", color: "#ff7300", marginBottom: 16 }}>Bookings</h2>
        <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 16 }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ccc", padding: 8 }}>Booking ID</th>
              <th style={{ border: "1px solid #ccc", padding: 8 }}>User Email</th>
              <th style={{ border: "1px solid #ccc", padding: 8 }}>Trek Name</th>
              <th style={{ border: "1px solid #ccc", padding: 8 }}>Status</th>
              <th style={{ border: "1px solid #ccc", padding: 8 }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map(b => (
              <tr key={b.id}>
                <td style={{ border: "1px solid #ccc", padding: 8 }}>{b.id}</td>
                <td style={{ border: "1px solid #ccc", padding: 8 }}>{b.user_email}</td>
                <td style={{ border: "1px solid #ccc", padding: 8 }}>{b.trek_name}</td>
                <td style={{ border: "1px solid #ccc", padding: 8 }}>{b.booking_status}</td>
                <td style={{ border: "1px solid #ccc", padding: 8 }}>
                  <button
                    style={{ marginRight: 8, padding: "4px 8px", cursor: "pointer" }}
                    onClick={() => setFilterBookingId(b.id)}
                  >Select</button>
                  <button
                    style={{ padding: "4px 8px", cursor: "pointer", background: "#ff7300", color: "#fff", border: "none" }}
                    onClick={() => handleSendEmail(b)}
                  >Email User</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Related Tables */}
      {masterBooking && (
        <section>
          <h2 style={{ fontFamily: "Helvetica", color: "#ff7300", marginBottom: 16 }}>Related Data for Booking {masterBooking.id}</h2>

          {/* User */}
          <div style={{ marginBottom: 16 }}>
            <h3>User Info</h3>
            <pre>{JSON.stringify(relatedUser, null, 2)}</pre>
          </div>

          {/* Trek */}
          <div style={{ marginBottom: 16 }}>
            <h3>Trek Info</h3>
            <pre>{JSON.stringify(relatedTrek, null, 2)}</pre>
          </div>

          {/* Addons Booked */}
          <div style={{ marginBottom: 16 }}>
            <h3>Addons Booked</h3>
            <pre>{JSON.stringify(relatedAddonsBooked.map(ab => {
              const addon = addons.find(a => a.id === ab.addon_id);
              return { ...ab, addon_name: addon?.name, addon_price: addon?.price };
            }), null, 2)}</pre>
          </div>

          {/* Voucher */}
          <div style={{ marginBottom: 16 }}>
            <h3>Voucher Applied</h3>
            <pre>{JSON.stringify(relatedVoucher, null, 2)}</pre>
          </div>

          {/* Discount */}
          <div style={{ marginBottom: 16 }}>
            <h3>Discount Applied</h3>
            <pre>{JSON.stringify(relatedDiscount, null, 2)}</pre>
          </div>

          {/* Payments */}
          <div style={{ marginBottom: 16 }}>
            <h3>Payments</h3>
            <pre>{JSON.stringify(relatedPayments, null, 2)}</pre>
          </div>

          {/* Calculated Totals */}
          <div style={{ marginBottom: 16 }}>
            <h3>Totals</h3>
            <p>
              Base Price: {masterBooking.base_price} <br />
              Addons Price: {relatedAddonsBooked.reduce((sum, ab) => {
                const addon = addons.find(a => a.id === ab.addon_id);
                return sum + (addon?.price || 0) * (ab.quantity || 1);
              }, 0)} <br />
              Final Price: {masterBooking.final_price} <br />
            </p>
          </div>
        </section>
      )}
    </div>
  );
}
