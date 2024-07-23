import React from 'react'
import Footer from '../../components/Footer'
import NavBrowserBst from '../../components/NavBrowserBst'
import aniversario from '../../assets/aniversario.jpeg';
import "./Aniversario.css";

const Aniversario = () => {
  return (
    <div className="container-div-seccionGenerica">
      <NavBrowserBst />

      <div className="container-rutaseccionInfo">

        <h1>78° Aniversario del CSDMA</h1>
        <img className="pic-rutaseccionInfo" src={aniversario} alt="asamblea" />

        <div className="container-text-rutaseccionInfo">
          <label>El lunes 8 de julio de 2024, a partir de las 21 horas, celebramos el 78 cumpleaños de nuestro querido CSDMA junto a más de 230 socios, vecinos de la ciudad e invitados que se acercaron a pasar un momento de alegría y en familia en nuestra Sede Social.</label>
          <label>El evento estuvo organizado y dirigido por los miembros de la Comisión Directiva, destacando la participación especial de Alejandra N. Sosa y Horacio N. Buzetti. Asimismo, estuvimos acompañados y asistidos por Eventos Aliz con el servicio de mesas, por segundo año consecutivo.</label>
          <label>Entre los invitados, contamos con la presencia de las autoridades de la Subsecretaría de Entidades Intermedias de la Municipalidad de Merlo, Rubén Arias y Juan Manuel Ortíz; el Delegado de la ciudad de Mariano Acosta, Gustavo Ibarra; el cura parroco de la Iglesias Nuestra Sra. de Lourdes, Fernando Lobos, y miembros de la Sociedad Italiana y Portugesa de nuestra ciudad.</label>
          <label>Luego de cantar el Feliz Cumpleaños a nuestro querido CSDMA, aprovechamos la oportunidad para homenajear y reconocer la participación de los señores socios: Luis Arata, Cristián Bossini, Ricardo Diez, Julio Laciar y José Tomás Molina, quienes tras cumplir 25 años consecutivos e ininterrumpidos de asociados a nuestra Institución fueron galardonas con la categoría de Socios Vitalicios. En reconocimiento a la participación y presencia, nuestro presidente, Miguel A. Marchese, les hizo entrega del carnet de socios vitalicios y de un cuadro conmemorativo.</label>
          <label>Durante el festejo, también aprovechamos la ocasión para homenajear al ex presidente de nuestra Institución, el Sr. Carlos Delvito, a quien se le hizo entrega de un cuadro conmemorativo en reconocimiento a su trayectoria, participación y presencia en nuestro querido CSDMA.</label>
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default Aniversario