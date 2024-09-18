import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import apje from "../../Assets/Projects/APJE.png";
import locjam from "../../Assets/Projects/LocJAM6.png";
import gamigration from "../../Assets/Projects/GAMIGRATION.png";
import loki from "../../Assets/Projects/Loki.png";
import AppHub from "../../Assets/Projects/AppHub.png";
import ingame from "../../Assets/Projects/INGAME.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis últimos <strong className="purple">proyectos</strong>
        </h1>
        <p style={{ color: "white" }}>
          Aquí puedes echar un vistazo a lo que he estado haciendo recientemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={loki}
              isBlog={false}
              title="Loki Games OÜ"
              description="Localización de textos ingame y traducción de contenido web y publicaciones para redes."
              ghLink="https://www.lokilize.com/"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ingame}
              isBlog={false}
              title="Proyecto INGAME"
              description="Localización de un videojuego educativo y documentos formativos."
              ghLink="https://grial.usal.es/ingame"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gamigration}
              isBlog={false}
              title="Proyecto GAMIGRATION"
              description="Traducción de cuestionarios para profesores, estudiantes y padres y madres del proyecto"
              ghLink="https://gamigration.eu/"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={apje}
              isBlog={false}
              title="Asociación de Profesores de Japonés en España (APJE)"
              description="Traducción de japonés a español de diversas entradas del blog pertenecientes a eventos y actividades organizadas por la asociación."
              ghLink="https://www.apje.es/wordpress/es/eventos/"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
	  <Container>
        <h1 className="project-heading">
          <strong className="purple">Otros</strong> proyectos
        </h1>
        <p style={{ color: "white" }}>
          Colaboraciones con pequeños desarrolladores y eventos de voluntariado.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AppHub}
              isBlog={false}
              title="Simple MMO App Hub"
              description="Localización del cliente multifunción para Windows del videojuego web SimpleMMO"
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={locjam}
              isBlog={false}
              title="LocJAM 6: Not Enough Time"
              description="Participante en la sexta edición del evento de localización LocJAM de itch.io para traducir el juego Not Enough Time. El equipo estuvo formado por seis integrantes y fui responsable de la gestión del proyecto, divisón de tareas y preparación de archivos, además de traducir y revisar."
              ghLink="https://luiseddie.itch.io/es-es-not-enough-time-locjam-6"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
