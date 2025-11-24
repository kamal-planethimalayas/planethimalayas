import React, { useEffect, useMemo, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import "./AdminDashboard.css";

export default function AdminDashboard() {
  // auth & user
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // data
  const [users, setUsers] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [treks, setTreks] = useState([]);
  const [addons, setAddons] = useState([]);
  const [addonBookings, setAddonBookings] = useState([]);
  const [vouchers, setVouchers] = useState([]);
  const [discounts, setDiscounts] = useState([]);
  const [payments, setPayments] = useState([]);
  const [groupMembers, setGroupMembers] = useState([]);

  // UI state
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [trekFilter, setTrekFilter] = useState("");
  const [sortBy, setSortBy] = useState("created_at");
  const [sortDir, setSortDir] = useState("desc");
  const [selectedIds, setSelectedIds] = useState(new Set());
  const [activeBookingId, setActiveBookingId] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentForm, setPaymentForm] = useState({ amount: "", method: "UPI", tx_id: "" });

  // scroll to top
  useEffect(() => { window.scrollTo(0, 0); }, []);

  // auth listener
  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT" || !session) window.location.replace("/");
    });
    return () => sub?.subscription?.unsubscribe?.();
  }, []);

  // initial data load
  useEffect(() => {
    let bookingSub = null;

    const init = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) return window.location.replace("/");
        setUser(session.user);

        // get role
        const { data: profileData } = await supabase
          .from("profiles")
          .select("role")
          .eq("id", session.user.id)
          .maybeSingle();
        const userRole = profileData?.role ?? "user";
        setRole(userRole);
        if (userRole !== "admin") return (window.location.href = "/dashboard");

        await fetchAllData();

        // realtime subscription
        bookingSub = supabase
          .channel("public:bookings")
          .on("postgres_changes", { event: "*", schema: "public", table: "bookings" }, payload => {
            setBookings(prev => {
              if (payload.eventType === "DELETE") return prev.filter(b => b.id !== payload.old.id);
              if (payload.eventType === "INSERT") return [payload.new, ...prev];
              if (payload.eventType === "UPDATE") return prev.map(b => (b.id === payload.new.id ? payload.new : b));
              return prev;
            });
          })
          .subscribe();

        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(err.message || "Failed to load admin data");
      }
    };

    init();
    return () => { if (bookingSub) supabase.removeChannel(bookingSub); };
  }, []);

  const fetchAllData = async () => {
    try {
      const results = await Promise.all([
        supabase.from("profiles").select("*"),
        supabase.from("bookings").select("*"),
        supabase.from("group_members").select("*"),
        supabase.from("treks").select("*"),
        supabase.from("addons").select("*"),
        supabase.from("addon_bookings").select("*"),
        supabase.from("vouchers").select("*"),
        supabase.from("discounts").select("*"),
        supabase.from("payments").select("*")
      ]);

      const [usersData, bookingsData, groupMembersData, treksData, addonsData, addonBookingsData, vouchersData, discountsData, paymentsData] =
        results.map(r => r.data || []);

      setUsers(usersData);
      setGroupMembers(groupMembersData);

      // merge group members into bookings
      const mergedBookings = (bookingsData || []).map(b => {
        const profile = usersData.find(u => u.id === b.user_id);
        const members = groupMembersData.filter(m => m.booking_id === b.id);
        return {
          ...b,
          user_email: profile?.email || profile?.user_email || "N/A",
          group_members: members
        };
      });

      setBookings(mergedBookings.reverse());
      setTreks(treksData);
      setAddons(addonsData);
      setAddonBookings(addonBookingsData);
      setVouchers(vouchersData);
      setDiscounts(discountsData);
      setPayments(paymentsData);
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to fetch data");
    }
  };

  // LOGOUT
  const handleLogout = async () => await supabase.auth.signOut();

  // Email
  const sendEmail = (booking) => {
    if (!booking.user_email) return alert("No email available.");
    const subject = `Booking ${booking.id} - Planethimalayas`;
    const body = `Hello ${booking.customer_name || ""},\nRegarding booking ID: ${booking.id}\nTrek: ${booking.trek_name}\nDate: ${booking.trek_date || "N/A"}\nPrice: ${booking.final_price || "N/A"}\nRegards, Planethimalayas Team`;
    window.location.href = `mailto:${booking.user_email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  // WhatsApp
  const sendWhatsAppGroup = (members, bookingId) => {
    if (!members?.length) return alert("No phone numbers");
    members.forEach(m => {
      if (m.phone) {
        const text = encodeURIComponent(`Hello ${m.name}, regarding booking ${bookingId} with Planethimalayas.`);
        window.open(`https://wa.me/${m.phone.replace(/[^0-9]/g, "")}?text=${text}`, "_blank");
      }
    });
  };

  // Booking status update
  const updateBookingStatus = async (bookingId, status) => {
    try {
      const { error } = await supabase.from("bookings").update({ booking_status: status }).eq("id", bookingId);
      if (error) throw error;
      setBookings(prev => prev.map(b => (b.id === bookingId ? { ...b, booking_status: status } : b)));
    } catch (err) {
      alert("Failed to update status: " + err.message);
    }
  };

  // Payment modal
  const openPaymentModal = (bookingId) => {
    setActiveBookingId(bookingId);
    setPaymentForm({ amount: "", method: "UPI", tx_id: "" });
    setShowPaymentModal(true);
  };

  const submitPayment = async () => {
    const bookingId = activeBookingId;
    if (!bookingId) return;
    const amount = parseFloat(paymentForm.amount);
    if (!amount || amount <= 0) return alert("Enter valid amount");

    try {
      const { data, error } = await supabase.from("payments").insert([{ booking_id: bookingId, amount, method: paymentForm.method, transaction_id: paymentForm.tx_id }]);
      if (error) throw error;
      setPayments(prev => [...prev, ...data]);
      setShowPaymentModal(false);
      alert("Payment added");
    } catch (err) {
      alert("Failed to add payment: " + err.message);
    }
  };

  // selection
  const toggleSelect = (id) => setSelectedIds(prev => {
    const copy = new Set(prev);
    copy.has(id) ? copy.delete(id) : copy.add(id);
    return copy;
  });

  const selectAllVisible = (visibleList) => setSelectedIds(prev => {
    const copy = new Set(prev);
    visibleList.forEach(i => copy.add(i.id));
    return copy;
  });

  const clearSelection = () => setSelectedIds(new Set());

  const batchUpdateStatus = async (status) => {
    if (!selectedIds.size) return alert("No bookings selected.");
    const ids = Array.from(selectedIds);
    try {
      const { error } = await supabase.from("bookings").update({ booking_status: status }).in("id", ids);
      if (error) throw error;
      setBookings(prev => prev.map(b => ids.includes(b.id) ? { ...b, booking_status: status } : b));
      clearSelection();
      alert("Updated status for selected bookings");
    } catch (err) {
      alert("Batch update failed: " + err.message);
    }
  };

  const exportCSV = (rows) => {
    if (!rows?.length) return alert("No rows to export");
    const keys = Object.keys(rows[0]);
    const csv = [keys.join(","), ...rows.map(r => keys.map(k => `"${(r[k] ?? "").toString().replace(/"/g,'""')}"`).join(","))].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = `bookings_export_${new Date().toISOString()}.csv`;
    a.click(); URL.revokeObjectURL(url);
  };

  const visibleBookings = useMemo(() => {
    let arr = bookings.slice();
    if (query) arr = arr.filter(b => (b.user_email + " " + b.trek_name + " " + b.id + " " + b.booking_status).toLowerCase().includes(query.toLowerCase()));
    if (statusFilter) arr = arr.filter(b => b.booking_status === statusFilter);
    if (trekFilter) arr = arr.filter(b => b.trek_name === trekFilter);
    arr.sort((a,b) => {
      const av = a[sortBy] ?? "";
      const bv = b[sortBy] ?? "";
      if (sortDir === "asc") return av > bv ? 1 : av < bv ? -1 : 0;
      return av < bv ? 1 : av > bv ? -1 : 0;
    });
    return arr;
  }, [bookings, query, statusFilter, trekFilter, sortBy, sortDir]);

  if (loading) return <p className="loading-text">Loading Admin Dashboard...</p>;
  if (error) return <p className="error-text">{error}</p>;

  return (
    <div className="admin-root">
      <header className="admin-header">
        <div>
          <h1 className="admin-title">Admin Dashboard</h1>
          <p className="admin-sub">Signed in as: {user?.email}</p>
        </div>
        <div className="header-actions">
          <button onClick={handleLogout} className="btn btn-danger">Logout</button>
        </div>
      </header>

      <main className="admin-main">
        {/* Controls */}
        <section className="controls-row">
          <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search..." className="input input-flex" />
          <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)} className="select">
            <option value="">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="confirmed">Confirmed</option>
            <option value="payment_pending">Payment Pending</option>
            <option value="cancelled">Cancelled</option>
            <option value="completed">Completed</option>
          </select>
          <select value={trekFilter} onChange={e => setTrekFilter(e.target.value)} className="select">
            <option value="">All Treks</option>
            {treks.map(t => <option key={t.id} value={t.name}>{t.name}</option>)}
          </select>
          <button onClick={() => setSortDir(s => s === "asc" ? "desc" : "asc")} className="btn btn-outline">Sort: {sortDir}</button>
          <button onClick={() => exportCSV(visibleBookings)} className="btn btn-primary">Export CSV</button>
        </section>

        {/* Bookings Table */}
        <section className="table-card">
          <h2 className="table-title">Bookings</h2>
          <div className="table-scroll">
            <table className="data-table">
              <thead>
                <tr>
                  <th><input type="checkbox" onChange={e => e.target.checked ? selectAllVisible(visibleBookings) : clearSelection()} /></th>
                  <th>ID</th>
                  <th>User</th>
                  <th>Trek</th>
                  <th>Status</th>
                  <th>Price</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {visibleBookings.map(b => (
                  <tr key={b.id} className={selectedIds.has(b.id) ? "row-selected" : ""}>
                    <td><input checked={selectedIds.has(b.id)} onChange={() => toggleSelect(b.id)} type="checkbox" /></td>
                    <td>{b.id}</td>
                    <td>
                      <div>{b.user_email}</div>
                      <div className="muted">{b.customer_name}</div>
                      {b.group_members?.length > 0 && <div className="muted">{b.group_members.length} more member(s)</div>}
                    </td>
                    <td>{b.trek_name}</td>
                    <td>{b.booking_status}</td>
                    <td>₹{b.final_price}</td>
                    <td>{b.trek_date || b.created_at}</td>
                    <td>
                      <div className="actions-inline">
                        <button onClick={() => setActiveBookingId(b.id)} className="btn small">View</button>
                        <button onClick={() => sendEmail(b)} className="btn btn-amber small">Email</button>
                        <button onClick={() => sendWhatsAppGroup(b.group_members, b.id)} className="btn btn-whatsapp small">WhatsApp</button>
                        <select value={b.booking_status} onChange={e => updateBookingStatus(b.id, e.target.value)} className="select small">
                          <option value="pending">pending</option>
                          <option value="approved">approved</option>
                          <option value="confirmed">confirmed</option>
                          <option value="payment_pending">payment_pending</option>
                          <option value="cancelled">cancelled</option>
                          <option value="completed">completed</option>
                        </select>
                        <button onClick={() => openPaymentModal(b.id)} className="btn small">Add Payment</button>
                      </div>
                    </td>
                  </tr>
                ))}
                {visibleBookings.length === 0 && <tr><td colSpan="8" className="center muted">No bookings found</td></tr>}
              </tbody>
            </table>
          </div>
        </section>

        {/* Active Booking Details */}
        {activeBookingId && (() => {
          const b = bookings.find(bk => bk.id === activeBookingId);
          return (
            <section className="details-card">
              <h2>Booking Details — {activeBookingId}</h2>
              <div>
                <h3>Main User</h3>
                <pre className="json-box">{JSON.stringify(users.find(u => u.id === b.user_id) || {}, null, 2)}</pre>
              </div>

              {b.group_members?.length > 0 && (
                <div>
                  <h3>Group Members</h3>
                  <ul>
                    {b.group_members.map(m => <li key={m.id}>{m.name} | {m.email} | {m.phone || "No phone"} | DOB: {m.date_of_birth}</li>)}
                  </ul>
                </div>
              )}

              <div>
                <h3>Addons</h3>
                <pre className="json-box">
                  {JSON.stringify(addonBookings.filter(ab => ab.booking_id === b.id).map(ab => ({ ...ab, addon: addons.find(a => a.id === ab.addon_id) })), null, 2)}
                </pre>
              </div>

              <div>
                <h3>Payments</h3>
                <pre className="json-box">{JSON.stringify(payments.filter(p => p.booking_id === b.id), null, 2)}</pre>
              </div>
            </section>
          );
        })()}

        {/* Payment Modal */}
        {showPaymentModal && (
          <div className="modal-backdrop">
            <div className="modal">
              <h3>Add Payment for {activeBookingId}</h3>
              <input placeholder="Amount" value={paymentForm.amount} onChange={e => setPaymentForm(s => ({ ...s, amount: e.target.value }))} className="input" />
              <input placeholder="Transaction ID" value={paymentForm.tx_id} onChange={e => setPaymentForm(s => ({ ...s, tx_id: e.target.value }))} className="input" />
              <select value={paymentForm.method} onChange={e => setPaymentForm(s => ({ ...s, method: e.target.value }))} className="select">
                <option>UPI</option><option>Card</option><option>Bank Transfer</option><option>Cash</option>
              </select>
              <div className="modal-actions">
                <button onClick={submitPayment} className="btn btn-success">Save</button>
                <button onClick={() => setShowPaymentModal(false)} className="btn">Cancel</button>
              </div>
            </div>
          </div>
        )}

        <footer className="admin-footer">Planethimalayas Admin • Built for operations</footer>
      </main>
    </div>
  );
}
