// src/components/Dashboard.jsx
import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";

// --- Styles ---
const snippetCardStyle = {
  flex: 1,
  minWidth: "250px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: "1rem",
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  cursor: "pointer",
};

const snippetHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "0.5rem",
  color: "blue",
  fontWeight: "bold",
};

const dropdownStyle = {
  background: "#fff",
  border: "1px solid #eee",
  borderRadius: "8px",
  padding: "0.75rem",
  marginTop: "0.5rem",
  boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
  maxHeight: "240px",
  overflowY: "auto",
};

const modalOverlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 999,
};

const modalStyle = {
  background: "#fff",
  padding: "1.5rem",
  borderRadius: "10px",
  maxWidth: "500px",
  width: "90%",
  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
};

const addBtnStyle = {
  padding: "0.4rem 0.8rem",
  borderRadius: "4px",
  border: "none",
  cursor: "pointer",
  backgroundColor: "#1976d2",
  color: "white",
};


export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userVouchers, setUserVouchers] = useState([]);
  const [showVouchers, setShowVouchers] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [showBookings, setShowBookings] = useState(false);
  const [userBookings, setUserBookings] = useState([]);
 

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
    async function fetchUserAndData() {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        if (!user) {
         window.location.replace("/"); // redirect if no user
         return;
       }


        setUser(user);

        const { data: vouchersData } = await supabase
          .from("vouchers")
          .select("*")
          .eq("user_id", user.id);
        setUserVouchers(vouchersData || []);

        

        const notes = [];
        if (vouchersData?.length) notes.push(`You have ${vouchersData.length} voucher(s)`);
        

        if (notes.length) {
          setNotifications(notes);
          setTimeout(() => setNotifications([]), 5000);
        }
      } catch (err) {
        console.error("Dashboard fetch error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchUserAndData();
  }, []);

  useEffect(() => {
    async function fetchBookings() {
      const { data } = await supabase
        .from("bookings")
        .select(`id, trek_name, start_date, end_date, booking_status, 
                 voucher:voucher_id(code), discount:discount_id(code),
                 group_members(id, name, email, addon_bookings(addon_id))`)
        .eq("user_id", user.id);
      setUserBookings(data || []);
    }
    if (user) fetchBookings();
  }, [user]);

  if (loading)
    return (
      <p style={{ textAlign: "center", color: "#ff7300", marginTop: "2rem" }}>
        Loading Dashboard...
      </p>
    );

  const notificationStyle = {
    backgroundColor: "#ff7300",
    color: "white",
    padding: "6px 12px",
    borderRadius: "6px",
    fontSize: "14px",
    marginLeft: "1rem",
    whiteSpace: "nowrap",
  };

  return (
    <div style={{ maxWidth: "900px", padding: "0 2rem", margin: "2rem auto", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Welcome, {user?.user_metadata?.full_name || "Adventurer"}</h1>
        {notifications.length > 0 && (
          <div style={notificationStyle}>{notifications.join(" • ")}</div>
        )}
      </div>

      <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem", flexWrap: "wrap" }}>
        <div style={{ position: "relative", flex: 1, minWidth: "250px" }}>
          <VoucherBox
            vouchers={userVouchers}
            show={showVouchers}
            toggle={() => setShowVouchers((prev) => !prev)}
          />
        </div>
      </div>

      <div style={{ marginTop: "1.5rem" }}>
        <BookingCardsBox
          bookings={userBookings}
          show={showBookings}
          toggle={() => setShowBookings((prev) => !prev)}
        />
      </div>
    </div>
  );
}

// --- Voucher Box ---
function VoucherBox({ vouchers, show, toggle }) {
  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    alert("Voucher code copied: " + code);
  };

  const voucherCardStyle = {
    ...snippetCardStyle,
    border: "1px solid blue",
  };

  const voucherHeaderStyle = {
    ...snippetHeaderStyle,
    color: "blue",
  };

  return (
    <div style={voucherCardStyle}>
      <div style={voucherHeaderStyle} onClick={toggle}>
        <strong>My Vouchers ({vouchers.length})</strong>
        <span>{show ? "▲" : "▼"}</span>
      </div>

      {show && (
        <div style={dropdownStyle}>
          {vouchers.map((v) => (
            <p
              key={v.id}
              style={{ margin: "0.3rem 0", cursor: "pointer", color: "#333" }}
              title="Click to copy"
              onClick={() => copyToClipboard(v.code)}
            >
              <strong>{v.code}</strong> ({v.type}) — ₹{v.balance}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

// --- Booking Cards Box ---
function BookingCardsBox({ bookings, show, toggle }) {
  const [viewBooking, setViewBooking] = useState(null);
  const [deleteBooking, setDeleteBooking] = useState(null);

  const handleUpdateCancel = (booking) => {
    alert(`Update / Cancel booking ID: ${booking.id}`);
  };

  return (
    <div style={{ ...snippetCardStyle, borderColor: "#ff7300" }}>
      <div style={{ ...snippetHeaderStyle, color: "#ff7300" }} onClick={toggle}>
        <strong>My Bookings ({bookings.length})</strong>
        <span>{show ? "▲" : "▼"}</span>
      </div>

      {show && (
        <div style={dropdownStyle}>
          {bookings.map((b) => (
            <div
              key={b.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "6px",
                padding: "0.8rem",
                marginBottom: "0.6rem",
                background: "#fafafa",
              }}
            >
              <p>
                <strong>Trek: {b.trek_name}</strong>
              </p>
              <p>
                <strong>Date:</strong> {b.start_date} to {b.end_date}
              </p>
              <p><strong>Participant:</strong> {b.group_members?.[0]?.name || "—"}</p>

              {b.booking_status === "paid" ? (
                <a
                  href={`mailto:planethimalayas@gmail.com?subject=Update/Cancel Booking request for Booking ID: ${b.id}`}
                  style={{ ...addBtnStyle, backgroundColor: "#ff7300", textDecoration: "none", display: "inline-block", textAlign: "center" }}
                  >
                  Update / Cancel
                </a>
              ) : (
                <div
                  style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}
                >
                  <button style={addBtnStyle} onClick={() => setViewBooking(b)}>
                    View
                  </button>
                  <button
                    style={{ ...addBtnStyle, backgroundColor: "#ff7300" }}
                    onClick={() =>
                      (window.location.href = `/booking-form?bookingId=${b.id}`)
                    }
                  >
                    Edit
                  </button>
                  <button
                    style={{ ...addBtnStyle, backgroundColor: "#d32f2f" }}
                    onClick={() => setDeleteBooking(b)}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Modals */}
      {viewBooking && (
        <div style={modalOverlayStyle}>
          <div style={modalStyle}>
            <h3>Booking Details</h3>
            <p>
              <strong>Participant:</strong>{" "}
              {viewBooking.group_members?.[0]?.name || "—"}
            </p>
            <p>
              <strong>Codes:</strong>{" "}
              <li>{viewBooking.voucher?.code || "—"}</li>
              <li>{viewBooking.discount?.code || ""}</li> 
            </p>
            <p></p><strong>Group Members</strong>
              {viewBooking.group_members?.map((gm) => (
                <li key={gm.id}>
                  {gm.name} ({gm.email})<p><strong>Addons:</strong>{" "}
                  {gm.addon_bookings?.map((a) => a.addon_id).join(", ") ||
                    "None"}</p>
                </li>
              ))}
            <button onClick={() => setViewBooking(null)} style={addBtnStyle}>
              Close
            </button>
          </div>
        </div>
      )}

      {deleteBooking && (
        <div style={modalOverlayStyle}>
          <div style={modalStyle}>
            <p>This booking will be permanently deleted.</p>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <button
                style={{ ...addBtnStyle, backgroundColor: "#d32f2f" }}
                onClick={async () => {
                  await supabase
                    .from("bookings")
                    .delete()
                    .eq("id", deleteBooking.id);
                  window.location.reload();
                }}
              >
                Continue
              </button>
              <button style={addBtnStyle} onClick={() => setDeleteBooking(null)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
