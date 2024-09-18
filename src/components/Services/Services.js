import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";

function Services() {
  return (
      <Container fluid className="services-section">
        <Particle />
		<h1 className="project-heading">
          Qué <strong className="purple">servicios</strong> ofrezco
        </h1>
        <p style={{ color: "white" }}>
          Conoce los servicios que pueden llevar tu proyecto al siguiente nivel.
        </p>
      </Container>
  );
}

export default Services;
