import React from "react";
import { Col, Row } from "react-bootstrap";
import photoshop from "../../Assets/Photoshop.png";
import premiere from "../../Assets/Premiere.png";
import wpress from "../../Assets/WordPress.png";
import html from "../../Assets/HTML5.png";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={photoshop} class="tool-img" title="HTML" alt="Adobe Photoshop"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={premiere} class="tool-img" title="HTML" alt="Adobe Premiere"/>
      </Col>
	  <Col xs={4} md={2} className="tech-icons">
        <img src={wpress} class="tool-img" title="HTML" alt="WordPress"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={html} class="tool-img" width="10%" title="HTML" alt="HTML"/>
      </Col>
    </Row>
  );
}

export default Toolstack;
