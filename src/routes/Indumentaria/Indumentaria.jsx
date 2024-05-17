import React from 'react'
import Footer from '../../components/Footer'
import NavBrowserBst from '../../components/NavBrowserBst'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import './Indumentaria.css'
import shopingBag from "../../assets/shopingBag.png"
import logoBoutique from "../../assets/boutiqueLogo.png"
import { NavLink } from 'react-router-dom';


export default function Indumentaria() {

  return (
    <div>
      <NavBrowserBst />
      <div className='big-container-sliderComponent'>
        <img src={logoBoutique} alt='logo boutique'/>
        <div className='container-sliderComponent'>
          <SliderComponent />
        </div>
      </div>
      <div className='container-talles'>
        <div className='container-talles-descripcion'>
          <p>Talles infantiles disponibles</p>
          <div className='container-talles-infantiles'>
            <div className='talle'>6</div>
            <div className='talle'>8</div>
            <div className='talle'>10</div>
            <div className='talle'>12</div>
            <div className='talle'>14</div>
            <div className='talle'>16</div>
            <div className='talle'>18</div>
          </div>
        </div>
        <div className='container-talles-descripcion'>
          <p>Talles adultos disponibles</p>
          <div className='container-talles-adultos'>
            <div className='talle'>S</div>
            <div className='talle'>M</div>
            <div className='talle'>L</div>
            <div className='talle'>XL</div>
            <div className='talle'>XXL</div>
            <div className='talle'>XXXL</div>
          </div>
        </div>
      </div>
      <div className='container-descriptionAndimage-boutique'>
        <img src={shopingBag} alt='bag-png' />
        <div className='container-description-boutique'>
          <p>Conoce nuestra <b>BOUTIQUE DEL DEPORTE</b> “Lugar donde exponemos nuestra novedades”, acércate y adquirí tu camiseta o conjunto deportivo <b>OFICIAL</b> del <b>C.S.D.M.A.</b> Aca tenemos lo que necesitas para identificarte como miembro de nuestra institución.</p>
          <ul>
            <li>Conjunto <b>OFICIAL</b> camiseta y short celeste y blanco que se utiliza para los eventos deportivos competencias o amistosos.</li>
            <li>Conjunto de entrenamiento, camiseta y short de color oscuro.</li>
            <li>Conjunto deportivo, campera y pantalón largo totalmente adaptable para la actividad física.</li>
            <li>Medias, accesorios y mucho mas.</li>
          </ul>
          <p>Acércate a nuestro local y observa lo que tenemos para vos. </p>
          <div className='container-navlink-boutique'>
            <div className='navlinkBoutique'>
              <NavLink style={{textDecoration: 'none', color: 'white'}} aria-current="page" to={"/contacto"}>¡Te esperamos!</NavLink>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
