import Footer from "../../components/Footer";
import NavBrowserBst from "../../components/NavBrowserBst";
import './CierreCiclo.css'


const CierreCiclo = () => {
  return (
    <div className="big-container-contact">
            <NavBrowserBst />
            <div className="container-firstPart-of-contact">
                <div className="container-textLegend-contact">

                    <h1>Cierre de ciclo 2024</h1>
                    <h2><font color="#0d6efd">FORMULARIO DE INSCRIPCION CSDMA</font></h2>
                    <br/>
                    <p>Con el fin de organizar y celebrar el cierre de ciclo del año 2024, desde el CSDMA abrimos la inscripción para las niñas, niños y adolescentes y sus familiares que desean participar de un momento inolvidable en la vida de todos nosotros.</p>
                    <p>Estar, compartir y disfrutar entre amigos, compañeros, profesores y familiares luego de un año cargado de muchas experiencias y emociones.</p>
                    <p>En esta oportunidad, el cierre de ciclo lo celebraremos en el predio Rancho Texco ubicado en la localidad de Tristán Suárez, partido de Ezeiza, provincia de Buenos Aires.</p>

                    <p><font color="white"><strong>Desde el CSDMA programamos un encuentro inolvidable de jornada completa que incluye:</strong></font></p>
                    <ul>
                        <li>Salida desde la sede social del CSDMA.</li>
                        <li>Viaje de ida y vuelta.</li>
                        <li>Desayuno/Almuerzo/Merienda.</li>
                        <li>Actividades recreativas y deportivas para todas las edades (socios, familiares y acompañantes).</li>
                        <li>Coordinación a cargo de los Profesores del CSDMA y miembros de Comisión Directiva.</li>
                        <li>Granja educativa.</li>
                        <li>Pileta y deportes.</li>
                        <li>Entrega de premios, distinciones y trofeos.</li>
                    </ul>

                    <p><font color="white"><strong>Te esperamos en las reuniones informativas a cargo del Comité de Deportes del CSDMA.</strong></font></p>
                    <p>Valor de la reserva $5.000 por persona (Precio total de la jornada sujeto a modificaciones y situación económica del país).</p>
                    <div className="container-button-formulario-cierreDeCiclo">
                    <h2><font color="#ffffff">¡Completa el formulario Aca abajo!</font></h2>
                        <div className="button-inside-cierreDeCiclo">
                            <a href="https://forms.gle/tKgyDGRSW7nqQJNq5" target='_blank' rel="noreferrer" >¡Click Aqui!</a>
                        </div>
                    </div>
                </div>
                
            </div>
            
            
            <Footer />
        </div>
  )
}

export default CierreCiclo