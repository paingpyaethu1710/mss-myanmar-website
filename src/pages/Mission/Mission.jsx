import React from "react";
import MissionCard from "../../components/molecules/MissionCard";
import { mission } from "../../constants";

import "./Mission.scss";

const Mission = () => {
  return (
    <div className="app__mission">
      <div className="app__mission-title">
        <p>Our Mission & Vision</p>
        <h3>WHY MSS MYANMAR?</h3>
      </div>

      <div className="app__mission-card">
        {mission.map((card) => (
          <MissionCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Mission;
