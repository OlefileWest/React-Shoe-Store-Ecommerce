import React from "react";
import image from "./image.jpeg";
import "./Card.css";

function MyCard({ brandName, alt, description, image }) {
  return (
    <div>
      <div className="card">
        <img src={image} alt={alt} className={image} />
        <div className="container">
          <h4 id="cardHeading">{brandName}</h4>
          <p id="cardS">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default MyCard;
