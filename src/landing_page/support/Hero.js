import React from "react";

function Hero() {
  return (
    <section className="support-hero" id="supportHero">
      <div className="container py-5">
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
          <h4 className="m-0">Support Portal</h4>
          <a href="#" className="support-link">
            Track tickets
          </a>
        </div>

        <div className="row g-4 align-items-start">
          <div className="col-12 col-lg-7">
            <h1 className="fs-3">
              Search for an answer or browse help topics to create a ticket
            </h1>
            <input
              className="support-search"
              placeholder="Eg. how do I activate F&O"
            />
            <div className="support-quicklinks">
              <a href="#">Track account opening</a>
              <a href="#">Track segment activation</a>
              <a href="#">Intraday margins</a>
              <a href="#">Kite user manual</a>
            </div>
          </div>

          <div className="col-12 col-lg-5">
            <div className="support-featured">
              <h5>Featured</h5>
              <ol>
                <li>
                  <a href="#">
                    Current takeovers and delisting - January 2024
                  </a>
                </li>
                <li>
                  <a href="#">Latest intraday leverages - MIS & CO</a>
                </li>
                <li>
                  <a href="#">How to update PAN and bank details</a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
