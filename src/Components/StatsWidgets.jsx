import React from "react";
import "../App.css";

function StatsWidgets({ rating, reviewsCount, stats }) {
  // If no data passed, show fallback message
  if (!stats) {
    return <div className="stats-error">No statistics available</div>;
  }

  return (
    <div className="stats-container">
      {/* Rating and Reviews Section */}
      <div className="widget rating-widget">
        <h3>Owner Rating</h3>
        <div className="rating-review-container">
          <div className="rating">
            <p>{rating}</p>
            <span className="stars">⭐⭐⭐⭐⭐</span>
          </div>
          {/* <p className="rating"><span></span> <span className="stars">⭐⭐⭐⭐⭐</span></p> */}
          <p className="reviews">{reviewsCount} Reviews</p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="widget stats-widget">
        <h3>Monthly Overview</h3>
        <div className="stats-details">
          <p><strong>Total Customers:</strong> <span>{stats.totalCustomers}</span></p>
          <p><strong>New Customers:</strong> <span>+{stats.newCustomers}</span></p>
          <p><strong>Total Halls:</strong> <span>{stats.totalHalls}</span></p>
          <p><strong>New Halls:</strong> <span>+{stats.newHalls}</span></p>
          <p>
            <strong>Most Booked Hall:</strong><span>{stats.mostBookedName}</span></p>
        </div>
      </div>
    </div>
  );
}

export default StatsWidgets;
