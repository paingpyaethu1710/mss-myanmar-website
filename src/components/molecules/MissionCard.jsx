import React from "react";

import "./MissionCard.scss";

const MissionCard = ({ imagePath, title, content }) => {
  return (
    <div className="app__missioncard">
      <img src={imagePath} alt="mission-imgs" />
      <h3 className="mission-title">{title}</h3>
      <p className="mission-content">{content}</p>
    </div>
  );
};

export default MissionCard;
