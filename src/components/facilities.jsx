import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {
  FaGlobe,
  FaGraduationCap,
  FaRegAddressBook,
  FaPlus,
  FaMinus,
} from "react-icons/fa";

import "./facilities.css";

function Facilities() {
  const [active, setActive] = useState("mission");

  const accordionData = [
    {
      id: "mission",
      title: "OUR MISSION",
      content:
        "To produce the sensitive, laborious, dynamic, patriotic and spiritual leaders for bringing up perfect global amity.",
    },
    {
      id: "philosophy",
      title: "OUR PHILOSOPHY",
      content:
        "We believe education should develop wisdom, discipline, compassion and leadership qualities in students.",
    },
    {
      id: "promise",
      title: "OUR PROMISE",
      content:
        "We promise to provide quality education with strong moral and spiritual values.",
    },
    {
      id: "vision",
      title: "OUR VISION",
      content:
        "Our vision is to create globally responsible individuals who contribute positively to society.",
    },
    {
      id: "donor",
      title: "OUR DONOR",
      content:
        "Our donor program supports students from underprivileged backgrounds.",
    },
  ];

  return (
    <section className="facilities-section">
      <Container>
        <Row className="gy-5">
          {/* LEFT SIDE */}
          <Col lg={6}>
            <div className="left-content">
              <h2>FACILITIES</h2>

              <p className="small-text">Facilities</p>

              <p className="description">
                TAPOVAN SANSKAR PITH is devoted to excellence in teaching,
                learning, research work and developing leaders in many
                disciplines who can make a difference on global basis.
              </p>

              <div className="facility-item">
                <FaGlobe className="facility-icon" />

                <p>
                  <strong>International focus</strong> – our students come from
                  each nook and corner of the globe.
                </p>
              </div>

              <div className="facility-item">
                <FaGraduationCap className="facility-icon" />

                <p>
                  <strong>Residential courses</strong> – we encourage learning
                  and growth.
                </p>
              </div>

              <div className="facility-item">
                <FaRegAddressBook className="facility-icon" />

                <p>
                  <strong>People not profits</strong> – education is a right not
                  a privilege
                </p>
              </div>

              <p className="bottom-text">
                If you prefer to study in your own time and at your own speed
                then one of our e-learning packages may light up your street.
              </p>
            </div>
          </Col>

          {/* RIGHT SIDE */}
          <Col lg={6}>
            <div className="right-content">
              <h2>OUR VALUES</h2>

              <div className="accordion-wrapper">
                {accordionData.map((item) => (
                  <div key={item.id} className="custom-accordion">
                    <div
                      className="accordion-header"
                      onClick={() =>
                        setActive(active === item.id ? "" : item.id)
                      }
                    >
                      <span className="accordion-icon">
                        {active === item.id ? <FaMinus /> : <FaPlus />}
                      </span>

                      <h4>{item.title}</h4>
                    </div>

                    {active === item.id && (
                      <div className="accordion-body-custom">
                        <p>{item.content}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Facilities;