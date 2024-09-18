import React from "react";
import Typewriter from "typewriter-effect";

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
    />
  );
}

export default Type;
