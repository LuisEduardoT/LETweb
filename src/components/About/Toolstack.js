import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiHtml5,
  SiVercel,
  SiSlack,
  SiMacos,
} from "react-icons/si";
import photoshop from "../../Assets/Photoshop.png";
import premiere from "../../Assets/Premiere.png";
import wpress from "../../Assets/WordPress.png";
import html from "../../Assets/HTML5.png";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={photoshop} class="tool-img"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={premiere} class="tool-img"/>
      </Col>
	  <Col xs={4} md={2} className="tech-icons">
        <img src={wpress} class="tool-img"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={html} class="tool-img" width="10%"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
    </Row>
  );
}

export default Toolstack;
