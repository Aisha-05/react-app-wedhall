import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Rating from "../Rating/Rating";
import EditHallPopup from "./EditHallPopup";
import "./OneHall.css";

const OneHall = ({ hall, setHalls }) => {
  const [showEdit, setShowEdit] = useState(false);

  return (
    <>
      <Card className="onehall-hall-card">
        <Card.Img variant="top" src={hall.image} className="onehall-hall-image" />
        <Card.Body className="onehall-hall-content">
          <div className="onehall-tirating">
            <Card.Title className="onehall-hall-title">{hall.name}</Card.Title>
          </div>

          <Card.Text as="div" className="onehall-hall-location">
            <div>
              <i className="fa-solid fa-location-dot"></i> {hall.location}
            </div>
            <div>
              <Rating rating={hall.rating} readOnly />
            </div>
          </Card.Text>

          <div className="onehall-hall-price">{hall.price}</div>

          <div className="onehall-hall-description">
            <Card.Text title={hall.description}>{hall.description}</Card.Text>
          </div>

          <div className="onehall-hall-btn-container">
            <Button className="onehall-hall-btn" onClick={() => setShowEdit(true)}>
              Edit
            </Button>
          </div>
        </Card.Body>
      </Card>

      {showEdit && (
        <EditHallPopup
          hall={hall}
          setHalls={setHalls}
          onClose={() => setShowEdit(false)}
        />
      )}
    </>
  );
};

export default OneHall;
