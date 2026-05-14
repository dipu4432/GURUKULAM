import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

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
            Gurukulam
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

                <NavDropdown.Item
                  as={Link}
                  to="/why-gurukulam"
                >
                  Why Gurukulam
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/trust-boards"
                >
                  Trust Boards
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#gaushala">
                Gaushala
              </Nav.Link>

              <Nav.Link href="#facility">
                Education
              </Nav.Link>

              <Nav.Link href="#gallery">
                Gallery
              </Nav.Link>

              <Nav.Link href="#contact">
                Contact
              </Nav.Link>

              <Nav.Link href="/events">
                Events
              </Nav.Link>
            </Nav>

            {/* Button */}
            <Button
              style={{
                backgroundColor: "#F4C679",
                color: "#000",
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