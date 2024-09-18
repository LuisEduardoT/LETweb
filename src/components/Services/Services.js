import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Soumyajit_Behera-BIT_MESRA.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

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

export default ResumeNew;
