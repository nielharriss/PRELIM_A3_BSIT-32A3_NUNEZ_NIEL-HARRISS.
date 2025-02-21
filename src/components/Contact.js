import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

function Contact() {
  return (
    <Container className="contact-container">
      <h1 className="text-center contact-title">📞 Contact Us</h1>
      <p className="text-center contact-subtitle">
        Get in touch with us for inquiries or assistance.
      </p>

      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="contact-card">
            <Card.Body>
              <Form>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group controlId="email" className="mt-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group controlId="message" className="mt-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Your message"
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-4 w-100">
                  Send Message
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center mt-4">
        <Col md={6} className="text-center">
          <p>
            <strong>Email:</strong> info@myschool.edu
          </p>
          <p>
            <strong>Phone:</strong> +63 912 345 6789
          </p>
          <p>
            <strong>Address:</strong> 123 University Ave, Manila, Philippines
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
