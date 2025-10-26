import React from "react";
import "../App.css";

function OwnerProfileCard({ owner, onEdit }) {
  return (
    <div className="owner-card">
      <img src={owner.picture} alt="Profile" className="owner-img" />
      <h3>{owner.fullName}</h3>
      <p>{owner.email}</p>
      <p>{owner.phoneNum}</p>
      <p>{owner.wilaya}</p>
      <button className="edit-btn" onClick={onEdit}>Edit Profile</button>
    </div>
  );
}

export default OwnerProfileCard;
