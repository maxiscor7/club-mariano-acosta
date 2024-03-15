import Footer from "../../components/Footer";
import NavBrowserBst from "../../components/NavBrowserBst";
import MapaClub from "../../components/MapaClub";
import FormularioClub from "../../components/FormularioClub";
import './Contact.css'

export default function Contact() {

    return (
        <div className="big-container-contact">
            <NavBrowserBst />
            <div className="container-firstPart-of-contact">
                <div className="container-textLegend-contact">

                    <h1>Contactanos</h1>
                    <p>En nuestro club, estamos comprometidos con el bienestar y la diversión de nuestros miembros. Si estás interesado en unirte a nuestra comunidad deportiva o simplemente deseas obtener más información sobre las diversas actividades que ofrecemos</p>

                    <p><font color="white"><strong>¿Qué puedes esperar de nosotros?</strong></font></p>
                    <ul>
                        <li><strong>Variedad de Disciplinas:</strong> Ofrecemos una amplia gama de disciplinas para todos los niveles y edades.</li>
                        <li><strong>Eventos Emocionantes:</strong> Organizamos diferentes eventos durante todo el año, desde torneos deportivos hasta sesiones de entrenamiento especiales y eventos sociales.</li>
                        <li><strong>Alquiler de Espacios:</strong> ¿Necesitas un lugar para practicar con tu equipo o realizar una reunión especial? ¡Tenemos espacios disponibles para alquilar!</li>
                        <li><strong>Asesoramiento Personalizado:</strong> Nuestro equipo está aquí para ayudarte. Ya sea que necesites orientación sobre las diferentes disciplinas o información sobre cómo unirte al club, estamos disponibles para responder tus preguntas.</li>
                    </ul>

                    <p><font color="white"><strong>No dudes en llamarnos o completar el formulario a continuación para que nos contactemos contigo, o simplemente acercate, estaremos muy contentos de recibirte.</strong></font></p>
                </div>
                <div className="container-form">
                    <FormularioClub />
                </div>
            </div>
            <div className="lineUp-container-mapclub"></div>
            <div className='container-mapClub'>
                <MapaClub />
            </div>
            <Footer />
        </div>
    )
}