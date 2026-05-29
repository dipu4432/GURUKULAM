import { useState } from "react";
import Container from "react-bootstrap/Container";

import "./imageGallery.css";

import g1 from "../assets/g11.png";
import g2 from "../assets/g22.png";
import g3 from "../assets/g33.png";
import g4 from "../assets/g44.png";

function ImageGallery() {
  const [images, setImages] = useState([
    { img: g1, title: "गुरुकुल शिक्षा" },
    { img: g2, title: "गुरु सम्मान" },
    { img: g3, title: "योग अभ्यास" },
    { img: g4, title: "यज्ञ एवं संस्कार" },
  ]);

  const nextSlide = () => {
    setImages((prev) => [...prev.slice(1), prev[0]]);
  };

  const prevSlide = () => {
    setImages((prev) => [
      prev[prev.length - 1],
      ...prev.slice(0, prev.length - 1),
    ]);
  };

  return (
    <section className="gallery-section">
      <Container>

        <div className="gallery-wrapper">

          <button className="gallery-btn" onClick={prevSlide}>
            ❮
          </button>

          <div className="gallery-row">
            {images.map((item, index) => (
              <div className="gallery-card" key={index}>
                <img src={item.img} alt={item.title} />
                {/* <div className="gallery-caption">
                  {item.title}
                </div> */}
              </div>
            ))}
          </div>

          <button className="gallery-btn" onClick={nextSlide}>
            ❯
          </button>

        </div>

      </Container>
    </section>
  );
}

export default ImageGallery;