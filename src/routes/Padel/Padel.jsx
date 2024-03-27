import Footer from '../../components/Footer'
import NavBrowserBst from '../../components/NavBrowserBst'
import imagenPadel from "../../assets/imagenPadel.png";
import bannerPadel from "../../assets/bannerPadel.png";
import './Padel.css'

export default function Padel() {
  return (
    <div className="container-div-seccionGenerica">
      <NavBrowserBst />
      <div className="container-banner-seccionGenerica">
        <img className="banner-seccionGenerica" src={bannerPadel} alt="banner ritmo urbano" />

      </div>
      <div className="container-seccionGenericaPic-family">
        <img className="pic-seccionGenerica1" src={imagenPadel} alt="equipo de ritmo urbano" />
        <div className="container-text-seccionGenericaPadel">
          <p>Es sabido que los socios de nuestra institución y vecinos de la ciudad de Mariano Acosta tienen una vocación especial por la cancha paleta.</p>
          <p>El pádel o paddle es un deporte que se juega en parejas mediante la utilización de tres elementos fundamentales: la pelota de tenis, la paleta o pala y el campo de juego o pista. El juego consiste en lanzar la pelota al campo contrario por encima de una red mediante un golpe de paleta, con la posibilidad de rebotar la pelota en las paredes o cristales que rodean al campo de juego.</p>
          <p>El CSDMA cuenta con dos canchas de padle ubicadas en la calle Empedrado esquina Coronel Salvadores, abiertas para los socios de la institución y el público en general.
            En nuestras canchas, a cargo del equipo Padle Punto de Oro, podrás jugar o practicar junto con tus amigos y familiares este maravilloso deporte, como así también, tomar clases individuales o grupales con profesores de alta calidad y formación humana y profesional.</p>
          <p>Para más información y reservas, comunicate con nosotros al 11 5155-5822.
            ¡Sumate a nuestro equipo de Padle Punto de Oro y sé parte del CSDMA! ¡El CLUB de la familia! ¡El CLUB de la ciudad de Mariano Acosta!</p>
          <h4>¡Te esperamos!
          </h4>
        </div>

      </div>

      <Footer />
    </div>
  )
}
