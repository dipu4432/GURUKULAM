import "./banner.css";
import Button from "react-bootstrap/Button";
import heroBg from "../assets/images/hero_bg.jpg";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <section
      className="hero-section"
      style={{
        background: `url(${heroBg}) center/cover no-repeat`,
      }}
    >
      {/* Overlay */}
      <div className="hero-overlay"></div>

      <div className="hero-content container">
        {/* Heading */}
        <h1 className="hero-title">
          संस्कार, शिक्षा और सेवा <br />
          का अदर्श गुरुकुलम्
        </h1>

        {/* Subtitle */}
        {/* <p className="hero-subtitle">
          Gaushala se Atmanirbhar Gurukulam - Padhai, Sports aur Sanskriti ka Sangam
        </p> */}
        <p className="hero-subtitle">
          गोशाला से आत्मनिर्भर गुरुकुलम् — पढ़ाई, खेल और संस्कृति का संगम
        </p>

        {/* Buttons */}
        <div className="hero-buttons">
          {/* <button className="btn" style={{ backgroundColor: "#4F753A", color: "#FFFFFF" }} >
            Admission Open
          </button> */}

          <Button
            as={Link}
            to="/qr-donate"
            style={{
              backgroundColor: "#D67816",
              border: "none",
              color: "#FFFFFF",
            }}
          >
            Donate Now
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
