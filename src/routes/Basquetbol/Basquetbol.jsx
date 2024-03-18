import Footer from '../../components/Footer';
import bannerBasquet from "../../assets/bannerBasquet.png";
import basquetKids from "../../assets/basquetKids.jpg";
import NavBrowserBst from '../../components/NavBrowserBst';
import './Basquetbol.css';

export default function Basquetbol() {
  return (
    <div className="container-div-seccionGenerica">
      <NavBrowserBst />
      <div className="container-banner-seccionGenerica">
        <img className="banner-seccionGenerica" src={bannerBasquet} alt="banner basquetbol" />
        
      </div>
      <div className="container-seccionGenericaPic-family">
        <img className="pic-seccionGenerica1" src={basquetKids} alt="equipo de basquetbol" />
        <div className="container-text-seccionGenerica">
          <p>Esta es una de nuestras tantas Disciplinas, donde los Guerreros/as que se suman a este Actividad sabemos que tienen una Capacidad y Destreza distinta a muchos deportistas. Es una Actividad donde las clases son dictadas por profesores altamente Capacitados, con el acompañamiento, Coordinación y accesoramiento del cuerpo Deportivo del Club Unitarios de nuestra Localidad Vecina Marcos Paz, ya que todos sabemos que Unitario es una Institución reconocida por su gran labor, constancia y calidad deportiva respecto al BASQUET. 
          </p>
          <p>Profesor: Facundo Lopez</p>
          <p>Info al: 1131848212 y/o 1150375322 (Comité Deportivo), mándanos un Whatsapp a los números aportados para informarte de los cronograma de prácticas y todo lo que quieras saber. Te esperamos
          </p>

        </div>
      </div>
      <Footer />
    </div>
  )
}
