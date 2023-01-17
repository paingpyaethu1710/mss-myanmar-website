import React from "react";

import "./ServiceCard.scss";
const ServiceCard = ({ num, imagePath, title_01, title_02 }) => {
  return (
    <div className="app__servicecard">
      <p className="service-num">{num}</p>
      <div className="app__servicecard-content">
        <img src={imagePath} alt="img" />
        <p className="content title-1">{title_01}</p>
        <p className="content title-2">{title_02}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
