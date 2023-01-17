import React from "react";
import ServiceCard from "../../components/molecules/ServiceCard";
import { services } from "../../constants";

import "./Services.scss";
const Services = () => {
  return (
    <div className="app__service">
      <div className="app__service-title">
        <p>Our Services</p>
        <h3>We offer more than solutions.</h3>
      </div>
      <div className="app__service-card">
        {services.map((card) => (
          <ServiceCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Services;
