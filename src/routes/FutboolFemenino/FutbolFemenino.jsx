import React from 'react'
import NavBrowser from '../../components/NavBrowser';
import Footer from '../../components/Footer';
import bannerVoley from "../../assets/banner-voley.jpeg";
import futFemBanner from "../../assets/futFemBanner.png";
import futFem from "../../assets/futFem.png";
import './FutbolFemenino.css';

export default function FutbolFemenino() {
  return (
    <div className="container-div-FutbolFemenino">
    <NavBrowser />
    <div className="container-banner-FutbolFemenino">
      <img className="banner-FutbolFemenino" src={bannerVoley} alt="banner Futbol Femenino" />
      <img className="player-image-FutbolFemenino" src={futFemBanner} alt="player Futbol Femenino" />
      <div className="container-banner-text-FutbolFemenino">
        <h2 className="title">¡Anótate en Nuestro Equipo de Fútbol Femenino!</h2>
        <p className="subtitle">
        !INSCRIPCIONES ABIERTAS! para infantiles, juveniles y mayores
        </p>
      </div>
    </div>
    <div className="container-FutbolFemeninopic-family">
      <img className="pic-FutbolFemenino1" src={futFem} alt="equipo de Futbol Femenino" />
      <div className="container-text-FutbolFemenino">
        <p>Ellas también se sumaron a nuestra familia, ya hace tiempo que se entrenan y de esta manera  compiten, defendiendo sana y deportivamente a esta Institución. Dia a dia demuestran como van creciendo como grupo, poniéndose a punto de cara al inicio de la Competencia ciclo 2024. Venite y acompáñanos a esta travesía deportiva haciendo lo que te gusta. Jugando a la pelota. Las esperamos INSCRIPCIONES ABIERTAS para infantiles, juveniles y mayores
        </p>
        <p>Profesores: Micaela Ines Montagna y Nestor Figueroa</p>
        <p>Las practicas se desarrollan en nuestro nexo Polideportivo.</p>
        <p>Info al: 1131848212 y/o 1150375322 (Comité Deportivo)</p>
        <p>Mándanos un Whatsapp a los números aportados para informarte de los cronograma de prácticas y todo lo que quieras saber. Te esperamos
        </p>

      </div>
    </div>
    <Footer />
  </div>
  )
}
