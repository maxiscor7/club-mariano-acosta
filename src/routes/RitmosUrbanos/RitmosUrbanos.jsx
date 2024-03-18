import Footer from "../../components/Footer"
import bannerRitmos from "../../assets/banner-ritmos.png"
import crew from "../../assets/crew.jpeg"

import './RitmosUrbanos.css'
import NavBrowserBst from "../../components/NavBrowserBst"


export default function RitmosUrbanos() {
  return (
    <div className="container-div-seccionGenerica">
      <NavBrowserBst />
      <div className="container-banner-seccionGenerica">
        <img className="banner-seccionGenerica" src={bannerRitmos} alt="banner ritmo urbano" />

      </div>
      <div className="container-seccionGenericaPic-family">
        <img className="pic-seccionGenerica1" src={crew} alt="equipo de ritmo urbano" />
        <div className="container-text-seccionGenerica">
          <h1>URBAN CREW STUDIO</h1>
          <p>Es un Studio de danza con más de 10 años de trayectoria
            que fomenta el crecimiento y la formación de alumnos
            de todas las edades en las siguientes disciplinas:
            Ritmos Urbanos, Reggaeton, Danza Jazz, Contemporáneo,
            Danzas Clásicas, entre otras. Dictamos además un Profesorado de Ritmos Urbanos.</p>

          <p>Nuestras categorías son: Baby’s, Infantil, Juvenil, Adulto y Mix.
            Tenemos grupos avanzados de competencia y grupos principiantes
            para aquellos que quieran empezar desde cero.
            Realizamos clases especiales, workshop y seminarios
            con profes y bailarines reconocidos.</p>
          <p>Somos un staff de profesores que trabaja de forma independiente
            bajo la mirada de nuestro fundador y director Alan Aveiro
            que se presentan a competencias nacionales e internacionales
            de todos los niveles junto a su grupo/crew de todas las disciplinas y categorías.
            Realizamos viajes a Mar del Plata y Córdoba
            entre otros y participamos de diversos eventos que vayan surgiendo.</p>
        </div>

      </div>

      <Footer />
    </div>
  )
}
