import React from 'react'
import Footer from '../../components/Footer';
import bannerVoley from "../../assets/banner-voley.jpeg";
import basquetPic from "../../assets/basquetPic.png";
import basquetKids from "../../assets/basquetKids.png";
import './Basquetbol.css';
import NavBrowserBst from '../../components/NavBrowserBst';

export default function Basquetbol() {
  return (
    <div className="container-div-basquetbol">
      <NavBrowserBst />
      <div className="container-banner-basquetbol">
        <img className="banner-basquetbol" src={bannerVoley} alt="banner basquetbol" />
        <img className="player-image-basquetbol" src={basquetPic} alt="player" />
        <div className="container-banner-text-basquetbol">
          <h2 className="title">Anótate en Basquet CLUB M.ACOSTA</h2>
          <p className="subtitle">
            Entrena, disfruta y competi al maximo nivel
          </p>
        </div>
      </div>
      <div className="container-basquetbolpic-family">
        <img className="pic-basquetbol1" src={basquetKids} alt="equipo de basquetbol" />
        <div className="container-text-basquetbol">
          <p>Esta es una de nuestras tantas Disciplinas, donde los Guerreros/as que se suman a este Actividad sabemos que tienen una Capacidad y Destreza distinta a muchos deportistas. Es una Actividad donde las clases son dictadas por profesores altamente Capacitados, con el acompañamiento, Coordinación y accesoramiento del cuerpo Deportivo del Club Unitarios de nuestra Localidad Vecina Marcos Paz, ya que todos sabemos que Unitario es una Institución reconocida por su gran labor, constancia y calidad deportiva respecto al BASQUET. 
          </p>
          <p>Profesor: Facundo Lopez</p>
          <p>Info al: 1131848212 y/o 1150375322 (Comité Deportivo)</p>
          <p>Mándanos un Whatsapp a los números aportados para informarte de los cronograma de prácticas y todo lo que quieras saber. Te esperamos
          </p>

        </div>
      </div>
      <Footer />
    </div>
  )
}
