import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import { useTranslation, Trans } from "react-i18next";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <Trans i18nKey="about_title1">Sobre <strong className="purple">mí</strong></Trans>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          <Trans i18nKey="about_title2"><strong className="purple">Software</strong> que utilizo </Trans>
        </h1>
        <Techstack />

        <h1 className="project-heading">
          <Trans i18nKey="about_title3">Otras <strong className="purple">herramientas</strong> que manejo</Trans>
        </h1>
        <Toolstack />

      </Container>
    </Container>
  );
}

export default About;
