import React from "react";
import { Container, Button, Card } from "react-bootstrap";

function Home() {
  return (
    <Container className="home-container">
      <h1>LYCEUM OF ALABANG EDUCATIONAL STATEMENT</h1>
      <p className="lead">Providing quality education for a brighter future.</p>
      <Card>
        <Card.Body>
          <h3>PHILOSOPHY</h3>
          <p>
            An institution that provides quality and relevant instruction and
            innovation for the next generation to improve the lives of
            individuals; physically, emotionally, morally, and spiritually
            adhere to the principle of God.
          </p>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Body>
          <h3>VISION</h3>
          <p>
            Lyceum of Alabang envisions becoming one of the nation’s leading
            educational institutions involved in the pursuit and advancement of
            knowledge, skills, and values for personal, community and national
            development.
          </p>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Body>
          <h3>MISSION</h3>
          <p>
            Lyceum of Alabang shall provide world-class education and training
            through competent personnel, high-end facilities, advanced
            technology, and equipment and accredited curricula of industry-based
            courses.
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Home;
