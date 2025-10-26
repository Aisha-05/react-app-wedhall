import React from "react";

const Rating = ({ rating, readOnly = false }) => {
  const stars = [];
  const rounded = Math.round(rating * 2) / 2; // handle half stars

  for (let i = 1; i <= 5; i++) {
    if (i <= rounded) stars.push(<i key={i} className="fa-solid fa-star" style={{ color: "#FFD700" }}></i>);
    else if (i - 0.5 === rounded) stars.push(<i key={i} className="fa-regular fa-star-half-stroke" style={{ color: "#FFD700" }}></i>);
    else stars.push(<i key={i} className="fa-regular fa-star" style={{ color: "#FFD700" }}></i>);
  }

  return <div className="rate">{stars}</div>;
};

export default Rating;
