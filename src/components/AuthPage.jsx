import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isLogin, setIsLogin] = useState(true);
  const [infoMessage, setInfoMessage] = useState('');

  const [queryParams, setQueryParams] = useState({ trek: '', date: '', price: '' });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      setQueryParams({
        trek: params.get('trek') || '',
        date: params.get('date') || '',
        price: params.get('price') || '',
      });
    }
  }, []);

  async function handleAuth(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setInfoMessage('');

    try {
      if (isLogin) {
        const { data, error: loginError } = await supabase.auth.signInWithPassword({ email, password });
        if (loginError) throw loginError;

        // Check if user came from a trek page
        if (queryParams.trek && queryParams.date) {
          const redirectUrl = `/booking-form?trek=${encodeURIComponent(queryParams.trek)}&date=${encodeURIComponent(queryParams.date)}&price=${encodeURIComponent(queryParams.price)}`;
          window.location.href = redirectUrl;
        } else {
          window.location.href = '/';
        }

      } else {
        // Signup flow
        const { data, error: signupError } = await supabase.auth.signUp({ email, password });
        if (signupError) throw signupError;

        // Show message instead of redirecting
        setInfoMessage('Signup successful! Please check your email to confirm your account before logging in.');
        setEmail('');
        setPassword('');
      }
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  }

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 16, fontFamily: 'Roboto, sans-serif' }}>
      <h2 style={{ color: '#ff7300', marginBottom: 16 }}>
        {isLogin ? 'Login' : 'Sign Up'}
      </h2>

      <form onSubmit={handleAuth}>
        <label htmlFor="email" style={{ display: 'block', marginBottom: 4 }}>Email</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '100%', padding: 8, marginBottom: 16, fontSize: 16 }}
          required
        />

        <label htmlFor="password" style={{ display: 'block', marginBottom: 4 }}>Password</label>
        <div style={{ position: 'relative', marginBottom: 16 }}>
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: 8, fontSize: 16, width: '100%' }}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: 'absolute',
              right: 8,
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              display: 'flex',
              alignItems: 'center',
            }}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? '👁️' : '🙈'}
          </button>
        </div>

        {error && (
          <div style={{ color: 'red', marginBottom: 16 }}>
            {error}
          </div>
        )}

        {infoMessage && (
          <div style={{ color: 'green', marginBottom: 16 }}>
            {infoMessage}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          style={{
            backgroundColor: '#ff7300',
            color: 'white',
            padding: '12px 0',
            width: '100%',
            border: 'none',
            borderRadius: 6,
            cursor: loading ? 'not-allowed' : 'pointer',
            fontWeight: 'bold',
            fontSize: 16,
          }}
        >
          {loading ? 'Please wait...' : isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>

      <p style={{ marginTop: 16, textAlign: 'center' }}>
        {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
        <button
          type="button"
          onClick={() => { setIsLogin(!isLogin); setError(null); setInfoMessage(''); }}
          style={{
            background: 'none',
            border: 'none',
            color: '#ff7300',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          {isLogin ? 'Sign Up' : 'Login'}
        </button>
      </p>
    </div>
  );
}
