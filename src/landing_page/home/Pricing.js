import React from "react";

function Pricing() {
  return (
    <div className="container px-3 mb-5 mt-4 mt-lg-5">
      <div className="row align-items-center">
        <div className="col-12 col-lg-4">
          <h1 className="mt-5 mb-5 fs-2">Unbeatable pricing</h1>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges. .
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See pricing{" "}
            <i className="fa-classic fa-solid fa-arrow-right"></i>{" "}
          </a>
        </div>
        <div className="col-12 col-lg-8 px-0 px-lg-5 mt-4 mt-lg-0">
          <div className="row text-center g-3">
            <div className="col-12 col-sm-6 border py-5">
              <h1 className="fs-1 mt-2">
                <i className="fa-solid fa-indian-rupee-sign fs-2"></i>0
              </h1>
              <p>Free equity delivery and direct mutual funds</p>
            </div>
            <div className="col-12 col-sm-6 border py-5">
              <h1 className="fs-1 mt-2">
                <i className="fa-solid fa-indian-rupee-sign fs-2"></i>20
              </h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
