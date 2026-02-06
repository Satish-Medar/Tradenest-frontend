import React from "react";
import { Link } from "react-router-dom";

function RightSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-4 mt-lg-5">
      <div className="row align-items-center g-4">
        <div className="col-12 col-lg-5">
          <h2 className=" mb-4 fs-3">{productName}</h2>
          <p
            className="text-muted"
            style={{ fontSize: "16px", lineHeight: "1.7" }}
          >
            {productDescription}
          </p>

          <div className="founder-links d-flex flex-wrap gap-3 mt-3">
            <Link to={tryDemo}>
              Learn more <i className="fa-solid fa-arrow-right mb-3"></i>
            </Link>

            
          </div>

      
        </div>
        <div className="col-12 col-lg-7">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
            style={{ maxWidth: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
