import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "./navBar.css";

function NavBar() {
  return (
    <>
      {/* <Navbar expand="lg" className="py-4 shadow-sm" style={{ backgroundColor: "#FE8D00" }} fixed="top" > */}
      <Navbar
        expand="lg"
        className="py-2 shadow-sm"
        style={{ backgroundColor: "#FE8D00" }}
      >
        <Container>
          {/* Logo */}
          <Navbar.Brand>Gurukulam</Navbar.Brand>

          {/* Toggle */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto nav-mobile">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#gaushala">Gaushala</Nav.Link>
              <Nav.Link href="#facility">Education</Nav.Link>
              <Nav.Link href="#gallery">Gallery</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
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
