import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";
import "./AuthPage.css";

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

  // Handle Login / Signup
  async function handleAuth(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setInfoMessage("");

    try {
      if (isLogin) {
        const { data, error: loginError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
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
        const { error: signupError } = await supabase.auth.signUp({
          email,
          password,
        });
        if (signupError) throw signupError;

        setInfoMessage(
          "Signup successful! Please check your email to confirm your account."
        );
        setEmail("");
        setPassword("");
      }
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  }

  return (
    <div className="auth-container">
      
      {/* Logo */}
      <a href="/" className="auth-logo">
        <img src="/images/main/brand-logo.png" alt="Planethimalayas" />
        <h2>
          <span>Planet</span><span className="brand">himalayas</span>
        </h2>
      </a>

      {/* Title */}
      <h1 className="auth-title">
        {loading ? <>Loading{dots}</> : isLogin ? "Login" : "Sign Up"}
      </h1>

      {/* Form */}
      <form onSubmit={handleAuth} className="auth-form">
        <div className="auth-field">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            required
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="auth-field">
          <label>Password</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              required
              onChange={e => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "👁️" : "🙈"}
            </button>
          </div>
        </div>

        {error && <p className="auth-error">{error}</p>}
        {infoMessage && <p className="auth-success">{infoMessage}</p>}

        <button type="submit" className="auth-submit" disabled={loading}>
          {loading ? "Please wait..." : isLogin ? "Login" : "Sign Up"}
        </button>
      </form>

      <p className="switch-auth">
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <button
          className="switch-btn"
          onClick={() => {
            setIsLogin(!isLogin);
            setError(null);
            setInfoMessage("");
          }}
        >
          {isLogin ? "Sign Up" : "Login"}
        </button>
      </p>
    </div>
  );
}
