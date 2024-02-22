import React from 'react'
import NavBrowser from '../../components/NavBrowser';
import Footer from '../../components/Footer';
import bannerVoley from "../../assets/banner-voley.jpeg";
import imgVoley from "../../assets/imgVoley.png";
import './Voley.css';

export default function Voley() {
  return (
    <div>
      <NavBrowser />
      <div className="container-voley">
        <div className="banner-container">
          <img className="bannerVoley" src={bannerVoley} alt="banner actividades" />
          <div className='container-text-voley'>
            <div className="text-container">
              <h2 className="title">¡Clases semanales! Más de 140 inscriptos.</h2>
              <p className="subtitle">
                Juveniles y mayores de 18 años. ¡Súmate a nuestra familia!
              </p>
            </div>
          </div>
          <img className="imageVoley" src={imgVoley} alt="voley player" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
