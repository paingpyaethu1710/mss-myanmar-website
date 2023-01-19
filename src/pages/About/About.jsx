import React from "react";

import "./About.scss";

const About = () => {
  return (
    <div id="about us" className="app__about">
      <p className="about-us">About Us</p>
      <h3 className="title">What are we?</h3>
      <div className="app__about-desc-container">
        <p className="desc">
          We are a team of top engineers and managers based in Myanmar. We help
          startups and
        </p>
        <p className="desc">
          enterprises with creating innovative, custom software development for
          web and mobile applications.
        </p>
        <p className="desc">
          We challenge the norm and break boundaries to attain mastery and build
          innovative digital products.
        </p>
        <p className="desc">
          Transform and grow your business with a trusted software partner.
        </p>
      </div>
    </div>
  );
};

export default About;
