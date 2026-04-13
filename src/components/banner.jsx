import "./banner.css";
import Button from "react-bootstrap/Button";
import heroBg from "../assets/images/hero_bg.jpg";

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
          Sanskar, Shiksha aur Seva <br />
          ka Adarsh Gurukulam
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          Gaushala se Atmanirbhar Gurukulam - Padhai, Sports aur Sanskriti ka Sangam
        </p>

        {/* Buttons */}
        <div className="hero-buttons">
          <button className="btn" style={{ backgroundColor: "#4F753A", color: "#FFFFFF" }} >
            Admission Open
          </button>

          <Button
            style={{
              backgroundColor: "#D67816",
              border: "none",
              color: "#FFFFFF"
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
