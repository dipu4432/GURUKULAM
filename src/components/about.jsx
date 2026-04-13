import "./about.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import img1 from "../assets/images/ab1.png";
import img2 from "../assets/images/ab2.png";
import img3 from "../assets/images/ab3.png";
import img4 from "../assets/images/ab4.png";

function About() {
  const features = [
    {
      title: "Residential Gurukulam",
      image: img1,
      points: [
        "Sampoorna swasiya vyavastha.",
        "Anushasit jeevan shaili.",
        "Guru margdarshan."
      ]
    },
    {
      title: "Free / Low Cost Shiksha",
      image: img2,
      points: [
        "Arthik roop se kamzor bachchon ke liye.",
        "Samajik sahyog se chalne wala model.",
        "Gunvatta purna shiksha."
      ]
    },
    {
      title: "Gaushala Se Kharcha Manage",
      image: img3,
      points: [
        "Gaushala se aarthik sahyog.",
        "Dugdh utpadan.",
        "Swayamnirbhar pranali."
      ]
    },
    {
      title: "Bhagwat Katha & Sanskar Shiksha",
      image: img4,
      points: [
        "Gita path.",
        "Dharmik shiksha.",
        "Sanskar nirman."
      ]
    }
  ];

  return (
    <section className="about-section">
      <Container>
        {/* Heading */}
        <div className="about-header">
          <h2>Hamare Gurukulam ke Baare Mein</h2>
          <p>
            Hamare gurukulam ka uddeshya bachchon ko uchch sanskar, vedic gyan
            aur jeevan ka satya marg sikhana hai.
          </p>
          <p>
            Yahan shiksha ke sath anushasan aur seva bhav par zor diya jata hai.
          </p>
        </div>

        {/* Cards */}
        <Row className="g-4">
          {features.map((item, index) => (
            <Col lg={3} md={6} sm={12} key={index}>
              <Card className="about-card h-100">
                <div className="about-image-box">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="about-image"
                  />
                </div>

                <Card.Body>
                  <h5>{item.title}</h5>

                  <ul>
                    {item.points.map((point, i) => (
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

export default About;