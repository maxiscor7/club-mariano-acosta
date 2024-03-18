import Footer from '../../components/Footer';
import bannerHockey from "../../assets/bannerHockey.png";
import hockey from "../../assets/hockey.jpg";
import './Hockey.css';
import NavBrowserBst from '../../components/NavBrowserBst';

export default function Hockey() {
  return (
    <div className="container-div-seccionGenerica">
      <NavBrowserBst />
      <div className="container-banner-seccionGenerica">
        <img className="banner-seccionGenerica" src={bannerHockey} alt="banner hockey"/>
        
      </div>
      <div className="container-seccionGenericaPic-family">
        <img className="pic-seccionGenerica1" src={hockey} alt="equipo de voley" />
        <div className="container-text-seccionGenerica">
          <p>Una Actividad en desarrollo en la cual nuestra institución APUESTA MUCHISIMO, sabemos que la variedad en el Deporte es fundamental, por eso te ofrecemos que te sumes a Nuestro Hockey Club. Mariano Acosta. Grupos Infantiles Juveniles y Mayores discriminadas por Categorías, tres clases semanales, apuntamos a ingresar un nuevo torneo 2024, acompáñanos en esta nueva etapa.
          </p>
          <p>Profesores: Aylen Milagros Aquino y Ruben Alberto Abelenda </p>
          <p>Info al: 1131848212 y/o 1150375322 (Comité Deportivo), mándanos un Whatsapp a los números aportados para informarte de los cronograma de prácticas y todo lo que quieras saber. Te esperamos
          </p>

        </div>
      </div>
      <Footer />
    </div>
  )
}
