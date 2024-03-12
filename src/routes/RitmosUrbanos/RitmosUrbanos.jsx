import Footer from "../../components/Footer"
import bannerRitmos from "../../assets/banner-ritmos.png"

import crew from "../../assets/crew.jpeg"
import crew2 from "../../assets/crew2.jpeg"

import './RitmosUrbanos.css'
import NavBrowserBst from "../../components/NavBrowserBst"


export default function RitmosUrbanos() {
  return (
    <div className="container-div-ritmo">
      <NavBrowserBst />
      <div className="container-banner-ritmo">
        <img className="banner-ritm" src={bannerRitmos} alt="banner ritmo urbano" />

      </div>
      <div className="container-ritmopic-family">
        <img className="pic-ritmo1" src={crew} alt="equipo de ritmo urbano" />
        <div className="container-text-ritmo">
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

      <div className="container-ritmopic-family">
        <img className="pic-ritmo1" src={crew2} alt="equipo de ritmo urbano" />
        <div className="container-text-ritmo2">
            <h1>Fuimos a competencias en lugares como:</h1>
            <p>Luna Park Stadium, Gran Rex, participamos de la apertura del Bailando 2023 acompañando a la banda “La T y la M”, tenemos un MegaGrupo Juvenil que recibe el nombre de “KINGS CREW”
            que es un entidad creada para representar
            a Mariano Acosta en el Torneo Internacional de Reggaeton (TIR)
            quedando posicionados a mitad de tabla, clasificando con 82,05
            puntos para el competir y defender el título para nuestro país.</p>
            <p>Para ser parte del Studio
            adquieri más información a través de nuestro WhatsApp 11 2589-1437 y  nuestras redes sociales:</p>
            <p>Facebook: Urban Crew, Instagram: @urbancrew.21 - @_kingss.crew, YouTube: Alan Aveiro, TikTok: @.urban.crew</p>
            
        </div>

      </div>
      <Footer />
    </div>
  )
}
