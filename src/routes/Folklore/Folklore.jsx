import React from 'react'
import Footer from '../../components/Footer'
import NavBrowserBst from '../../components/NavBrowserBst'
import FolklorePic from '../../assets/floklorePic.jpg'
import bannerFolklore from '../../assets/bannerFolklore.jpeg'
import './Folklore.css'

export default function Folklore() {
  return (
    <div className="container-div-seccionGenerica">
      <NavBrowserBst />
      <div className="container-banner-seccionGenerica">
        <img className="banner-seccionGenerica" src={bannerFolklore} alt="banner ritmo urbano" />

      </div>
      <div className="container-seccionGenericaPic-family">
        <img className="pic-seccionGenerica1" src={FolklorePic} alt="equipo de ritmo urbano" />
        <div className="container-text-seccionGenerica">
         
          <p>Marianenses Folk es un taller gratuito creado en el año 2020, para niños jóvenes y adultos de todas las edades con la intención de generar espacios que permitan a los alumnos conocer  el patrimonio cultural  y  apreciar nuestra identidad nacional. El sentido de pertenencia se desarrolla en los niños, en la medida en que conocen y valoran las características de su país, enriqueciendo en ellos, el fortalecimiento de la identidad cultural, para que así nuevas generaciones crezcan y se formen sobre la base de un entendimiento mayor de sus propias raíces.</p>

          <p>Se trabajan las danzas populares de todas las regiones del país, acunando y conservando su esencia y tradición, pero también creando y experimentando con las nuevas tendencias y fusiones tanto de música popular como de técnicas de danza.</p>
          <p>Los/as bailarines/as encuentran un espacio de formación y experimentación particular con un entrenamiento que los prepara desde cero y lo más importante es que es un espacio familiar para compartir y disfrutar.</p>
          <p>Cuenta con la dirección artística de la Prof. Melany Llanos y la asistencia de la Prof. Jennifer Robledo.</p>
        </div>

      </div>

      <Footer />
    </div>
  )
}
