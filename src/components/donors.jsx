import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

import { FaUser, FaUserCircle } from "react-icons/fa";

import qrCode from "../assets/qr.jpeg";

import "./donors.css";

function Donors() {
  const donors = [
    {
      name: "Anonymous Donor",
      time: "14-May-2026 04:47 PM",
      state: "Uttar Pradesh",
    },
    {
      name: "AMIT SHARMA",
      time: "14-May-2026 04:38 PM",
      state: "Uttarakhand",
    },
    {
      name: "Satyadev Chadalavada",
      time: "14-May-2026 03:52 PM",
      state: "Telangana",
    },
    {
      name: "Dinesh Tyagi",
      time: "14-May-2026 03:03 PM",
      state: "Uttarakhand",
    },
    {
      name: "Aniruddha Shukla",
      time: "14-May-2026 03:00 PM",
      state: "Uttar Pradesh",
    },
    {
      name: "shilpa",
      time: "14-May-2026 02:28 PM",
      state: "Gujarat",
    },
    {
      name: "Deepak",
      time: "14-May-2026 01:08 PM",
      state: "Bihar",
    },
    {
      name: "Rahul Singh",
      time: "14-May-2026 12:08 PM",
      state: "Delhi",
    },
  ];

  const testimonials = [
    {
      name: "Shri Alok Chaudhari",
      text: "Dedicated supporter and contributor of Gurukulam activities and social services.",
    },
    {
      name: "Amit Sharma",
      text: "Wonderful spiritual environment and educational support.",
    },
    {
      name: "Rajesh Kumar",
      text: "Amazing experience with Gurukulam and Gaushala services.",
    },
  ];

  return (
    <section className="donor-section">
      <Container>
        <div className="section-header">
          <h2>Recent Donors</h2>
        </div>

        <p className="donor-description">
          श्री अभिषेक कुमार शर्मा का उद्देश्य इस अमानवीय और अप्राकृतिक व्यवहार
          के हानिकारक प्रभाव को समाप्त करना है।
        </p>

        {/* Donor + QR Layout */}

        <Row className="g-4 align-items-start">
          {/* Donors */}

          <Col lg={8}>
            <div className="donor-grid-wrapper">
              <Row className="g-4">
                {donors.map((donor, index) => (
                  <Col lg={6} key={index}>
                    <div className="donor-card">
                      <div className="donor-icon">
                        <FaUser />
                      </div>

                      <div className="donor-info">
                        <h5>{donor.name}</h5>

                        <span>{donor.time}</span>

                        <p>{donor.state}</p>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>

          {/* QR Code */}

          <Col lg={4}>
            <div className="donation-qr-card">
              <h3>Donate with QR</h3>

              <img src={qrCode} alt="Donate QR" />
            </div>
          </Col>
        </Row>

        {/* Testimonials */}

        <div className="testimonial-wrapper">
          <div className="section-header">
            <h2>Our Testimonials</h2>
          </div>

          <div className="testimonial-card">
            <Carousel indicators={false} interval={3000} pause={false}>
              {testimonials.map((item, index) => (
                <Carousel.Item key={index}>
                  <div className="testimonial-content">
                    <div className="testimonial-user-icon">
                      <FaUserCircle />
                    </div>

                    <h3>{item.name}</h3>

                    <p>{item.text}</p>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Donors;