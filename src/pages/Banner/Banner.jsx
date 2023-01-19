import React from "react";
import { images } from "../../themes";

import "./Banner.scss";

const Banner = () => {
  return (
    <div id="home" className="app__banner">
      <div className="app__banner-img">
        <img src={images.bannerImg} alt="banner-img" />
      </div>
      <div className="app__banner-banner-text">
        <span>Make your</span>
        <h3>Business Easy</h3>
        <p>Product Development Services</p>

        <button type="button">Work with us</button>
      </div>
    </div>
  );
};

export default Banner;
