// DonatePage.jsx

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./donatePage.css";

import qr from "../assets/qr.jpeg"; 

function DonatePage() {
  return (
    <section className="donate-section">
      <Container>
        <div className="donate-box">

          {/* Heading */}
          <h2 className="donate-title">QR Code se Donate karein</h2>

          {/* QR Codes */}
          <Row className="align-items-center justify-content-center g-4 mt-2">

            <Col lg={3} md={4} sm={6} xs={12} className="text-center">
              <img src={qr} alt="QR Code" className="qr-image" />
            </Col>

            <Col lg={3} md={4} sm={6} xs={12} className="text-center">
              <img src={qr} alt="QR Code" className="qr-image" />
            </Col>

            <Col lg={3} md={4} sm={6} xs={12} className="text-center">
              <img src={qr} alt="QR Code" className="qr-image" />
            </Col>

            {/* Payment Logos + Button */}
            <Col lg={3} md={12} className="text-center">
              <div className="payment-list">
                <p className="paytm">Paytm</p>
                <p className="gpay">GPay</p>
                <p className="phonepe">PhonePe</p>
                <p className="bhim">BHIM</p>
                <p className="upi">UPI</p>
              </div>

              <Button className="donor-btn">
                View Donor
              </Button>
            </Col>

          </Row>

          {/* Bottom Text */}
          <h3 className="scan-text">
            Scan karein aur turant payment karein
          </h3>

        </div>
      </Container>
    </section>
  );
}

export default DonatePage;