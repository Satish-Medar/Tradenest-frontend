import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api";
import { LANDING_URL } from "../../config";
import "../auth/Auth.css";

function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [status, setStatus] = useState({ loading: false, error: "", ok: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: "", ok: "" });

    if (!form.email || !form.password) {
      setStatus({
        loading: false,
        error: "Email and password are required.",
        ok: "",
      });
      return;
    }

    try {
      await api.post("/register", {
        username: form.email,
        password: form.password,
      });
      setStatus({
        loading: false,
        error: "",
        ok: "Account created. Please log in.",
      });
    } catch (err) {
      const message =
        err?.response?.data?.error || "Registration failed. Try again.";
      setStatus({ loading: false, error: message, ok: "" });
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
          <p className="auth-kicker">Start trading smarter</p>
          <h1>Create your Zerodha account</h1>
          <p className="auth-sub">
            Join the new wave of retail investors with low fees, fast execution,
            and a clean dashboard.
          </p>

          <div className="auth-stats">
            <div className="auth-stat">
              <span>₹0</span>
              <p>Account opening</p>
            </div>
            <div className="auth-stat">
              <span>₹20</span>
              <p>Flat brokerage</p>
            </div>
            <div className="auth-stat">
              <span>24x7</span>
              <p>Support</p>
            </div>
          </div>
        </div>

        <div className="auth-card">
          <div className="auth-card-head">
            <h2>Sign up</h2>
            <p>Get started in under 2 minutes.</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <label>
              Full name
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
              />
            </label>
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
              Phone
              <input
                type="tel"
                name="phone"
                placeholder="+91 98765 43210"
                value={form.phone}
                onChange={handleChange}
              />
            </label>
            <label>
              Password
              <input
                type="password"
                name="password"
                placeholder="Create a password"
                value={form.password}
                onChange={handleChange}
              />
            </label>

            {status.error && <p className="auth-error">{status.error}</p>}
            {status.ok && <p className="auth-success">{status.ok}</p>}

            <button type="submit" className="auth-btn primary" disabled={status.loading}>
              {status.loading ? "Creating..." : "Create account"}
            </button>
            <p className="auth-note">
              Already have an account?{" "}
              <Link to="/login" className="auth-link">
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
