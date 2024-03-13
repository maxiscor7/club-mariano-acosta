import React from 'react'
import Footer from '../../components/Footer'
import socioPic from '../../assets/socioPic.png'
import NavBrowserBst from '../../components/NavBrowserBst'
import './Socios.css'

export default function Socios() {
  return (
    <div style={{backgroundColor: "#1C3168"}}>
      <NavBrowserBst />
      <div className='big-container-socios'>
        <div className='container-socios'>
          <img src={socioPic} alt='' />
          <div className='container-text-socios'>
            <h1>¡Asociate!</h1>
            <br />
            <h2>Veni a disfrutar en familia y obtene importantes beneficios.</h2>
          </div>
        </div>
        <div className='linea-divisora-socios'></div>
        <div className='last-part-bigContainer-socios'>

          <div className='last-part-socios'>
            <h1>Te contamos como podes asociarte</h1>
            <p>En principio podes acercarte a nuestra sede ubicada en Cnel. Salvadores y Crisalide Ciudad de Mariano Acosta, Merlo a 20 Mts de la Rotonda de Villa Posse, anunciándote en nuestra secretaria donde allí solicitaras poder asociarte al CSDMA.</p>
            <h4>Días y horario de atención:</h4>
            <p>Lunes y Jueves de 17:00 a 21:00 hs</p>
            <p>Martes, Miércoles y Viernes de 17:00 a 20:00 hs</p>
            <p>Teléfono: (0220) 499-8123</p>
            <ul>
              <li>Deberás llenar una planilla con datos filiatorios Nombre Completo, DNI, Ocupación, Dirección, Correo electrónico y Teléfono de contacto</li>
              <li>Una vez abonado el pago mensual se te hará entrega de un Carnet, donde en el frente figurara tu Apellido y Nombre fecha de alta y numero de socio, al reverso figurará tu firma, la del presidente y secretario de esta institución</li>
              <li>Ser socio del Club Social y Deportivo Mariano Acosta, te habilita a poder realizar cualquiera de las actividades que se desarrollan en nuestra sede como en el nexo Polideportivo ubicado en Bossini y Copa Cabana.</li>
              <li>Beneficios en las compras mensuales en distintos Negocios de la Zona los cuales verán reflejados e informados en nuestra Pagina Web</li>
              <li>Tendrás beneficios en alquileres de espacios de nuestras instalaciones, previo a una antigüedad que se te informara en secretaria.</li>
              <li>integraras muchas experiencias y vivencias con grupos familiares, acompañando a nuestros alumnos en sus diversas travesías deportivas. El crecimiento y compañerismo son factores que siempre están presentes en nuestra Familia.</li>
            </ul>
            <h4>¡SUMATE!</h4>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
