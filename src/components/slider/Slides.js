import React from "react";
import adopcionMascotas from "../../media/adopcionMascotas.jpg";
import obraDonBosco from "../../media/obraDonBosco.jpg";
import "./Slider.css";

const slidesInfo = [
  {
    src : (obraDonBosco),
    alt: "Proyecto 1",
    desc: "Obra Don Bosco",
  },
  {
    src : (adopcionMascotas),
    alt: "Proyecto 2",
    desc: "Adopción de Mascotas",
  }
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <img src={slide.src} alt={slide.alt} />
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));

export default slides;