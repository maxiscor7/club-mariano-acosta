import React from 'react'
import Footer from '../../components/Footer';
import bannerFutMasc from "../../assets/bannerFutMasc.png";

import futInfantil from "../../assets/futInfantil.jpg";
import './FutbolMasculino.css';
import NavBrowserBst from '../../components/NavBrowserBst';

export default function FutbolMasculino() {
  return (
    <div className="container-div-seccionGenerica">
      <NavBrowserBst />
      <div className="container-banner-seccionGenerica">
        <img className="banner-seccionGenerica" src={bannerFutMasc} alt="banner futbol Masculino" />
        
      </div>
      <div className="container-seccionGenericaPic-family">
        <img className="pic-seccionGenerica1" src={futInfantil} alt="equipo de futbol Masculino" />
        <div className="container-text-seccionGenerica">
          <h1>ESCUELITA FUTBOL INFANTIL MASCULINO</h1>
          <p>Nuestra escuelita de Futbol Infantil Masculino crece dia a dia, ya sumamos aproximadamente 160 alumnos, con lindos proyectos para ellos. Son unos de los pilares mas fuerte de nuestras actividades. Niños de 4 a 14 años distribuidos por categorías en dos escuelitas en paralelo, con sus dos practicas semanales y partidos los fin de semana. Escuelita en la que siempre se destaca el acompañamiento de los padres hacia los alumnos, entendiendo el factor recreativo al momento del desarrollo de la actividad por parte de cada uno de nuestros jugadores. Venite la vas a pasar muy bien. Te esperamos C.SyD.M.A
          </p>
          <p>Profesores: Andy/javi | Joel | Leonardo/Alex | Bertoglio/Solange | Chichizola/Karen | ayelen | Benitez/ivan | Cabrera</p>
          <p>Las prácticas se desarrollan en nuestro anexo Polideportivo.</p>
          <p>Info al: 1131848212 y/o 1150375322 (Comité Deportivo), mándanos un Whatsapp a los números aportados para informarte de los cronograma de prácticas y todo lo que quieras saber. Te esperamos
          </p>

        </div>
      </div>
      <Footer />
    </div>
  )
}
