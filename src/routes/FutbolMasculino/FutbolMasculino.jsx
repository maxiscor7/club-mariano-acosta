import React from 'react'
import NavBrowser from '../../components/NavBrowser';
import Footer from '../../components/Footer';
import bannerVoley from "../../assets/banner-voley.jpeg";
import messi from "../../assets/messi.png";
import futInfantil from "../../assets/futInfantil.jpg";
import './FutbolMasculino.css';

export default function FutbolMasculino() {
  return (
    <div className="container-div-futbolMasculino">
      <NavBrowser />
      <div className="container-banner-futbolMasculino">
        <img className="banner-futbolMasculino" src={bannerVoley} alt="banner futbol Masculino" />
        <img className="player-image-futbolMasculino" src={messi} alt="player" />
        <div className="container-banner-text-futbolMasculino">
          <h2 className="title">¡El mejor lugar para entrenar!</h2>
          <p className="subtitle">
          ¡Sumate! ya somos mas de 160 alumnos
          </p>
        </div>
      </div>
      <div className="container-futbolMasculinopic-family">
        <img className="pic-futbolMasculino1" src={futInfantil} alt="equipo de futbol Masculino" />
        <div className="container-text-futbolMasculino">
          <h2>ESCUELLITA FUTBOL INFANTIL MASCULINO</h2>
          <p>Nuestra escuelita de Futbol Infantil Masculino crece dia a dia, ya sumamos aproximadamente 160 alumnos, con lindos proyectos para ellos. Son unos de los pilares mas fuerte de nuestras actividades. Niños de 4 a 14 años distribuidos por categorías en dos escuelitas en paralelo, con sus dos practicas semanales y partidos los fin de semana. Escuelita en la que siempre se destaca el acompañamiento de los padres hacia los alumnos, entendiendo el factor recreativo al momento del desarrollo de la actividad por parte de cada uno de nuestros jugadores. Venite la vas a pasar muy bien. Te esperamos C.SyD.M.A
          </p>
          <p>Profesores: Andy/javi | Joel | Leonardo/Alex | Bertoglio/Solange | Chichizola/Karen | ayelen | Benitez/ivan | Cabrera</p>
          <p>Las prácticas se desarrollan en nuestro nexo Polideportivo.</p>
          <p>Info al: 1131848212 y/o 1150375322 (Comité Deportivo)</p>
          <p>Mándanos un Whatsapp a los números aportados para informarte de los cronograma de prácticas y todo lo que quieras saber. Te esperamos
          </p>

        </div>
      </div>
      <Footer />
    </div>
  )
}
