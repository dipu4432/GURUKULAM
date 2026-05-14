import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import trustImg from "../assets/trust-board.jpg";

import "./trustBoards.css";

function TrustBoards() {
  return (
    <section className="trust-section">
      <Container>
        {/* Header */}
        <div className="trust-header">
          <h2>Trust Boards</h2>

          <p>
            Home / Contact Us / <span>Trust Boards</span>
          </p>
        </div>

        {/* Content */}
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="trust-content">
              <p>
                <strong>Shri Lalitbhai Dhanji</strong> A well-known person
                holding the post of Chancellor in the main pillar of this
                institution. He is a loyal and fully dedicated disciple of
                Gurudev and handles all the executive and administrative levels
                of work with great devotion.
              </p>

              <p>
                <strong>Shri Rajubhai Shah</strong> Managing Trustee. He is a
                retired bank officer and now shoulders the responsibility of the
                institution and possesses management skills.
              </p>

              <p>
                <strong>Daie Shri Suryakant Shah</strong>, fondly known as
                Harimama, has been associated with the institution since the
                beginning and currently offers voluntary service.
              </p>

              {/* Members */}
              <div className="trust-members">
                <p>Shri Ajay Bhai Shah</p>
                <p>Shri Amit Bhai Shah</p>
                <p>Shri Prakash Bhai Shah</p>
                <p>Shri Ushakant Bhai Shah</p>
                <p>Shri Yogesh Bhai M Shah</p>
                <p>Shri Himmatlal Bhai Shah</p>
                <p>Shri Anant Bhai Dhamli</p>
              </div>

              {/* Image */}
              <div className="trust-image">
                <img src={trustImg} alt="Tapovan Sanskar Pith" />

                <span>Tapovan Sanskar pith</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default TrustBoards;