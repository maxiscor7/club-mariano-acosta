import React from 'react'
import Footer from '../../components/Footer'
import NavBrowserBst from '../../components/NavBrowserBst'
import boxeoImage from '../../assets/boxeoImage.jpeg'
import bannerBoxeo from '../../assets/bannerBoxeo.png'
import './Boxeo.css'

export default function Boxeo() {
  return (
    <div className="container-div-seccionGenerica">
      <NavBrowserBst />
      <div className="container-banner-seccionGenerica">
        <img className="banner-seccionGenerica" src={bannerBoxeo} alt="banner ritmo urbano" />

      </div>
      <div className="container-seccionGenericaPic-family">
        <img className="pic-seccionGenerica1" src={boxeoImage} alt="equipo de ritmo urbano" />
        <div className="container-text-seccionGenerica">
         
          <p>Nuestra escuela de boxeo crece día a día, con emocionantes proyectos en marcha para nuestros alumnos.</p>
          <p>Ofrecemos clases sin límite de edad, con entrenamientos adaptados a distintos niveles de experiencia y condición física.</p>
          <p>Nuestras prácticas se realizan los martes y viernes a las 18:00 hs, enfocadas en el desarrollo de habilidades técnicas, físicas y mentales. Además, fomentamos un ambiente de camaradería y apoyo mutuo, donde tanto entrenadores como compañeros se motivan a dar lo mejor de sí mismos. Si buscas una actividad que combine disciplina, fuerza y compañerismo, ¡el boxeo es para ti! Vení y sumate a nuestra familia boxística.</p>
          <p>¡Te esperamos en C.SyD.M.A!</p>
        </div>

      </div>

      <Footer />
    </div>
  )
}