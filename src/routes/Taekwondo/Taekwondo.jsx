import NavBrowserBst from "../../components/NavBrowserBst"
import Footer from "../../components/Footer"
import bannerTaekwondo from "../../assets/bannerTaekwondo.png"
import taekwondo1 from "../../assets/taekwondo1.jpg"





import './Taekwondo.css'

export default function Taekwondo() {

    return (
        <div className="container-div-seccionGenerica">
            <NavBrowserBst />
            <div className="container-banner-seccionGenerica">
                <img className="banner-seccionGenerica" src={bannerTaekwondo} alt="banner taekondo" />
                
            </div>
            <div className="container-seccionGenericaPic-family">
                <img className="pic-seccionGenerica1" src={taekwondo1} alt="imagen equipo de taekwondo" />
                <div className="container-text-seccionGenerica">
                    <h1>Descubre la Experiencia Única en Nuestra Escuela de Taekwondo GARRA DE TIGRE</h1>
                    <p>Estamos comprometidos con la excelencia, la disciplina y el crecimiento personal. Nuestros instructores altamente calificados guiarán tu camino, ya sea que estés buscando mejorar tu condición física, aprender autodefensa o sumergirte en el competitivo mundo del taekwondo.</p>

                    <p>En 'Garra de Tigre', no solo encontrarás un lugar para entrenar, sino una comunidad que te apoyará en cada paso de tu viaje. Todos son bienvenidos, independientemente de la edad o nivel de habilidad. ¡Descubre el poder dentro de ti y únete a nosotros para vivir la emoción del taekwondo! ¡La familia 'Garra de Tigre' está lista para recibirte y ayudarte a alcanzar tus metas!</p>
                </div>
            </div>

            

            <Footer />
        </div>
    )
}