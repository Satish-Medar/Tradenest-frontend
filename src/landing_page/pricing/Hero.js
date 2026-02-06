import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center p-4 p-lg-5 border-bottom">
          <h1 className="pt-3 pt-lg-5 mt-3 mb-3 fs-2">Charges</h1>
          <p className="mb-4 mb-lg-5 text-muted fs-4">
            List of all charges and taxes
          </p>
        </div>
        <div className="row g-4 p-3 p-lg-5 mt-3 text-center">
          <div className="col-12 col-md-4 p-3 p-lg-5">
            <img src="/images/pricingEquity.svg" />
            <h1 className="fs-3">Free equity delivery</h1>
            <p className="text-muted">
              All equity delivery trades are free of charge.
            </p>
          </div>

          <div className="col-12 col-md-4 p-3 p-lg-5">
            <img src="/images/intradayTrades.svg" />
            <h1 className="fs-3">Intraday and F&O trades</h1>
            <p className="text-muted">
              ₹20 or 0.03% (whichever is lower) per executed order.
            </p>
          </div>

          <div className="col-12 col-md-4 p-3 p-lg-5">
            <img src="/images/pricingEquity.svg" />
            <h1 className="fs-3">Free equity delivery</h1>
            <p className="text-muted">
              All equity delivery trades are free of charge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
