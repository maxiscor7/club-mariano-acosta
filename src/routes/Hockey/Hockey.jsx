import React from 'react'
import NavBrowser from '../../components/NavBrowser';
import Footer from '../../components/Footer';
import bannerVoley from "../../assets/banner-voley.jpeg";
import hockeyPic from "../../assets/hockeyPic.png";
import hockey from "../../assets/hockey.jpg";
import './Hockey.css';

export default function Hockey() {
  return (
    <div className="container-div-hockey">
      <NavBrowser />
      <div className="container-banner-hockey">
        <img className="banner-hockey" src={bannerVoley} alt="banner hockey"/>
        <img className="player-image-hockey" src={hockeyPic} alt="player" />
        <div className="container-banner-text-hockey">
          <h2 className="title">Anótate en Hockey Mariano Acosta</h2>
          <p className="subtitle">
          ¡Descubre la emoción del hockey y únete a nuestra comunidad deportiva hoy mismo!
          </p>
        </div>
      </div>
      <div className="container-hockeypic-family">
        <img className="pic-hockey1" src={hockey} alt="equipo de voley" />
        <div className="container-text-hockey">
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
  )
}
