import React from "react";
import { Link } from "react-router-dom";

function Team() {
  return (
    <div className="container mb-5">
      <div className="row">
        <h1 className="fs-4 text-center mb-4 mb-lg-5">
          Meet the Team
        </h1>
      </div>

      <div className="row align-items-center g-4">
        <div className="col-12 col-lg-5 text-center">
          <div className="team-photo">
            <img
              src="/images/Satish.jpg"
              alt="Team Photo"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              className="rounded-circle pt-2"
            />
          </div>

          <p className="mt-3 fs-4 fw-medium mb-1">
            Satish Medar
          </p>
          <p className="text-muted">Founder, CEO</p>
        </div>

        <div className="col-12 col-lg-7">
          <p>
            Satish bootstrapped and founded Tradenest in 2026 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Tradenest has changed the landscape of the Indian broking industry.
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
      </div>
    </div>
  );
}

export default Team;
