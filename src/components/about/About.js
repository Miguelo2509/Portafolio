import React from "react";
import selfie from "../../media/selfie.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-img">
        <img
          src= {selfie}
          alt="about"
        />
      </div>
      <div className="about-desc">
        <h3>Déjame contarte algo sobre mí</h3>
        <p>
          Actualmente estoy cursando la tercera etapa del informatorio y realizando
          otros cursos de programación.
          Trabajo como auditor en una empresa de retail en la cual me estoy 
          capacitando en ABAP que es un lenguaje de programación exclusivo del sistema SAP.
        </p>
      </div>
    </div>
  );
};

export default About;
