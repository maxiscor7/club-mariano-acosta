import NavBrowserBst from "../../components/NavBrowserBst"
import Footer from "../../components/Footer"
import taekwondopic from "../../assets/taekwondopic.jpg"
import logoTk from "../../assets/logo-tk.png"
import taekwondo1 from "../../assets/taekwondo1.jpg"

import tk1 from "../../assets/tk1.jpg"
import tk2 from "../../assets/tk2.jpg"
import tk3 from "../../assets/tk3.jpg"
import tk4 from "../../assets/tk4.jpg"
import tk5 from "../../assets/tk5.jpg"
import tk6 from "../../assets/tk6.jpg"
import tk7 from "../../assets/tk7.jpg"



import './Taekwondo.css'

export default function Taekwondo() {

    const images = [tk1, tk2, tk3, tk4, tk5, tk6, tk7];


    return (
        <div className="container-div-taekwondo">
            <NavBrowserBst />
            <div className="container-banner-taekwondo">
                <img className="banner-taek" src={taekwondopic} alt="banner taekondo" />
                <img className="logo-banner" src={logoTk} alt="logo taekwondo" />
            </div>
            <div className="container-taekwondopic-family">
                <img className="pic-taekwondo1" src={taekwondo1} alt="imagen equipo de taekwondo" />
                <div className="container-text-taekwondo">
                    <h1>Descubre la Experiencia Única en Nuestra Escuela de Taekwondo GARRA DE TIGRE</h1>
                    <p>Estamos comprometidos con la excelencia, la disciplina y el crecimiento personal. Nuestros instructores altamente calificados guiarán tu camino, ya sea que estés buscando mejorar tu condición física, aprender autodefensa o sumergirte en el competitivo mundo del taekwondo.</p>

                    <p>En 'Garra de Tigre', no solo encontrarás un lugar para entrenar, sino una comunidad que te apoyará en cada paso de tu viaje. Todos son bienvenidos, independientemente de la edad o nivel de habilidad. ¡Descubre el poder dentro de ti y únete a nosotros para vivir la emoción del taekwondo! ¡La familia 'Garra de Tigre' está lista para recibirte y ayudarte a alcanzar tus metas!</p>
                </div>
            </div>

            <div className="container-gallery-taekwondo-pic">
                {images.map((image, index) => (
                        <img
                            src={image}
                            alt={`imagen-${index + 1}`}
                            key={index}
                            style={{ width: '300px', height:'200px', objectFit: 'cover', margin: '20px', borderRadius: '10px' }}
                        />
                    
                ))}
            </div>

            <Footer />
        </div>
    )
}