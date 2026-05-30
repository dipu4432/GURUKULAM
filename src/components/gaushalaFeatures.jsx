import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./gaushalaFeatures.css";

import img1 from "../assets/a1.jpg";
import img2 from "../assets/a2.jpg";
import img3 from "../assets/a3.jpg";
import img4 from "../assets/a4.jpg";

function GaushalaFeatures() {
  const features = [
    {
      title: "गो संरक्षण",
      text: "बीमार और बेसहारा गायों की देखभाल एवं सुरक्षा",
      image: img1,
    },
    {
      title: "प्राकृतिक जीवन",
      text: "शुद्ध वातावरण, प्राकृतिक भोजन और वैदिक जीवनशैली",
      image: img2,
    },
    {
      title: "सेवा एवं संस्कार",
      text: "विद्यार्थियों को गो सेवा के माध्यम से सेवा भाव सिखाना",
      image: img3,
    },
    {
      title: "शुद्ध दुग्ध सेवा",
      text: "स्वास्थ्यवर्धक एवं शुद्ध दुग्ध उत्पादन",
      image: img4,
    },
  ];

  return (
    <section className="gaushala-section">
      <Container>
        <div className="section-title">
          <h2>हमारी गौशाला की विशेषताएँ</h2>
        </div>

        <Row className="g-4">
          {features.map((item, index) => (
            <Col lg={3} md={6} sm={6} xs={12} key={index}>
              <div className="feature-card">
                {/* <div className="feature-icon"></div> */}

                <div className="feature-content">
                  <h5>{item.title}</h5>
                  <p>{item.text}</p>
                </div>

                <img
                  src={item.image}
                  alt={item.title}
                  className="feature-image"
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default GaushalaFeatures;