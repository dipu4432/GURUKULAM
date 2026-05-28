import "./banner.css";
import Button from "react-bootstrap/Button";
import heroBg from "../assets/images/hero_bg.jpg";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <>
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
          <p className="hero-subtitle">
            गोशाला से आत्मनिर्भर गुरुकुलम् — पढ़ाई, खेल और संस्कृति का संगम
          </p>

          {/* Buttons */}
          <div className="hero-buttons">
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

      {/* Marquee Section */}
      <div className="marquee-container">
        <div className="marquee-track">
          <span>
            🚩 गुरुकुलम् निर्माण हेतु सहयोग करें •
            <Link to="/qr-donate" className="marquee-text-link">
              Donate Now
            </Link>
            •
          </span>

          <span>
            📢 नया कार्यक्रम शुरू •
            <Link to="/events" className="marquee-text-link">
              View Events
            </Link>
            •
          </span>

          {/* <span>
            🎓 Admission Open 2026 •
            <Link to="/admission" className="marquee-text-link">
              Apply Now
            </Link>
            •
          </span> */}

          {/* Duplicate for smooth infinite effect */}

          <span>
            🚩 गुरुकुलम् निर्माण हेतु सहयोग करें •
            <Link to="/qr-donate" className="marquee-text-link">
              Donate Now
            </Link>
            •
          </span>

          <span>
            📢 नया कार्यक्रम शुरू •
            <Link to="/events" className="marquee-text-link">
              View Events
            </Link>
            •
          </span>

          {/* <span>
            🎓 Admission Open 2026 •
            <Link to="/admission" className="marquee-text-link">
              Apply Now
            </Link>
            •
          </span> */}
        </div>
      </div>
    </>
  );
}

export default Banner;
