import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsLink45Deg } from "react-icons/bs";
import { useTranslation, Trans } from "react-i18next";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
		<div display="flex" alignItems="flex-end" flexDirection="column"  height="100%">
        <Button variant="primary" href={props.ghLink} target="_blank" position="absolute" bottom="0" margintop="auto">
          <BsLink45Deg /> &nbsp;
          {props.isBlog ? "Blog" : <Trans i18nKey="work_cardlink1" />}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}</div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
