import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import ContactForm from "./ContactForm.js";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

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

export default ResumeNew;
