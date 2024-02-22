import React from 'react'
import NavBrowser from '../../components/NavBrowser';
import Footer from '../../components/Footer';
import bannerVoley from "../../assets/banner-voley.jpeg";
import imgVoley from "../../assets/imgVoley.png";
import voleyPic from "../../assets/voleyPic.jpg";
import './Voley.css';

export default function Voley() {
  return (
    <div className="container-div-voley">
      <NavBrowser />
      <div className="container-banner-voley">
        <img className="banner-voley" src={bannerVoley} alt="banner voley" />
        <img className="player-image" src={imgVoley} alt="image player" />
        <div className="container-banner-text-voley">
          <h2 className="title">¡Clases semanales! Más de 140 inscriptos.</h2>
          <p className="subtitle">
            Juveniles y mayores de 18 años. ¡Súmate a nuestra familia!
          </p>
        </div>
      </div>
      <div className="container-voleypic-family">
        <img className="pic-voley1" src={voleyPic} alt="imagen equipo de voley" />
        <div className="container-text-voley">
          <p>Las clases se desarrollan tanto en las instalaciones de nuestra Pista en el Club como en el Nexo Polideportivo Súmate a nuestra familia. Se vienen lindas experiencias para nuestros Jugadores/as, queremos que seas parte de todo esto.
          </p>
          <p>Profesor juveniles: Andy Javier schwindt</p>
          <p>Profesor mayores de 18: Ruben Alberto Abelenda</p>
          <p>Info al: 1131848212 y/o 1150375322 (Comité Deportivo)</p>
          <p>Mándanos un Whatsapp a los números aportados para informarte de los cronograma de prácticas y todo lo que quieras saber. Te esperamos
          </p>

        </div>
      </div>
      <Footer />
    </div>
  );
}
