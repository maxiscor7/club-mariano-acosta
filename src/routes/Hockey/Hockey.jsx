import React from 'react'
import Footer from '../../components/Footer';
import bannerVoley from "../../assets/banner-voley.jpeg";
import hockeyPic from "../../assets/hockeyPic.png";
import hockey from "../../assets/hockey.jpg";
import './Hockey.css';
import NavBrowserBst from '../../components/NavBrowserBst';

export default function Hockey() {
  return (
    <div className="container-div-hockey">
      <NavBrowserBst />
      <div className="container-banner-hockey">
        <img className="banner-hockey" src={bannerVoley} alt="banner hockey"/>
        <img className="player-image-hockey" src={hockeyPic} alt="player" />
        <div className="container-banner-text-hockey">
          <h2 className="title">Anótate en Hockey CLUB M.ACOSTA</h2>
          <p className="subtitle">
          ¡Descubre la emoción del hockey y únete a nuestra comunidad deportiva hoy mismo!
          </p>
        </div>
      </div>
      <div className="container-hockeypic-family">
        <img className="pic-hockey1" src={hockey} alt="equipo de voley" />
        <div className="container-text-hockey">
          <p>Una Actividad en desarrollo en la cual nuestra institución APUESTA MUCHISIMO, sabemos que la variedad en el Deporte es fundamental, por eso te ofrecemos que te sumes a Nuestro Hockey Club. Mariano Acosta. Grupos Infantiles Juveniles y Mayores discriminadas por Categorías, tres clases semanales, apuntamos a ingresar un nuevo torneo 2024, acompáñanos en esta nueva etapa.
          </p>
          <p>Profesores: Aylen Milagros Aquino y Ruben Alberto Abelenda </p>
          <p>Info al: 1131848212 y/o 1150375322 (Comité Deportivo)</p>
          <p>Mándanos un Whatsapp a los números aportados para informarte de los cronograma de prácticas y todo lo que quieras saber. Te esperamos
          </p>

        </div>
      </div>
      <Footer />
    </div>
  )
}
