import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Rating from "./Rating";
import "./OneHall.css";

const OneHall = ({ hall, isAuth, setIsAuth }) => {
  return (
    <Card className="hall-card">
      <Card.Img
        variant="top"
        src={hall.image}
        className="hall-image"
      />
      <Card.Body className="hall-content">
        <div className="tirating">
          <Card.Title className="hall-title">{hall.name}</Card.Title>
        </div>

        <Card.Text as="div" className="hall-location">
          <div>
            <i className="fa-solid fa-location-dot"></i> {hall.location}
          </div>
          <div>
            <Rating rating={hall.rating} readOnly />
          </div>
        </Card.Text>

        <div className="hall-price">{hall.price}</div>

        <div className="hall-description">
          <Card.Text title={hall.description}>{hall.description}</Card.Text>
        </div>

        <div className="hall-btn-container">
          <Button
            className="hall-btn"
            onClick={() => console.log("Open edit popup")}
          >
            Edit
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default OneHall;
