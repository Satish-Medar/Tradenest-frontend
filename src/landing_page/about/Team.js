import React from "react";
import { Link } from "react-router-dom";

function Team() {
  return (
    <div className="container mb-5">
      <div className="row">
        <h1 className="fs-4 text-center mb-5">
          Meet the Team
        </h1>
      </div>

      <div className="row align-items-center">
        <div className="col-2"></div>

        <div className="col-4 text-center">
          <div style={{ width: "300px", height: "300px", margin: "0 auto" }}>
            <img
              src="/images/Satish.jpg"
              alt="Team Photo"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              className="rounded-circle pt-2"
            />
          </div>

          <p className="mt-3 fs-4 fw-medium mb-1">
            Satish Medar
          </p>
          <p className="text-muted">Founder, CEO</p>
        </div>

        <div className="col-md-4 col-12 mb-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>
          <p className="founder-links">
            Connect on <Link to="#"> Homepage </Link> /{" "}
            <Link to="#"> TradingQnA</Link> / <Link to="#"> Twitter</Link>
          </p>
        </div>

        <div className="col-2"></div>
      </div>
    </div>
  );
}

export default Team;
