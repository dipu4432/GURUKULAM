import "./gallery.css";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "../assets/images/gaushala.jpg";
import img2 from "../assets/images/sports.jpg";
import img3 from "../assets/images/gitapath.jpg";

function Gallery() {
  const items = [
    {
      title: "Gaushala",
      image: img1
    },
    {
      title: "Sports",
      image: img2
    },
    {
      title: "Gita Path",
      image: img3
    }
  ];

  return (
    <section className="gallery-section">
      <Container>
        <div className="gallery-header">
          <h2>Shiksha ke Sath Sampoorna Vikas</h2>
          <p>
            Hamara gurukulam mein bachchon ko sirf pustak gyan hi nahi diya jata,
            balki unke sharirik, mansik aur adhyatmik vikas par bhi dhyan diya
            jata hai.
          </p>
          <p>
            Yahan bachche gaushala seva, paramparik khel aur dharmik path ke
            madhyam se jeevan ke moolya seekhte hain.
          </p>
        </div>

        <Row className="g-4 justify-content-center">
          {items.map((item, index) => (
            <Col lg={4} md={6} key={index}>
              <div className="gallery-card">
                <img
                  src={item.image}
                  alt={item.title}
                  className="gallery-image"
                />
                <h5>{item.title}</h5>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Gallery;