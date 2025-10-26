import React, { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Topbar from "./Components/Topbar";
import OwnerProfileCard from "./Components/OwnerProfileCard";
import StatsWidgets from "./Components/StatsWidgets";
import HallList from "./Components/HallList";
// import Rating from "./Components/Rating";
import ProfilePopup from "./Components/ProfilePopUp";

function Dashboard({owner}){

  const statsData = {
    rating: 4.2,
    reviewsCount: 145,
    stats: {
      totalCustomers: 5423,
      newCustomers: 3,
      totalHalls: 189,
      newHalls: 1,
      mostBookedCount: 41,
      mostBookedName: "Layalina",
    },
  };
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div className="app-container">
      <Topbar owner={owner} />
      <div className="dashboard">
        <div className="Owner-section">
          <OwnerProfileCard owner={owner} onEdit={() => setIsEditing(true)} />
        </div>
        <div className="stats-section">
          <StatsWidgets {...statsData}/>
        </div>
        <div className="section-two">
          <HallList />
        </div>
      </div>
      {isEditing && (
        <ProfilePopup
          owner={owner}
          setOwner={setOwner}
          onClose={() => setIsEditing(false)}
        />
      )}
    </div>
  );
}

export default Dashboard;