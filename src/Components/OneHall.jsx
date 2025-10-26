import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Rating from "./Rating";
import "../App.css";
const OneHall = ({ hall ,isAuth,setIsAuth}) => {
  return (
    <div>
      <Card className="Card">
        <Card.Img
          variant="top"
          src={hall.image}
          style={{ height: "200px" }}
          className="image"
        />
        <Card.Body>
          <div className="content">
            <div className="tirating">
              <Card.Title className="title">{hall.name}</Card.Title>
            </div>
            {/* <div>
            </div> */}
            <div >
              <Card.Text className="location">
                <div>
                  <i class="fa-solid fa-location-dot"></i> {hall.location}{" "}
                </div>
                <div>
                  <Rating isAuth={isAuth} setIsAuth={setIsAuth} />
                </div>{" "}
              </Card.Text>
            </div>
            <div className="price-container">
              <h5 className="price">{hall.price}</h5>
            </div>
            <div className="description">
              <Card.Text> {hall.description} </Card.Text>
            </div>
          </div>
          <div className="btn-container">
            <Button className="btn">Explore</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default OneHall;