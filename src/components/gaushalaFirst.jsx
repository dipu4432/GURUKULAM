import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./gaushalaFirst.css";

import gaushalaImg from "../assets/a6.jpg";

function GaushalaFirst() {
  return (
    <section className="gaushalaFirst-section">
      <Container>
        <h2 className="gaushalaFirst-heading">
          गौशाला
        </h2>

        <div className="gaushalaFirst-box">
          <Row className="g-0 align-items-center">
            <Col lg={6}>
              <div className="gaushalaFirst-content">
                {/* <h3>गौशाला</h3> */}

                <h4>गो सेवा ही परम सेवा है</h4>

                <p>
                  हमारी गौशाला में गायों की सेवा,
                  संरक्षण और प्राकृतिक जीवन शैली
                  को बढ़ावा दिया जाता है।
                </p>

                <p>
                  यहाँ विद्यार्थियों को गो सेवा के
                  माध्यम से करुणा, अनुशासन और
                  भारतीय संस्कृति का ज्ञान दिया
                  जाता है।
                </p>
              </div>
            </Col>

            <Col lg={6}>
              <div className="gaushalaFirst-image">
                <img
                  src={gaushalaImg}
                  alt="गौशाला"
                />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default GaushalaFirst;