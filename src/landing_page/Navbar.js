import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";
import { DASHBOARD_URL, landingPath, dashboardPath, LANDING_URL } from "../config";
import { toggleTheme } from "../theme";

function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    api
      .get("/me")
      .then((res) => setUser(res?.data?.user || null))
      .catch(() => setUser(null));
  }, []);

  const handleLogout = async () => {
    try {
      await api.post("/logout");
    } finally {
      setUser(null);
      window.location.href = landingPath("/login");
    }
  };

  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-white border-bottom">
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img
            src="/images/logo.svg"
            alt="Zerodha"
            style={{ width: "120px", height: "auto" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/product">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/support">
                Support
              </Link>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="nav-link active"
                onClick={async (e) => {
                  e.preventDefault();
                  try {
                    await api.get("/me");
                    window.location.href = dashboardPath("/");
                  } catch {
                      window.location.href = landingPath("/login");
                  }
                }}
              >
                Dashboard
              </button>
            </li>
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle"
                id="userMenu"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                type="button"
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 21a8 8 0 0 0-16 0" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                Account
              </button>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="userMenu"
              >
                <li>
                  <button className="dropdown-item" onClick={toggleTheme}>
                    Toggle theme
                  </button>
                </li>
                {user ? (
                  <li>
                    <button className="dropdown-item" onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                ) : (
                  <>
                    <li>
                      <Link className="dropdown-item" to="/login">
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/signup">
                        Signup
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
