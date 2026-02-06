import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container mt-5 p-5">
      <div className="row">
        <h1 className="fs-4 text-center mt-5 mb-5">
          We pioneered the discount broking model in India.
          <br /> Now, we are breaking ground with our technology.
        </h1>
      </div>

      <div className="container row border-top mt-5">
        <div className="col ms-5 p-5 pe-0">
          <p
            className="px-5 py-1 "
            style={{ fontSize: "1rem", lineHeight: "1.8", fontWeight: "400" }}
          >
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>

          <p
            className="px-5 py-1"
            style={{ fontSize: "1rem", lineHeight: "1.8", fontWeight: "400" }}
          >
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>

          <p
            className="px-5 py-1"
            style={{ fontSize: "1rem", lineHeight: "1.8", fontWeight: "400" }}
          >
            {" "}
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>
        <div className="col me-5 p-5 ps-0">
          <p className="px-5 py-1" style={{ fontSize: "1rem" }}>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>

          <p className="px-5 py-1" style={{ fontSize: "1rem" }}>
            <Link className="line" to="#">
              {" "}
              Rainmatter
            </Link>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>

          <p className="px-5 py-1" style={{ fontSize: "1rem" }}>
            {" "}
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our{" "}
            <Link className="line" to="#">
              blog
            </Link>{" "}
            or see what the media is{" "}
            <Link className="line" to="#">
              saying about us
            </Link>{" "}
            or learn more about our business and product philosophies. us or
            learn more about our business and product{" "}
            <Link className="line" to="#">
              philosophies
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
