import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container mx-auto text-center mt-5 product-hero border-bottom">
      <h1
        className="text-4xl font-medium"
      >
        Zerodha Products
      </h1>
      <p className=" mt-2  text-muted">
        Sleek, modern, and intuitive trading platforms
      </p>
      <p className="mt-4 text-blue-600 font-medium founder-links ">
        Check out our <Link to="/products">investment offerings</Link>{" "}
        <i className="fa-solid fa-arrow-right" style={{ color: "#387ed1" }}></i>
      </p>
    </div>
  );
}

export default Hero;
