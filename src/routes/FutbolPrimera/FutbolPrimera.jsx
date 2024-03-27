import Footer from '../../components/Footer';
import bannerFutPri from "../../assets/bannerFutbolPri.png";
import csdma from "../../assets/CSDMA.jpeg";
import './FutbolPrimera.css';
import NavBrowserBst from '../../components/NavBrowserBst';

export default function FutbolPrimera() {
  return (
    <div className="container-div-seccionGenerica">
      <NavBrowserBst />
      <div className="container-banner-seccionGenerica">
        <img className="banner-seccionGenerica" src={bannerFutPri} alt="banner Futbol Femenino" />

      </div>
      <div className="container-seccionGenericaPic-family">
        <img className="pic-seccionGenerica1" src={csdma} alt="equipo de Futbol Femenino" />
        <div className="container-text-seccionFutbolPrimera">
          <h1>CSDMA clase 1972</h1>
          <p>De izquierda a derecha, arriba: Marcelo Curti, Fernando Ruzzi, Waldo Fabián Agüero (arquero), Diego Zabala, Alejandro Fusto, Walter Russo (capitán). Abajo: Andrés Ferreyra, Fabián Rodríguez, Carlos Mendoza, Héctor Ruíz y Leo Figueroa.</p>

          <p> Dirección Técnica: <br/>
            Anacleto Aquino (buzo marrón).
            Juan González (campera Azul)</p>

          <p>Desde su nacimiento en 1946, el CSDMA adquirió un gran prestigio gracias a la destreza y habilidad que caracterizaba a sus jugadores de fútbol.
            Los clásicos de la ciudad eran protagonizados por el CSDMA frente al Club Santa Isabel (barrio Santa Isabel) y el Club Social y Deportivo Resurgimiento (actual Escuela Técnica N° 2 de Mariano Acosta).Cada encuentro estaba marcado por el aliento, la habilidad y la fuerza de los jugadores que formaban parte del seleccionado del CSDMA.
            Propio de su tradición futbolera y haciendo honor al prestigio que la institución supo ganar desde sus origines, la primera división de fútbol 5 del CSDMA cuenta con los mejores jugadores que, día tras día, engrandecen la gloria del club en la Liga FIA.</p>
            <p>¡Sumate a esta familia y sé parte de la historia futbolera del CSDMA! ¡El CLUB de la familia! ¡El CLUB de la ciudad de Mariano Acosta!</p>
            <h4>¡Te esperamos!</h4>

        </div>
      </div>
      <Footer />
    </div>
  )
}
