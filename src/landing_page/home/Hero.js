import React from "react";
import "./Hero.css";
function Hero() {
  return (
    <div className="container p-4 p-lg-5 mb-5 mt-4 mt-lg-5">
      <div className="row text-center">
        <img
          src="images/homeHero.png"
          alt="Hero Image"
          className="img-fluid mb-5"
        />
        <h1 className="mt-5 fs-3 mb-2">Invest in everything</h1>
        <p className="fs-5 muted">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <div className="rounded btn-div d-flex justify-content-center mt-4">
          <button
            className="rounded-3 btn btn-primary fw-medium fixed-btn home-cta"
            type="button"
          >
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
