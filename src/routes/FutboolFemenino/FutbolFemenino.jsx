import Footer from '../../components/Footer';
import bannerFutFem from "../../assets/bannerFutFem.png";
import futFem from "../../assets/futFem.jpeg";
import './FutbolFemenino.css';
import NavBrowserBst from '../../components/NavBrowserBst';

export default function FutbolFemenino() {
  return (
    <div className="container-div-seccionGenerica">
    <NavBrowserBst />
    <div className="container-banner-seccionGenerica">
      <img className="banner-seccionGenerica" src={bannerFutFem} alt="banner Futbol Femenino" />
      
    </div>
    <div className="container-seccionGenericaPic-family">
      <img className="pic-seccionGenerica1" src={futFem} alt="equipo de Futbol Femenino" />
      <div className="container-text-seccionGenerica">
        <p>Ellas también se sumaron a nuestra familia, ya hace tiempo que se entrenan y de esta manera  compiten, defendiendo sana y deportivamente a esta Institución. Dia a dia demuestran como van creciendo como grupo, poniéndose a punto de cara al inicio de la Competencia ciclo 2024. Venite y acompáñanos a esta travesía deportiva haciendo lo que te gusta. Jugando a la pelota. Las esperamos INSCRIPCIONES ABIERTAS para infantiles, juveniles y mayores
        </p>
        <p>Profesores: Micaela Ines Montagna y Nestor Figueroa</p>
        <p>Las practicas se desarrollan en nuestro nexo Polideportivo.</p>
        <p>Info al: 1131848212 y/o 1150375322 (Comité Deportivo), mándanos un Whatsapp a los números aportados para informarte de los cronograma de prácticas y todo lo que quieras saber. Te esperamos
        </p>

      </div>
    </div>
    <Footer />
  </div>
  )
}
