import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="footer-custom">
      <Container>
        <p className="footer-text">
          © {new Date().getFullYear()} My School | All Rights Reserved
        </p>
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
