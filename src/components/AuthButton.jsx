// src/components/AuthButton.jsx
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { createPortal } from "react-dom";
import "../components/AuthButton.css";

export default function AuthButton() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // <-- Wait for session
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    // Check session on mount
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for login/logout events
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => setUser(session?.user ?? null)
    );

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
  const handleClickOutside = (e) => {
    if (!e.target.closest(".profile-dropdown") && !e.target.closest(".profile-circle")) {
      setDropdownOpen(false);
    }
  };
  if (dropdownOpen) document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, [dropdownOpen]);

  const handleLogin = () => {
    window.location.href = "/auth"; // Redirect to your login page
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => setDropdownOpen(prev => !prev);

  // Show loading until session is known
  if (loading) return <div className="auth-loading"></div>;

  if (!user) {
    return (
      <button className="auth-btn login" onClick={handleLogin}>
        Login
      </button>
    );
  }

  // Get initials for profile circle
  const initials = user.user_metadata?.full_name
    ? user.user_metadata.full_name
        .split(" ")
        .map(n => n[0])
        .join("")
        .toUpperCase()
    : user.email[0].toUpperCase();

  // Function to determine dashboard based on role
  const getDashboardLink = async () => {
    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single();

    if (profile?.role === "admin") return "/admindashboard";
    return "/dashboard"; // Regular user
  };

  const handleDashboardClick = async (e) => {
    e.preventDefault();
    const link = await getDashboardLink();
    window.location.href = link;
  };

  return (
    <div className="auth-profile-wrapper">
      <div className="profile-circle" onClick={toggleDropdown}>
        {initials}
      </div>

      {dropdownOpen &&
        createPortal(
          <div className="profile-dropdown">
            <button className="dropdown-link" onClick={handleDashboardClick}>Dashboard</button>
            <button className="dropdown-link logout" onClick={handleLogout}>Logout</button>
          </div>,
          document.body
        )}
    </div>
  );
}