import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaUserCircle, FaDownload } from "react-icons/fa";

import member1 from "../assets/trust/Abhishek Kumar Sharma.png";
import member2 from "../assets/trust/Bindu Devi Sharmaaaa.png";
import member3 from "../assets/trust/Dinkar Dasssss.jpg";
import member4 from "../assets/trust/Adv. Manoj Kumar.jpeg";

import "./trustBoards.css";

function TrustBoards() {
  const trustMembers = [
    {
      image: member1,
      name: "ABHISHEK KUMAR SHARMA",
      title: "ACHARYA ABHISHEK JEE MAHARAJ",
      details:
        "THIS DEED OF TRUST IS made on this 25th day of November two thousand Twenty Four, BY: Abhishek Kumar Sharma, Son of Chandrma Sharma, by faith Hindu, by caste Lohar, by occupation Social work, resident of Vill - Shahar Chapra, Post - Shahar Chapra P.s - Derni, Block - Dariyapur, Distrit Saran, Bihar, Indian Citizen.",
    },
    {
      image: member2,
      name: "BINU DEVI SHARMA",
      title: "Cashier of VGBCT",
      details:
        "Wife of Abhishek Kumar Sharma by faith Hindu, by caste Lohar, by occupation Housewife, resident of Vill - Shahar Chapra, Post - Shahar Chapra, P.S - Derni, Block - Dariyapur, District - Saran, Bihar.",
    },
    {
      image: member3,
      name: "SHRI DINKAR DAS",
      title: "Secretary of VGBCT (9336069183)",
      details:
        "Son of Ram Murat by faith Hindu, by caste Brahman, by occupation Social Worker, resident of Vill - Baisu Pali, Post - Janjwara, P.S - Haidarganj, Block - Tarun, District - Ayodhya, Uttar Pradesh.",
    },
    {
      image: null,
      name: "ADV. JYNANESH KUMAR",
      title: "Legal Advisor & Compliances of VGBCT",
      details:
        "Son of Late Durgesh Tiwari by faith Hindu, by caste Brahman, by occupation Lawyer, resident of Vill - Jalal Basant, Post - Basant, P.S - Garkha, District - Saran, Bihar.",
    },
    {
      image: member4,
      name: "ADV. MANOJ KUMAR",
      title: "Assistant Legal Advisor & Compliances of VGBCT",
      details:
        "Son of Late Brahmchari Surendra Kumar by faith Hindu, by caste Sonar, by occupation Lawyer, resident of Vill - Salempur Chapra, Post - Chapra, District - Saran, Bihar.",
    },
  ];

  return (
    <section className="trust-section">
      <Container>
        <div className="trust-header">
          <h2>Trust Boards</h2>
        </div>

        <Row className="g-4 justify-content-center">
          {trustMembers.map((member, index) => (
            <Col lg={6} md={6} key={index}>
              <div className="trust-card">
                <div className="trust-card-image">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="trust-card-img"
                    />
                  ) : (
                    <div className="trust-card-placeholder">
                      <FaUserCircle />
                    </div>
                  )}
                </div>

                <div className="trust-card-body">
                  <h4>{member.name}</h4>
                  <h6>{member.title}</h6>
                  <p>{member.details}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* <div className="trust-members">
          <h4>Other Members</h4>

          <p>Shri Pankaj Kumar Mehar</p>
          <p>Shri Prakash Bhai Shah</p>
          <p>Shri Anant Bhai Dhamli</p>
        </div> */}

        <div className="trust-pdf">
          <a
            href="/trust-board.pdf"
            download
            target="_blank"
            rel="noreferrer"
            className="pdf-btn"
          >
            <FaDownload />
            Download Trust Board PDF
          </a>
        </div>
      </Container>
    </section>
  );
}

export default TrustBoards;
