import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import trustImg from "../assets/footer-bg.jpg";

import "./trustBoards.css";

function TrustBoards() {
  return (
    <section className="trust-section">
      <Container>
        {/* Header */}
        <div className="trust-header">
          <h2>Trust Boards</h2>

          {/* <p>
            Home / About Us / <span>Trust Boards</span>
          </p> */}
        </div>

        {/* Content */}
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="trust-content">
              <p>
                <strong>SHRI DINKAR UPPADHYAY</strong> Son of Ram Murat by faith
                Hindu, by caste Brahman, by occuapation Social Workar, resident
                of Vill - Baisu Pali Post - Janjwara P.S - Haidarganj, Blog -
                Tarun, District - Faizabad(Ayodhya), Uttar Pradesh, AADHAR NO. -
                8085 1331 1125, PAN : ALWPU5228M.............SECRETARYTrust
                Member.
              </p>

              <p>
                <strong>SHRI SMT.BINU DEVISHARMA</strong> Wife of Abhishek Kumar
                Sharma by faith Hindu, by caste lohar, by occupation Housewife,
                resident of Vill - Shahar Chapra Post - Shahar Chapra, P.S -
                Derni, Block - Dariyapur, District - Saran, Bihar, PIN - 841219,
                Indian Citizen, AADHAR NO. - 9213 8286 1825, PAN : JQKPK0127D
                ...................CASHIIERTrust Member.
              </p>

              <p>
                <strong>SHREE MANOJ KUMAR</strong>, Son of Late Brahmchari
                Surendra Kumar by faith Hindu, by cast sonar, by occupation
                layer, resident of vill - Salempur Chapra, Post- Chapra, P.S -
                Town Chapra, Block - Sadar, District - Saran, Bihar, PIN -
                841301 Indian Citizen, AADHAR NO. - 6324 9991 8396, PAN :
                AKEPK2379Q ....................Trust Member.
              </p>

              <p>
                <strong>SHREE JYNANESH KUMAR</strong>, Son of late Durgesh
                Tiwari by faith Hindu by caste Brahman, by occupation Lawyer,
                resident of Vill - Jalal Basant, Post - Basant, P.S - Garkha,
                Block - Garkha, District - Saran, Bihar, Indian Citizen, AADHAR
                NO. - 7108 3568 8866, PAN : BSKPK9489B .....................
                Trust Member.
              </p>

              {/* Members */}
              <div className="trust-members">
                <p>Shri Pankaj Kumar Mehar</p>
                <p>Shri Prakash Bhai Shah</p>
                <p>Shri Anant Bhai Dhamli</p>
              </div>

              {/* Image */}
              {/* <div className="trust-image">
                <img src={trustImg} alt="Tapovan Sanskar Pith" />

                <span>Tapovan Sanskar pith</span>
              </div> */}
              {/* PDF Download */}
              <div className="trust-pdf">
                <a
                  href="/trust-board.pdf"
                  download
                  target="_blank"
                  rel="noreferrer"
                  className="pdf-btn"
                >
                  Download Trust Board PDF
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default TrustBoards;
