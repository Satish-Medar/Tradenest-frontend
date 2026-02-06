import React from "react";
import { Link } from "react-router-dom";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-7">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
            style={{ maxWidth: "100%" }}
          />
        </div>
        <div className="col-1"></div>

        <div className="col-md-4 mt-5">
          <h2 className="mb-4 fs-3">{productName}</h2>
          <p
            className="text-muted"
            style={{ fontSize: "16px", lineHeight: "1.7" }}
          >
            {productDescription}
          </p>

          <div className="founder-links d-flex gap-4 mt-4">
            <Link to={tryDemo}>
              Try Demo <i className="fa-solid fa-arrow-right mb-3"></i>
            </Link>

            <Link to={learnMore}>
              Learn More <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>

          <div className="mt-3">
            <a href={googlePlay} target="_blank" rel="noreferrer">
              <img
                src="/images/googlePlayBadge.svg"
                alt="Google Play Store"
                style={{ height: "40px", marginRight: "10px" }}
              />
            </a>

            <a href={appStore} target="_blank" rel="noreferrer">
              <img
                src="/images/appStoreBadge.svg"
                alt="App Store"
                style={{ height: "40px", marginLeft: "10px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
