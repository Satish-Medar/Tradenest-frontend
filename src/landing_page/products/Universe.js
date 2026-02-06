import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row">
        <h3 className="text-center mt-5 mb-4">The Zerodha Universe</h3>
        <p className="text-center mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row">
        <div className="col-3 text-center mb-4">
          <img
            src="/images/zerodhaFundhouse.png"
            alt="Universe 1"
            className="img-fluid universe-logo"
          />
          <p className="muted-text">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
          <img
            src="/images/streakLogo.png"
            alt="Universe 1"
            className="img-fluid  mt-5 universe-logo"
            style={{ height: "60px" }}
          />
          <p className="muted-text">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-1"></div>
        <div className="col-3 text-center mb-4">
          <img
            src="/images/sensibullLogo.svg"
            alt="Universe 1"
            className="img-fluid mb-3 universe-logo"
            style={{ height: "40px" }}
          />
          <p className="muted-text">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
          <img
            src="/images/smallcaseLogo.png"
            alt="Universe 1"
            className="img-fluid mb-3 mt-5 universe-logo"
          />
          <p className="muted-text">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-1"></div>
        <div className="col-3 text-center mb-4">
          <img
            src="/images/tijori.svg"
            alt="Universe 1"
            className="img-fluid mb-3 universe-logo"
            style={{ height: "60px" }}
          />
          <p className="muted-text">
            Learn the markets with our comprehensive stock market education
            platform.
          </p>
          <img
            src="/images/dittoLogo.png"
            alt="Universe 1"
            className="img-fluid mb-3 mt-5 universe-logo"
            style={{ height: "40px" }}
          />
          <p className="muted-text">
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up for free
          </p>
        </div>
      </div>
      <div className="row">
        <button
          className="rounded-3 btn btn-primary fw-medium fixed-btn text-center mb-5"
          type="button"
          style={{ maxWidth: "200px", margin: "0 auto", height: "50px", fontSize: "16px", textAlign: "center" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
