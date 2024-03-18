import Footer from '../../components/Footer';
import NavBrowserBst from '../../components/NavBrowserBst';
import kickBoxingPic from "../../assets/kickBoxingPic.jpeg";
import bannerKickBoxing from "../../assets/bannerKickBoxing.jpeg";

export default function KickBoxing() {
  return (
    <div className="container-div-seccionGenerica">
      <NavBrowserBst />
      <div className="container-banner-seccionGenerica">
        <img className="banner-seccionGenerica" src={bannerKickBoxing} alt="banner ritmo urbano" />

      </div>
      <div className="container-seccionGenericaPic-family">
        <img className="pic-seccionGenerica1" src={kickBoxingPic} alt="equipo de ritmo urbano" />
        <div className="container-text-seccionGenerica">
          <h1>Somos TEAM BRANDAN</h1>
          <p>Una academia de kick boxing competitivo y recreativo. Pertenecemos a la escuela del maestro Bruno Aldo Ghilardi. El objetivo de la escuela es preparar a los chicos fisica y mentalmente para este deporte de contacto. Y que adopten el deporte como un estilo de vida.</p>

          <p>Somos una academia competitiva y tambien damos la posibilidad de rendir exámenes de cinturones, para ir superandose y creciendo en este deporte. Hasta algun dia con mucho esfuerzo y dedicacion llegar a ser profesor de la escuela</p>
          <p>Info al: 1158159515</p>
        </div>

      </div>

      <Footer />
    </div>
  )
}
