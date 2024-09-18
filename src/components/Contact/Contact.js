import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ContactForm from "./ContactForm.js";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Contact() {
  return (
    <Container fluid className="contact-section">
   <div>
        <Particle />
		<h1 className="project-heading">
          Ponte en <strong className="purple">contacto</strong> conmigo
        </h1>
        
		<div style={{marginTop:"50px"}}>
		<ContactForm />
		</div>
	  <Row>
          <Col md={12} className="home-about-social">
            <h1>O a través de <span className="purple">redes sociales</span></h1>
            <ul className="home-about-social-links">
			  <li className="social-icons-big">
                <a
                  href="https://www.linkedin.com/in/luiseduardosm/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn style={{ marginBottom: "2px", marginLeft: "2px"}} />
                </a>
              </li>
              <li className="social-icons-big">
                <a
                  href="https://twitter.com/luisedutrad"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter style={{ marginBottom: "2px", marginLeft: "2px"}} />
                </a>
              </li>
			  <li className="social-icons-big">
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
    </div>
	</Container>
  );
}

export default Contact;
