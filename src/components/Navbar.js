import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-logo">
          LYCEUM OF ALABANG
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link as={Link} to="/" className="nav-link-custom">
              🏠 Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link-custom">
              📖 About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link-custom">
              📞 Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
