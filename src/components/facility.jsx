import "./facility.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaUtensils, FaBed, FaShieldAlt, FaHeart } from "react-icons/fa";

function Facility() {
  const items = [
    {
      icon: <FaUtensils />,
      title: "Healthy Satvik Bhojan"
    },
    {
      icon: <FaBed />,
      title: "Clean Hostel"
    },
    {
      icon: <FaShieldAlt />,
      title: "Safe Campus"
    },
    {
      icon: <FaHeart />,
      title: "24/7 Care"
    }
  ];

  return (
    <section className="facility-section">
      <Container>
        <div className="facility-header">
          <h2>Rahne Aur Khane ki Sampoorna Suvidha</h2>
        </div>

        <Row className="g-4 justify-content-center">
          {items.map((item, index) => (
            <Col lg={3} md={6} sm={6} xs={12} key={index}>
              <Card className="facility-card h-100">
                <Card.Body>
                  <div className="facility-icon">{item.icon}</div>
                  <h5>{item.title}</h5>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Facility;