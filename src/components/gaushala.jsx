import "./gaushala.css";
import { Container, Row, Col, Card } from "react-bootstrap";

function Gaushala() {
  const data = [
    {
      title: "Academic Shiksha",
      color: "#4F7D39",
      bg: "#dfe8de",
      items: ["Hindi/English", "Maths", "Sanskrit", "Science"]
    },
    {
      title: "Sharirik Khel",
      color: "#D67816",
      bg: "#f4e7d7",
      items: ["Cricket", "Kabaddi", "Athletics", "Kho - Kho"]
    },
    {
      title: "Kaushal Vikas",
      color: "#D67816",
      bg: "#f1dfe5",
      items: ["Tier Bhala", "Yoga", "Computer", "Farming"]
    }
  ];

  return (
    <section className="gaushala-section">
      <Container>
        <div className="gaushala-header">
          <h2>Hamari Gaushala - Atmanirbhar Model</h2>
          <p>Hamari gaushala gurukulam ka ek mahatvapurn hissa hai.</p>
          <p>
            Yahan bachche gaay ki seva karna, prakriti se judna aur
            swavalambi jeevan jeena seekhte hain
          </p>
        </div>

        <Row className="justify-content-center g-4">
          {data.map((item, index) => (
            <Col lg={4} md={6} key={index}>
              <Card className="gaushala-card">
                <div
                  className="gaushala-title"
                  style={{ backgroundColor: item.color }}
                >
                  {item.title}
                </div>

                <Card.Body
                  className="gaushala-body"
                  style={{ backgroundColor: item.bg }}
                >
                  <ul>
                    {item.items.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Gaushala;