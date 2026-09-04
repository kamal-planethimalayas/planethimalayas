import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isLogin, setIsLogin] = useState(true);
  const [infoMessage, setInfoMessage] = useState("");
  const [dots, setDots] = useState("");
  const [queryParams, setQueryParams] = useState({ trek: "", date: "", price: "" });
  const [hoverBtn, setHoverBtn] = useState(false);

  const brandColor = "#ff7300";

  // Animate "...loading"
  useEffect(() => {
    if (!loading) {
      setDots("");
      return;
    }
    const interval = setInterval(() => {
      setDots(prev => (prev.length < 3 ? prev + "." : ""));
    }, 500);
    return () => clearInterval(interval);
  }, [loading]);

  // Grab params
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      setQueryParams({
        trek: params.get("trek") || "",
        date: params.get("date") || "",
        price: params.get("price") || "",
      });
    }
  }, []);

  async function handleAuth(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setInfoMessage("");

    try {
      if (isLogin) {
        const { data, error: loginError } = await supabase.auth.signInWithPassword({ email, password });
        if (loginError) throw loginError;

        const { data: profileData, error: profileError } = await supabase
          .from("profiles")
          .select("role")
          .eq("id", data.user.id)
          .single();
        if (profileError) throw profileError;

        const userRole = profileData?.role ?? "user";

        if (queryParams.trek && queryParams.date) {
          const redirectUrl = `/booking-form?trek=${encodeURIComponent(
            queryParams.trek
          )}&date=${encodeURIComponent(queryParams.date)}&price=${encodeURIComponent(
            queryParams.price
          )}`;
          window.location.href = redirectUrl;
        } else if (userRole === "admin") {
          window.location.href = "/admindashboard";
        } else {
          window.location.href = "/dashboard";
        }
      } else {
        const { error: signupError } = await supabase.auth.signUp({ email, password });
        if (signupError) throw signupError;

        setInfoMessage("Signup successful! Please check your email to confirm your account.");
        setEmail("");
        setPassword("");
      }
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  }

  const tabStyle = (active) => ({
    flex: 1,
    padding: "1rem",
    marginTop: "2rem",
    textAlign: "center",
    fontWeight: "bold",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "0.3s",
    border: `2px solid ${active ? brandColor : "#ff7300"}`,
    backgroundColor: active ? brandColor : "transparent",
    color: active ? "black" : "#ff7300",
    boxShadow: active ? `0 0 10px ${brandColor}` : "none",
    userSelect: "none",
  });

  const inputCommonStyle = {
    width: "100%",
    padding: "0.75rem 3rem 0.75rem 0.75rem",
    fontSize: "1rem",
    borderRadius: "5px",
    border: `1px solid #ff7300`,
    outline: "none",
    boxSizing: "border-box",
    transition: "box-shadow 0.3s, border 0.3s",
  };

  const inputFocusStyle = { boxShadow: `0 0 8px ${brandColor}` };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",
        fontFamily: "sans-serif",
        backgroundColor: "#fff",
      }}
    >
      {/* Brand Logo */}
      <a href="/" style={{ textDecoration: "none", marginBottom: "1.5rem", display: "flex", alignItems: "center" }}>
        <img src="/images/main/brand-logo.png" alt="Planethimalayas"  style={{
      height: "55px",
      width: "auto",
      objectFit: "contain",
    }} />
      </a>

      {/* NEW TOP TABS */}
