import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "./navBar.css";

function NavBar() {

  return (
    <>
      {/* <Navbar expand="lg" className="py-4 shadow-sm" style={{ backgroundColor: "#FE8D00" }} fixed="top" > */}
      <Navbar expand="lg" className="py-4 shadow-sm" style={{ backgroundColor: "#FE8D00" }} fixed="top" >
        <Container>
          
          {/* Logo */}
          <Navbar.Brand className="fw-bold fs-16">
            Gurukulam
          </Navbar.Brand>

          {/* Toggle */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto nav-mobile">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#home">About</Nav.Link>
              <Nav.Link href="#home">Gaushala</Nav.Link>
              <Nav.Link href="#home">Education</Nav.Link>
              <Nav.Link href="#home">Gallery</Nav.Link>
              <Nav.Link href="#home">Contact</Nav.Link>
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