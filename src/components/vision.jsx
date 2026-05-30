import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./trustBoards.css";

function Vision() {
  return (
    <section className="trust-section">
      <Container>
        {/* Header */}
        <div className="trust-header">
          <h2>Our Vision</h2>
          {/* <h2>हमारी दृष्टि</h2> */}
        </div>

        {/* Content */}
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="trust-content">
              <p>
                हमारा उद्देश्य भारतीय वैदिक संस्कृति, संस्कार और आधुनिक शिक्षा
                के समन्वय से ऐसे चरित्रवान, अनुशासित और आत्मनिर्भर विद्यार्थियों
                का निर्माण करना है, जो राष्ट्र, समाज और मानवता की सेवा के लिए
                समर्पित हों।
              </p>

              <p>
                वसुधैव गुरुकुलम भारत का लक्ष्य प्राचीन गुरुकुल परंपरा को आधुनिक
                शिक्षा के साथ जोड़कर विद्यार्थियों को नैतिकता, आध्यात्मिकता,
                अनुशासन और सेवा भाव से युक्त बनाना है।
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Vision;
