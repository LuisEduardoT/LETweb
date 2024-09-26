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
import { useTranslation, Trans } from "react-i18next";

function Projects() {
	const { t } = useTranslation();
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <Trans i18nKey="work_title1">Mis últimos <strong className="purple">proyectos</strong></Trans>
        </h1>
        <p style={{ color: "white" }}>
		  {t("work_description1")}
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={loki}
              isBlog={false}
              title={t("work_cardtitle1")}
              description={t("work_carddesc1")}
              ghLink="https://www.lokilize.com/"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ingame}
              isBlog={false}
              title={t("work_cardtitle2")}
              description={t("work_carddesc2")}
              ghLink="https://grial.usal.es/ingame"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gamigration}
              isBlog={false}
              title={t("work_cardtitle3")}
              description={t("work_carddesc3")}
              ghLink="https://gamigration.eu/"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={apje}
              isBlog={false}
              title={t("work_cardtitle4")}
              description={t("work_carddesc4")}
              ghLink="https://www.apje.es/wordpress/es/eventos/"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
	  <Container>
        <h1 className="project-heading">
          <Trans i18nKey="work_title2"><strong className="purple">Otros</strong> proyectos</Trans>
        </h1>
        <p style={{ color: "white" }}>
          Colaboraciones con pequeños desarrolladores y eventos de voluntariado.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AppHub}
              isBlog={false}
              title={t("work_cardtitle5")}
              description={t("work_carddesc5")}
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={locjam}
              isBlog={false}
              title={t("work_cardtitle6")}
              description={t("work_carddesc6")}
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
