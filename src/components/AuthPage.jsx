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

  // Animate "Loading..."
  useEffect(() => {
    if (!loading) {
      setDots("");
      return;
    }
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
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

  // --- Handle Email/Password Login or Signup ---
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
          const redirectUrl = `/booking-form?trek=${encodeURIComponent(queryParams.trek)}&date=${encodeURIComponent(
            queryParams.date
          )}&price=${encodeURIComponent(queryParams.price)}`;
          window.location.href = redirectUrl;
        } else if (userRole === "admin") {
          window.location.href = "/admindashboard";
        } else {
          window.location.href = "/dashboard";
        }
      } else {
        const { data: signupData, error: signupError } = await supabase.auth.signUp({ email, password });
        if (signupError) throw signupError;

        setInfoMessage("Signup successful! Please check your email to confirm your account before logging in.");
        setEmail("");
        setPassword("");
      }
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  }

  // --- Handle Google Login ---
  async function handleGoogleLogin() {
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: window.location.origin + window.location.pathname,
        },
      });
      if (error) throw error;
      // Supabase handles redirect automatically
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 16, fontFamily: "Roboto, sans-serif" }}>
      {/* Logo */}
      <a href="/" style={{ textDecoration: "none" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
          <img src="/images/main/brand-logo.png" alt="Planethimalayas Logo" style={{ height: "50px", marginRight: "10px" }} />
          <h2 style={{ fontFamily: "Helvetica, sans-serif", fontSize: "1.8rem", margin: 0 }}>
            <span style={{ color: "black" }}>Planet</span>
            <span style={{ color: "#ff7300" }}>himalayas</span>
          </h2>
        </div>
      </a>

      {/* Title */}
      <h1 style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 16, textAlign: "center" }}>
        <span style={{ marginTop: "0.5rem", color: "#ff7300", fontWeight: "bold" }}>
          {loading ? <>Loading{dots}</> : isLogin ? "Login" : "Sign Up"}
        </span>
      </h1>

      {/* Form */}
      <form onSubmit={handleAuth}>
        <label htmlFor="email" style={{ display: "block", marginBottom: 4 }}>Email</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: 8, marginBottom: 16, fontSize: 16 }}
          required
        />

        <label htmlFor="password" style={{ display: "block", marginBottom: 4 }}>Password</label>
        <div style={{ position: "relative", marginBottom: 16 }}>
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: 8, fontSize: 16, width: "100%" }}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: "absolute",
              right: 8,
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            {showPassword ? "👁️" : "🙈"}
          </button>
        </div>

        {error && <div style={{ color: "red", marginBottom: 16 }}>{error}</div>}
        {infoMessage && <div style={{ color: "green", marginBottom: 16 }}>{infoMessage}</div>}

        <button
          type="submit"
          disabled={loading}
          style={{
            backgroundColor: "#ff7300",
            color: "white",
            padding: "12px 0",
            width: "100%",
            border: "none",
            borderRadius: 6,
            cursor: loading ? "not-allowed" : "pointer",
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          {loading ? "Please wait..." : isLogin ? "Login" : "Sign Up"}
        </button>
      </form>

      {/* Google Login */}
      <div style={{ marginTop: 16, textAlign: "center" }}>
        <p>or</p>
        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            backgroundColor: "white",
            color: "#555",
            padding: "10px 0",
            width: "100%",
            border: "1px solid #ccc",
            borderRadius: 6,
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" style={{ width: "20px", height: "20px" }} />
          Continue with Google
        </button>
      </div>

      <p style={{ marginTop: 16, textAlign: "center" }}>
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button
          type="button"
          onClick={() => {
            setIsLogin(!isLogin);
            setError(null);
            setInfoMessage("");
          }}
          style={{
            background: "none",
            border: "none",
            color: "#ff7300",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          {isLogin ? "Sign Up" : "Login"}
        </button>
      </p>
    </div>
  );
}



