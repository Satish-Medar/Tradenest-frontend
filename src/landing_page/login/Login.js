import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api";
import "../auth/Auth.css";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [status, setStatus] = useState({ loading: false, error: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: "" });

    if (!form.email || !form.password) {
      setStatus({ loading: false, error: "Email and password are required." });
      return;
    }

    try {
      await api.post("/login", {
        username: form.email,
        password: form.password,
      });
      window.location.href = "http://localhost:3001/";
    } catch (err) {
      const message =
        err?.response?.data?.error || "Login failed. Try again.";
      setStatus({ loading: false, error: message });
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-bg">
        <div className="auth-orb auth-orb-1" />
        <div className="auth-orb auth-orb-2" />
      </div>

      <div className="auth-wrap">
        <div className="auth-hero">
          <p className="auth-kicker">Welcome back</p>
          <h1>Log in to your dashboard</h1>
          <p className="auth-sub">
            Track holdings, place orders, and monitor your positions in real
            time.
          </p>

          <div className="auth-panel">
            <div>
              <h4>Secure sessions</h4>
              <p>Session-based login with protected endpoints.</p>
            </div>
            <div>
              <h4>One view, all data</h4>
              <p>Orders, holdings, and P&L in a single screen.</p>
            </div>
          </div>
        </div>

        <div className="auth-card">
          <div className="auth-card-head">
            <h2>Login</h2>
            <p>Use your registered email and password.</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <label>
              Email
              <input
                type="email"
                name="email"
                placeholder="you@email.com"
                value={form.email}
                onChange={handleChange}
              />
            </label>
            <label>
              Password
              <input
                type="password"
                name="password"
                placeholder="Your password"
                value={form.password}
                onChange={handleChange}
              />
            </label>

            <div className="auth-row">
              <label className="auth-checkbox">
                <input type="checkbox" />
                Remember me
              </label>
              <button type="button" className="auth-link subtle">
                Forgot password?
              </button>
            </div>

            {status.error && <p className="auth-error">{status.error}</p>}

            <button type="submit" className="auth-btn primary" disabled={status.loading}>
              {status.loading ? "Logging in..." : "Login"}
            </button>
            <p className="auth-note">
              New here?{" "}
              <Link to="/signup" className="auth-link">
                Create an account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
