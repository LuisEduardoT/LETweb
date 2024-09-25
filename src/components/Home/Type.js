import React from "react";
import Typewriter from "typewriter-effect";
import { useTranslation, Trans } from "react-i18next";

function Type() {
	const { t } = useTranslation(); 
  return (
    <Typewriter
      options={{
        strings: [
          "Traductor",
          "Localizador",
		  "Revisor",
          "Corrector",
		  "LQA tester",
          "Especialista SEO",
		  "Videojugador",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
		delay: 80,
      }}
    >
	
	</Typewriter>
  );
}

export default Type;
