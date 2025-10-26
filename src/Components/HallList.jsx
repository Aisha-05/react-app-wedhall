import React from "react";
import { Link } from "react-router-dom";
import OneHall from "./OneHall";
import "../App.css";

function HallsList({ halls = [], limit = 4 }) {
  const limitedHalls = halls.slice(0, limit); // limit is defined here
  
  return (
    <div className="halls-section">
      <div className="section-header">
        <h2>My Halls</h2>
        {halls.length > 4 && (
          <Link to="/halls" className="see-all">
            See All
          </Link>
        )}
      </div>

      <div className="halls-container">
        {limitedHalls.map((hall) => (
          <OneHall key={hall.id} hall={hall} />
        ))}

        <div className="add-hall-box">
          <Link to="/add-hall" className="add-hall-link">
            + Add New Hall
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HallsList;
