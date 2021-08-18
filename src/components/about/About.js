import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-img">
        <img
          src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg"
          alt="about"
        />
      </div>
      <div className="about-desc">
        <h3>Déjame decirte algo sobre mí</h3>
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