<div style={{ width: "100%", maxWidth: "450px", display: "flex", marginBottom: "1rem", gap: "0.5rem" }}>
  <div
    style={{
      flex: 1,
      padding: "1rem",
      marginTop: "2rem",
      textAlign: "center",
      fontWeight: "bold",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "0.3s",
      border: `2px solid ${brandColor}`,
      backgroundColor: isLogin ? '#ff7300' : "rgba(0,0,0,0.75)",
      color: isLogin ? "#000" : brandColor,
      boxShadow: isLogin
        ? `inset 0 1px 2px rgba(255,255,255,0.25), 0 8px 25px rgba(255,115,0,0.8), 0 0 22px rgba(255,115,0,1)`
        : `0 4px 12px rgba(255,115,0,0.45), 0 0 10px rgba(255,115,0,0.3)`,
    }}
    onClick={() => {
      setIsLogin(true);
      setError(null);
      setInfoMessage("");
    }}
  >
    Already have an account?
  </div>
  <div
    style={{
      flex: 1,
      padding: "1rem",
      marginTop: "2rem",
      textAlign: "center",
      fontWeight: "bold",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "0.3s",
      border: `2px solid ${brandColor}`,
      backgroundColor: !isLogin ? '#ff7300' : "rgba(0,0,0,0.75)",
      color: !isLogin ? "#000" : brandColor,
      boxShadow: !isLogin
        ? `inset 0 1px 2px rgba(255,255,255,0.25), 0 8px 25px rgba(255,115,0,0.8), 0 0 22px rgba(255,115,0,1)`
        : `0 4px 12px rgba(255,115,0,0.45), 0 0 10px rgba(255,115,0,0.3)`,
    }}
    onClick={() => {
      setIsLogin(false);
      setError(null);
      setInfoMessage("");
    }}
  >
    Don’t have an account?
  </div>
</div>

      {/* Animated Main Title */}
      <h1
        style={{
          color: brandColor,
          marginBottom: "1.5rem",
          transition: "0.3s",
        }}
      >
        {loading ? <>Loading{dots}</> : isLogin ? "Login" : "Sign Up"}
      </h1>

      {/* Form */}
      <form
        onSubmit={handleAuth}
        style={{ width: "100%", maxWidth: "400px", display: "flex", flexDirection: "column" }}
      >
        {/* Email */}
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ color: "#ff7300" }}>Email</label>
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
            onBlur={(e) => (e.target.style.boxShadow = "none")}
            style={inputCommonStyle}
          />
        </div>

        {/* Password */}
        <div style={{ marginBottom: "1rem", position: "relative" }}>
          <label style={{ color: "#ff7300" }}>Password</label>
          <input
            type={showPassword ? "text" : "password"}
            required
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
            onBlur={(e) => (e.target.style.boxShadow = "none")}
            style={inputCommonStyle}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: "absolute",
              right: "0.7rem",
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "1.1rem",
              color: "#555",
            }}
          >
            {showPassword ? "👁️" : "🙈"}
          </button>
        </div>

        {error && <p style={{ color: "red", marginBottom: "1rem" }}>{error}</p>}
        {infoMessage && <p style={{ color: "green", marginBottom: "1rem" }}>{infoMessage}</p>}

        {/* CTA */}
<button
  type="submit"
  disabled={loading}
  style={{
    padding: "1rem",
    fontSize: "1rem",
    fontWeight: "bold",
    borderRadius: "8px",
    border: `2px solid ${brandColor}`,
    marginTop: "0.5rem",
    cursor: loading ? "not-allowed" : "pointer",
    background: hoverBtn ? brandColor : "rgba(0, 0, 0, 0.75)",
    color: hoverBtn ? "black" : brandColor,
    boxShadow: hoverBtn
      ? `inset 0 1px 2px rgba(255,255,255,0.25), 0 8px 25px rgba(255,115,0,0.8), 0 0 22px rgba(255,115,0,1)`
      : `0 4px 12px rgba(255,115,0,0.45), 0 0 10px rgba(255,115,0,0.3)`,
    transition: "all 0.3s ease",
  }}
  onMouseEnter={() => setHoverBtn(true)}
  onMouseLeave={() => setHoverBtn(false)}
>
  {loading ? "Please wait..." : isLogin ? "Login" : "Sign Up"}
</button>
      </form>
    </div>
  );
}
