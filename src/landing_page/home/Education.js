import React from "react";

function Education() {
  return (
    <div className="container mt-5 px-3">
      <div className="row align-items-center">
        <div className="col-12 col-lg-6 p-4 p-lg-5 order-2 order-lg-1">
          <img src="/images/education.svg" alt="Education Image" className="img-fluid" />
        </div>
        <div className="col-12 col-lg-6 p-4 p-lg-5 mt-3 mt-lg-0 order-1 order-lg-2">
          <h1 className="fs-2">Free and open market education</h1>
          <p className="mt-5">
            Access a wide range of educational resources, including articles,
            videos, and webinars, to enhance your trading and investment skills.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            Explore Zerodha Varsity{" "}
            <i className="fa-classic fa-solid fa-arrow-right"></i>{" "}
          </a>
          <p className="mt-5">
            Access a wide range of educational resources, including articles,
            videos, and webinars, to enhance your trading and investment skills.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            Explore Zerodha Varsity{" "}
            <i className="fa-classic fa-solid fa-arrow-right"></i>{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
