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

  // Animate "Loading..."
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

  // Capture trek params
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

  const inputCommonStyle = {
    width: "100%",
    padding: "0.75rem 3rem 0.75rem 0.75rem", // space for password toggle
    fontSize: "1rem",
    borderRadius: "5px",
    border: `1px solid #ccc`,
    outline: "none",
    boxSizing: "border-box",
    transition: "box-shadow 0.3s, border 0.3s",
  };

  const inputFocusStyle = { boxShadow: `0 0 8px ${brandColor}` };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",
        fontFamily: "sans-serif",
        minHeight: "100vh",
        backgroundColor: "#f8f8f8",
      }}
    >
      {/* Logo */}
      <a
        href="/"
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          marginBottom: "2rem",
        }}
      >
        <img src="/images/main/brand-logo.png" alt="Planethimalayas" style={{ height: "50px", marginRight: "10px" }} />
        <h2 style={{ fontFamily: "Helvetica, sans-serif", margin: 0 }}>
          <span style={{ color: "black" }}>Planet</span>
          <span style={{ color: brandColor, marginLeft: "2px" }}>himalayas</span>
        </h2>
      </a>

      {/* Title */}
      <h1 style={{ marginBottom: "1.5rem", color: brandColor }}>
        {loading ? <>Loading{dots}</> : isLogin ? "Login" : "Sign Up"}
      </h1>

      {/* Form */}
      <form onSubmit={handleAuth} style={{ width: "100%", maxWidth: "400px", display: "flex", flexDirection: "column" }}>
        {/* Email */}
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", marginBottom: "0.5rem" }}>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            required
            onChange={e => setEmail(e.target.value)}
            onFocus={e => Object.assign(e.target.style, inputFocusStyle)}
            onBlur={e => Object.assign(e.target.style, { boxShadow: "none" })}
            style={{ ...inputCommonStyle }}
          />
        </div>

        {/* Password */}
        <div style={{ marginBottom: "1rem", position: "relative" }}>
          <label style={{ display: "block", marginBottom: "0.5rem" }}>Password</label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            required
            onChange={e => setPassword(e.target.value)}
            onFocus={e => Object.assign(e.target.style, inputFocusStyle)}
            onBlur={e => Object.assign(e.target.style, { boxShadow: "none" })}
            style={{ ...inputCommonStyle }}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: "absolute",
              right: "0.5rem",
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "1.1rem",
              color: "#555",
              padding: 0,
            }}
          >
            {showPassword ? "👁️" : "🙈"}
          </button>
        </div>

        {error && <p style={{ color: "red", marginBottom: "1rem" }}>{error}</p>}
        {infoMessage && <p style={{ color: "green", marginBottom: "1rem" }}>{infoMessage}</p>}

        {/* CTA Button */}
        <button
          type="submit"
          disabled={loading}
          onMouseEnter={() => setHoverBtn(true)}
          onMouseLeave={() => setHoverBtn(false)}
          style={{
            width: "100%", // match input widths
            padding: "1rem",
            fontSize: "1rem",
            fontWeight: "bold",
            borderRadius: "5px",
            border: `2px solid ${brandColor}`,
            cursor: "pointer",
            marginTop: "0.5rem",
            backgroundColor: hoverBtn ? brandColor : "black",
            color: hoverBtn ? "black" : brandColor,
            boxShadow: hoverBtn ? `0 0 15px ${brandColor}` : "none",
            transition: "all 0.3s ease",
          }}
        >
          {loading ? "Please wait..." : isLogin ? "Login" : "Sign Up"}
        </button>
      </form>

      <p style={{ marginTop: "1rem" }}>
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button
          onClick={() => {
            setIsLogin(!isLogin);
            setError(null);
            setInfoMessage("");
          }}
          style={{
            background: "none",
            border: "none",
            color: brandColor,
            fontWeight: "bold",
            cursor: "pointer",
            marginLeft: "0.25rem",
          }}
        >
          {isLogin ? "Sign Up" : "Login"}
        </button>
      </p>
    </div>
  );
}