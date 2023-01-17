import React from "react";
import { images } from "../../themes";

import "./Client.scss";
const Client = () => {
  return (
    <div className="app__client">
      <div className="app__client-title">
        <p className="title">OUR CLIENTS</p>
      </div>

      <div className="app__flex">
        <img src={images.ongo} alt="ongo-img" />
        <p>ONGO</p>
      </div>
      <div className="app__flex">
        <img src={images.telemedic} alt="telemedic-img" />
        <p>THERESA TELEMEDICINE</p>
      </div>
    </div>
  );
};

export default Client;
