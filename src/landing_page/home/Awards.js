import React from "react";

function Awards() {
  return (
    <div className="container px-3 mt-5">
      <div className="row align-items-center">
        <div className="col-12 col-lg-6 p-4 p-lg-5">
          <img src="\images/largestBroker.svg" className="img-fluid" />
        </div>
        <div className="col-12 col-lg-6 p-4 p-lg-5 mt-3 mt-lg-0">
          <h1>Largest stock broker in India</h1>
          <p>
            2+ million Zerodha clients contribute to over 15% of all volumes in
            India daily by trading and investing in:
          </p>

          <div className="row mt-4 mb-3">
            <div className="col-12 col-sm-6">
              <ul>
                <li>
                  <p>Future and Options</p>
                </li>
                <li>
                  <p>Future and Options</p>
                </li>
                <li>
                  <p>Future and Options</p>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-6">
              <ul>
                <li>
                  <p>Future and Options</p>
                </li>
                <li>
                  <p>Future and Options</p>
                </li>
                <li>
                  <p>Future and Options</p>
                </li>
              </ul>
            </div>
          </div>
          <img
            src="/images/pressLogos.png"
            className="img-fluid"
            style={{ maxWidth: "80%" }}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Awards;
