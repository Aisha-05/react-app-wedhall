import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Rating from "./Rating";
import "../App.css";

const OneHall = ({ hall, isAuth, setIsAuth }) => {
  return (
    <Card className="Card">
      <Card.Img
        variant="top"
        src={hall.image}
        style={{ height: "200px", objectFit: "cover" }}
        className="image"
      />
      <Card.Body>
        <div className="content">
          <div className="tirating">
            <Card.Title className="title">{hall.name}</Card.Title>
          </div>

          <Card.Text className="location">
            <div>
              <i className="fa-solid fa-location-dot"></i> {hall.location}
            </div>
            <div>
              <Rating rating={hall.rating} readOnly />
            </div>
          </Card.Text>

          <div className="price-container">
            <h5 className="price">{hall.price}</h5>
          </div>

          <div className="description">
            <Card.Text title={hall.description}>{hall.description}</Card.Text>
          </div>
        </div>

        <div className="btn-container">
          <Button className="btn" onClick={() => console.log("Open edit popup")}>
            Edit
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default OneHall;
