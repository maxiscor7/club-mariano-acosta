import Footer from '../../components/Footer'
import patinPic from '../../assets/patinPic.jpeg'
import bannerPatin from '../../assets/bannerPatin.png'
import NavBrowserBst from '../../components/NavBrowserBst'

import './PatinArtistico.css'

export default function PatinArtistico() {
  return (
    <div className="container-div-seccionGenerica">
      <NavBrowserBst />
      <div className="container-banner-seccionGenerica">
        <img className="banner-seccionGenerica" src={bannerPatin} alt="banner ritmo urbano" />

      </div>
      <div className="container-seccionGenericaPic-family">
        <img className="pic-seccionGenerica1" src={patinPic} alt="pareja de rock" />
        <div className="container-text-seccionGenerica">
          <p>El patinaje artístico es un deporte que combina elementos técnicos con artísticos sobre patines de ejes.<br/> Se practica con el acompañamiento musical.<br/>En el club ofrecemos la enseñanza del deporte desde la escuela de patin artístico .<br />
            No sé necesita conocimientos previos  para realizarla, ya que contamos con niveles desde  inicial, intermedio y avanzados .<br/>El deporte se puede realizar de manera recreativa o competitiva.<br />
            Dentro del nivel competitivo participamos desde torneos amistosos, ligas, copas y Federación. <br/>La actividad se encuentra a cargo de las Técnicas Soraya Iseas, Sasha Cano. <br/>Si querés formar parte de esta gran familia comunícate al 1123094649 y recibirás toda la informacion .</p>
          <h1>¡Nos vemos en la pista!</h1>
        </div>

      </div>

      <Footer />
    </div>
  )
}
