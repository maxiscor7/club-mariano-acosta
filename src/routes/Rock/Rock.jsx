import Footer from '../../components/Footer'
import NavBrowserBst from '../../components/NavBrowserBst'
import rockBanner from '../../assets/rockBanner.png'
import rockPic from '../../assets/rockPic.jpeg'

import './Rock.css'

export default function Rock() {
  return (
    <div className="container-div-seccionGenerica">
      <NavBrowserBst />
      <div className="container-banner-seccionGenerica">
        <img className="banner-seccionGenerica" src={rockBanner} alt="banner ritmo urbano" />

      </div>
      <div className="container-seccionGenericaPic-family">
        <img className="pic-seccionGenerica1" src={rockPic} alt="pareja de rock" />
        <div className="container-text-seccionGenerica">
          <h1>¡Te esperamos para bailar al ritmo del rock&roll! 🎸</h1>
          <p>Ven y diviértete mientras mejoras tu estado de ánimo y flexibilidad. No pierdas la oportunidad de moverte al compás de la música.</p>

          <p>¡No te quedes sentado cuando suene el rock&roll!<br/>Acompáñanos y siente la energía.</p>
          <p>Para más información, contáctanos al 1134033955.<br/>Cesar Moreno</p>
          <h1>¡Nos vemos en la pista!</h1>
        </div>

      </div>

      <Footer />
    </div>
  )
}
