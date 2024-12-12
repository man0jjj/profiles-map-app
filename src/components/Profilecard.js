// src/components/ProfileCard.js
import React from "react";

const ProfileCard = ({ profile, onSummaryClick }) => {
  const { name, photo, description } = profile;

  return (
    <div className="profile-card">
      <img src={photo} alt={`${name}'s photo`} style={{ width: "100px", height: "100px" }} />
      <h3>{name}</h3>
      <p>{description}</p>
      <button onClick={onSummaryClick}>Summary</button>
    </div>
  );
};

export default ProfileCard;
