import React from "react";
import "./profileDetails.css";

const ProfileDetails = ({ profile }) => {
  return (
    <div className="profile-details">
      <h2>{profile.name}</h2>
      <img
        src={profile.photo}
        alt={`${profile.name}'s photo`}
        className="profile-photo"
      />
      <p><strong>Description:</strong> {profile.description}</p>
      <p><strong>Location:</strong> {profile.location.address}</p>
      <p><strong>Interests:</strong> {profile.interests}</p>
    </div>
  );
};

export default ProfileDetails;
