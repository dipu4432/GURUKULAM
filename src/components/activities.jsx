import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./activities.css";

import activityImg from "../assets/a5.jpg";
import cowImg from "../assets/a-bg.jpg";

function Activities() {
  const activities = [
    "गो सेवा एवं दैनिक देखभाल",
    "चारा वितरण",
    "गो चिकित्सा और उपचार",
    "जैविक खेती",
    "गोबर एवं गौमूत्र आधारित उत्पाद",
    "विद्यार्थियों द्वारा नियमित सेवा",
  ];

  return (
    <section className="activities-section">
      <Container>
        <div className="activities-box">
          <Row className="align-items-center">
            {/* Left Side */}
            <Col lg={4}>
              <div className="activities-content">
                <h2>हमारी गतिविधियाँ</h2>

                <ul>
                  {activities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </Col>

            {/* Center Image */}
            <Col lg={4}>
              <div className="activities-image">
                <img src={activityImg} alt="Activities" />
              </div>
            </Col>

            {/* Right Quote */}
            <Col lg={4}>
              <div
                className="activities-quote"
                style={{
                  backgroundImage: `url(${cowImg})`,
                }}
              >
                <h4>"गावो विश्वस्य मातरः"</h4>

                <p>गाय सम्पूर्ण विश्व की माता है</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default Activities;
