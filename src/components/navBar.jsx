import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

import "./navBar.css";

function NavBar() {
  return (
    <>
      <Navbar
        expand="lg"
        className="py-2 shadow-sm"
        style={{ backgroundColor: "#FE8D00" }}
      >
        <Container>
          {/* Logo */}
          <Navbar.Brand as={Link} to="/">
            <img src={Logo} alt="Gurukulam Logo" className="logo" />
            <div className="brand-text">
              <p>VASUDHAIV</p>
              <p>GURUKULAM BHARAT</p>
              <p>CHARITABLE TRUST</p>
            </div>
          </Navbar.Brand>

          {/* Toggle */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto nav-mobile">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>

              {/* About Dropdown */}
              <NavDropdown
                title="About"
                id="about-dropdown"
                className="custom-dropdown"
              >
                <NavDropdown.Item as={Link} to="/vision">
                  Vision
                </NavDropdown.Item>

                {/* <NavDropdown.Item as={Link} to="/about-founder">
                  Our Founder
                </NavDropdown.Item> */}

                <NavDropdown.Item as={Link} to="/trust-boards">
                  Trust Boards
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#gaushala">Gaushala</Nav.Link>

              <Nav.Link href="#facility">Education</Nav.Link>

              <Nav.Link href="#gallery">Gallery</Nav.Link>

              <Nav.Link href="#contact">Contact</Nav.Link>

              <Nav.Link href="/events">Events</Nav.Link>
            </Nav>

            {/* Button */}
            <Button
              as={Link}
              to="/qr-donate"
              style={{
                backgroundColor: "#4F7D39",
                color: "#fff",
                border: "none",
                padding: "8px 16px",
                fontWeight: "400",
              }}
            >
              Donate Now
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
