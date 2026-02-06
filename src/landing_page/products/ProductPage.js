import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import { Link } from "react-router-dom";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="/images/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="/try-demo"
        learnMore="/learn-more"
        googlePlay="/google-play"
        appStore=""
      />
      <RightSection
        imageURL="/images/console.png"
        productName="Console"
        productDescription="The reporting and analytics dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
      />
      <LeftSection
        imageURL="/images/coin.png"
        productName="Coin"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        tryDemo="/try-demo"
        learnMore="/learn-more"
        googlePlay="/google-play"
        appStore=""
      />
      <RightSection
        imageURL="/images/kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
      />
      <LeftSection
        imageURL="/images/varsity.png"
        productName="Varsity mobile"
        productDescription="The ultimate stock market learning platform. Learn about stocks, derivatives, and more with our interactive lessons and quizzesAn easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo="/try-demo"
        learnMore="/learn-more"
        googlePlay="/google-play"
        appStore=""
      />
      <RightSection
        imageURL="/images/console.png"
        productName="Console"
        productDescription="The reporting and analytics dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
      />
      <h5 className="text-center mt-5 mb-3">
        Want to know more about our technology stack? Check out the{" "}
        <Link
          to="/zerodha-tech-blog"
          style={{ textDecoration: "none", color: "#387ed1" }}
        >
          Zerodha.tech
        </Link>{" "}
        blog.
      </h5>
      <Universe />
    </>
  );
}

export default ProductPage;
