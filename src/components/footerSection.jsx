import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import qrCode from "../assets/qr.jpeg";
import bgImage from "../assets/footer-bg.jpg";

import "./footerSection.css";

function FooterSection() {
  return (
    <div
      className="footer-section"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="footer-overlay">
        <Container>
          <Row className="justify-content-between align-items-start gy-4">
            {/* Contact Us */}
            <Col lg={4} md={6}>
              <div className="footer-box">
                <h3>Contact Us</h3>

                <div className="contact-item">
                  <FaMapMarkerAlt className="icon" />
                  <span>
                    Virtiyana Shivli, Kanpur Dehat, 209204 (U.P.)
                  </span>
                </div>

                <div className="contact-item">
                  <FaEnvelope className="icon" />
                  <span>info@shriraghavgaudham.org</span>
                </div>

                <div className="contact-item">
                  <FaWhatsapp className="icon" />
                  <span>8400151995</span>
                </div>

                <div className="visitor-section">
                  <div>
                    <h4>3977</h4>
                    <p>Today Visitor</p>
                  </div>

                  <div>
                    <h4>1377823</h4>
                    <p>Total Visitor</p>
                  </div>
                </div>
                {/* Social Icons */}
                <div className="social-icons">
                  <a href="https://www.google.com/?zx=1778749134554" className="facebook">
                    <FaFacebookF />
                  </a>

                  <a href="/" className="twitter">
                    <FaXTwitter />
                  </a>

                  <a href="/" className="instagram">
                    <FaInstagram />
                  </a>

                  <a href="/" className="youtube">
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </Col>

            {/* Bank Details */}
            <Col lg={4} md={6}>
              <div className="footer-box">
                <h3>Bank Details</h3>

                <p>
                  <strong>Name -</strong> SHRI RAGHAV GOVARDHAN
                  <br />
                  GAUSHALA SAMITI
                </p>

                <p>
                  <strong>A/C No. -</strong> 50200097954289
                </p>

                <p>
                  <strong>IFSC Code -</strong> HDFC0009596
                </p>

                <p>
                  <strong>Branch Name -</strong> KESHAVPURAM, KANPUR (U.P.)
                </p>

                <p>
                  <strong>Bank Name -</strong> HDFC BANK
                </p>
              </div>
            </Col>

            {/* QR Code */}
            <Col lg={2} md={12} className="text-center">
              <div className="qr-box">
                <img src={qrCode} alt="QR Code" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default FooterSection;