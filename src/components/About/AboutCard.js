import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FaRegHandPointRight } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", marginBottom: "10px"}}>
            ¡Hola! Me llamo <span className="purple">Luis Eduardo </span>
            y soy de <span className="purple">Salamanca,&nbsp;España. </span>
            Actualmente soy traductor autónomo y <Link class="link" to="/resume">mis servicios</Link> están disponibles de inglés a español (peninsular) y viceversa.
            </p><p style={{ textAlign: "justify", marginBottom: "10px"}}>
            Soy graduado en Traducción e Interpretación por la Universidad de Salamanca y me he especializado a través del Máster en Traducción Audiovisual y Localización de la Universidad Autónoma de Madrid.
            </p><p style={{ textAlign: "justify", marginBottom: "10px"}}>
			Tengo <Link class="link" to="/project">experiencia</Link> localizando texto <i>ingame </i>y contenido promocional de videojuegos populares tipo battle royale, de acción-aventura de piratas y de disparos en primera persona.
			<br />
			
            <br />
            Además de traducir, también me gusta dedicar tiempo a
          </p>
          <ul>
            <li className="about-activity">
              <FaRegHandPointRight /> Mejorar mi nivel de japonés
            </li>
            <li className="about-activity">
              <FaRegHandPointRight /> Aprender sobre botánica
            </li>
            <li className="about-activity">
              <FaRegHandPointRight /> Jugar a videojuegos
            </li>
          </ul>

          <p style={{ color: "rgb(126, 172, 144)" }}>
            "A famous explorer once said<br />that the extraordinary is in what we do, not who we are."{" "}
          </p>
          <footer className="blockquote-footer">Lara Croft</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
