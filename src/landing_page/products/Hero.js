import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container text-center mt-4 mt-lg-5 product-hero border-bottom pb-4">
      <h1 className="fw-medium">Zerodha Products</h1>
      <p className="mt-2 text-muted">
        Sleek, modern, and intuitive trading platforms
      </p>
      <p className="mt-3 founder-links">
        Check out our <Link to="/product">investment offerings</Link>{" "}
        <i className="fa-solid fa-arrow-right"></i>
      </p>
    </div>
  );
}

export default Hero;
