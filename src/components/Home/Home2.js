import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useTranslation, Trans } from "react-i18next";

function Home2() {
	const { t } = useTranslation(); 
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <Trans i18nKey="home_title1">
				<h1 style={{ fontSize: "2.6em" }}>
              SI QUIERES <span className="purple"> CONOCERME </span> UN POCO…
				</h1>
			</Trans>
            <p className="home-about-body">
			{t('home_abouttext1')}
              <br />
              <br />
			 <Trans i18nKey="home_abouttext2"> 
			  Actualmente mis servicios están disponibles para la <b className="purple">combinación EN ↔️ es_ES </b>
			 </Trans> 
              <br />
              <br />
			 <Trans i18nKey="home_abouttext3"> 
              Aunque me dedico especialmente a la traducción <b className="purple">audiovisual</b> y estoy especializado en <b className="purple">localización</b> de webs y software, tengo especial interés por la traducción <b className="purple">técnica</b> y <b className="purple">turística</b>.
             </Trans> 
			  <br />
              <br />
			 <Trans i18nKey="home_abouttext4"> 
              Cuando me es posible, me gusta colaborar en <b className="purple">proyectos <i>indie</i></b> o participar en eventos de traducción voluntaria para ayudar a difundir productos pequeños o en los que estoy especialmente interesado, como la <b className="purple">LocJam</b> de itch.io.
             </Trans>
			</p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <Trans i18nKey="home_title2">
				<h1>PUEDES <span className="purple"> CONTACTAR </span> CONMIGO</h1>
			</Trans>
            <p>
			  <Trans i18nKey="home_contacttext1">
				Enviándome un <span className="purple">mensaje</span> por correo electrónico o mensaje privado
			  </Trans>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="mailto:info@luiseduardotraduccion.com?"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail style={{ marginBottom: "2px", marginLeft: "2px"}} />
                </a>
              </li>
			  <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/luiseduardosm/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn style={{ marginBottom: "2px", marginLeft: "2px"}} />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/luisedutrad"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter style={{ marginBottom: "2px", marginLeft: "2px"}} />
                </a>
              </li>
			  <li className="social-icons">
                <a
                  href="https://github.com/LuisEduardoT"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub style={{ marginBottom: "2px", marginLeft: "2px"}} />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
