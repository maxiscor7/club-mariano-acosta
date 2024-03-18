import Footer from '../../components/Footer';
import bannerVoley from "../../assets/bannerVoley.png";
import voleyPic from "../../assets/voleyPic.jpeg";
import './Voley.css';
import NavBrowserBst from '../../components/NavBrowserBst';

export default function Voley() {
  return (
    <div className="container-div-seccionGenerica">
      <NavBrowserBst />
      <div className="container-banner-seccionGenerica">
        <img className="banner-seccionGenerica" src={bannerVoley} alt="banner voley" />
        
      </div>
      <div className="container-seccionGenericaPic-family">
        <img className="pic-seccionGenerica1" src={voleyPic} alt="imagen equipo de voley" />
        <div className="container-text-seccionGenerica">
          <p>Las clases se desarrollan tanto en las instalaciones de nuestra Pista en el Club como en el Nexo Polideportivo Súmate a nuestra familia. Se vienen lindas experiencias para nuestros Jugadores/as, queremos que seas parte de todo esto.
          </p>
          <p>Profesor juveniles: Andy Javier schwindt</p>
          <p>Profesor mayores de 18: Ruben Alberto Abelenda</p>
          <p>Info al: 1131848212 y/o 1150375322 (Comité Deportivo), mándanos un Whatsapp a los números aportados para informarte de los cronograma de prácticas y todo lo que quieras saber. Te esperamos
          </p>

        </div>
      </div>
      <Footer />
    </div>
  );
}
