import React from "react";
import { Col, Row } from "react-bootstrap";
import subedit from "../../Assets/Subtitle_Edit_logo.png";
import memoq from "../../Assets/MemoQ.png";
import office from "../../Assets/office.svg";
import trados from "../../Assets/tradosstudio.webp";
import passolo from "../../Assets/Passolo.png";
import phrase from "../../Assets/Phrase.webp";
import xbench from "../../Assets/xbench.png";
import alchemy from "../../Assets/alcatalyst.png";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={trados} class="tool-img" title="SDL Trados Studio" alt="SDL Trados Studio"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={passolo} class="tool-img" title="SDL Passolo" alt="SDL Passolo"/>
      </Col>
	  <Col xs={4} md={2} className="tech-icons">
        <img src={memoq} class="tool-img" title="memoQ" alt="memoQ"/>
      </Col>
	  <Col xs={4} md={2} className="tech-icons">
        <img src={subedit} class="tool-img" title="Subtitle Edit" alt="Subtitle Edit"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={phrase} class="tool-img" title="Phrase TMS" alt="Phrase TMS"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={office} class="tool-img" title="MS Office" alt="MS Office"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={xbench} class="tool-img" title="APSIC xBench" alt="APSIC xBench"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={alchemy} class="tool-img" title="Alchemy Catalyst" alt="Alchemy Catalyst"/>
      </Col>
    </Row>
  );
}

export default Techstack;
