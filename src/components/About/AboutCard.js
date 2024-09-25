import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FaRegHandPointRight } from "react-icons/fa";
import { useTranslation, Trans } from "react-i18next";

function AboutCard() {
	const { t } = useTranslation();
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", marginBottom: "10px"}}>
           <Trans i18nKey="about_content1">¡Hola! Me llamo <span className="purple">Luis Eduardo </span>
            y soy de <span className="purple">Salamanca,&nbsp;España. </span>
            Actualmente soy traductor autónomo y <Link class="link" to="/resume">mis servicios</Link> están disponibles de inglés a español (peninsular) y viceversa.</Trans>
           
		  </p>
		  <p style={{ textAlign: "justify", marginBottom: "10px"}}>
            <Trans i18nKey="about_content2">Soy graduado en Traducción e Interpretación por la Universidad de Salamanca y me he especializado a través del Máster en Traducción Audiovisual y Localización de la Universidad Autónoma de Madrid.</Trans>
          </p>
		  <p style={{ textAlign: "justify", marginBottom: "10px"}}>
			<Trans i18nKey="about_content3">Tengo <Link class="link" to="/project">experiencia</Link> localizando texto <i>ingame </i>y contenido promocional de videojuegos populares tipo battle royale, de acción-aventura de piratas y de disparos en primera persona.</Trans>
			<br />
			
            <br />
            {t("about_content4")}
          </p>
          <ul>
            <li className="about-activity">
              <FaRegHandPointRight /> {t("about_list1")}
            </li>
            <li className="about-activity">
              <FaRegHandPointRight /> {t("about_list2")}
            </li>
            <li className="about-activity">
              <FaRegHandPointRight /> {t("about_list3")}
            </li>
          </ul>

          <p style={{ color: "rgb(126, 172, 144)" }}>
			<Trans i18nKey="about_quote">A famous explorer once said that the extraordinary is in what we do, not who we are.</Trans>{" "}
          </p>
          <footer className="blockquote-footer">Lara Croft</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
