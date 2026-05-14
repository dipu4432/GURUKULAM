import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

import { FaUser } from "react-icons/fa";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import testimonialImg from "../assets/p1.jpg";

import "./donors.css";

function Donors() {
  /* =========================
     Unlimited Donors
  ========================= */

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

  /* =========================
     Testimonials
  ========================= */

  const testimonials = [
    {
      image: testimonialImg,
      name: "Shri Alok Chaudhari",
      text: "Dedicated supporter and contributor of Gurukulam activities and social services.",
    },

    {
      image: testimonialImg,
      name: "Amit Sharma",
      text: "Wonderful spiritual environment and educational support.",
    },

    {
      image: testimonialImg,
      name: "Rajesh Kumar",
      text: "Amazing experience with Gurukulam and Gaushala services.",
    },
  ];

  return (
    <section className="donor-section">
      <Container fluid>
        <Row className="g-4">
          {/* LEFT SIDE */}
          <Col lg={8}>
            {/* Donors */}
            <div className="section-header">
              <h2>Recent Donors</h2>
            </div>

            <p className="donor-description">
              The Goal of the Shri Raghav Gaudham is to eliminate the harmful
              impact of this inhumane and unnatural treatment.
            </p>

            {/* Scrollable Donor Grid */}
            <div className="donor-grid">
              {donors.map((donor, index) => (
                <div className="donor-card" key={index}>
                  <div className="donor-icon">
                    <FaUser />
                  </div>

                  <div className="donor-info">
                    <h5>{donor.name}</h5>

                    <span>{donor.time}</span>

                    <p>{donor.state}</p>
                  </div>
                </div>
              ))}
            </div>

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
                        <img src={item.image} alt={item.name} />

                        <h3>{item.name}</h3>

                        <p>{item.text}</p>
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            </div>
          </Col>

          {/* RIGHT SIDE */}
          <Col lg={4}>
            <div className="sidebar-box">
              {/* Social Icons */}
              <div className="social-icons">
                <a
                  href="https://www.google.com/?zx=1778749134554"
                  className="facebook"
                >
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
              <p>24 hours rescue and medical arrangements.</p>

              <p>
                1000+ destitute cows are being looked after in two branches with
                motherly attitude.
              </p>

              <p>Whole milk of mother cow is kept freely for her kids.</p>

              <p>
                Daily Bhandara arrangement for 150+ ascetics, saints and others.
              </p>

              <button className="donate-btn">Add Products To Donate</button>

              {/* Sidebar Donors */}
              <div className="sidebar-donors">
                <h4>Recent Donors</h4>

                <div className="sidebar-scroll">
                  {donors.map((donor, index) => (
                    <div className="sidebar-donor-card" key={index}>
                      <div className="donor-icon small">
                        <FaUser />
                      </div>

                      <div className="donor-info">
                        <h5>{donor.name}</h5>

                        <span>{donor.time}</span>

                        <p>{donor.state}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Donors;
