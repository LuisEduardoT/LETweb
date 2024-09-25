import React from "react";
import Typewriter from "typewriter-effect";
import { useTranslation } from "react-i18next";

function Type() { 
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
