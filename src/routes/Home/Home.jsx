import NavBrowser from "../../components/NavBrowser";
import banner from "../../assets/banner.png"
import hockey from "../../assets/hockey.jpg"
import futFem from "../../assets/futFem.png"
import juntos from "../../assets/juntos.jpg"
import cups from "../../assets/cups.jpeg"
import directivos from "../../assets/directivos.jpg"
import field from "../../assets/field.jpeg"
import taekwonHome from "../../assets/taekwonHome.jpg"

import './Home.css'
import CarouselSponsors from "../../components/CarouselSponsors";
import Footer from "../../components/Footer";

import { useTypewriter } from "react-simple-typewriter";
import { useState } from "react";

export default function Home() {

    const [finished, setFinished] = useState(false);
    const [text] = useTypewriter({
        words: ['VENI A PARTICIPAR DE TORNEOS, DISFRUTAR Y LLEVAR TU RENDIMIENTO A OTRO NIVEL'],
        loop: 1,
        typeSpeed: 60,
        onComplete: () => setFinished(true), // Callback cuando la animación está completa
    });

    return (
        <div className="container-home">
            <NavBrowser />
            <div className="conatiner-banner">
                <img className="banner-img" src={banner} alt="banner actividades" />
                <div className="container-text-banner-typeRighter">
                    <span className="span-seleccion">
                        {text}
                    </span>
                    
                </div>
            </div>
            <CarouselSponsors />
            <div className="container-noticias">
                <div className="noticias-tit">
                    <h1>{`Noticias >`} </h1>
                </div>
                <div className="container-cards">
                    <div className="card card1">
                        <img className="top" src={hockey} alt="Descripción de la imagen" />
                        <div className="card-content">
                            <h2>HOCKEY CLUB SOCIAL Y DEPORTIVO MARIANO ACOSTA</h2>
                            <p>"Venite y sumate" - "Planteles femeninos y masculinos"</p>
                            <p>
                                En febrero arrancamos los entrenamientos para la temporada 2024, todas las categorias 10ma, 9na, 8va, 7ma, 6ta, 5ta, primera division, mamis y Equipo masculino.</p>
                            <h2>¡ANOTATE AHORA!</h2>

                        </div>
                    </div>
                    <div className="card card2">
                        <img src={futFem} alt="Descripción de la imagen" />
                        <div className="card-content">
                            <h2>ABIERTA LA INSCRPCION FUTBOL FEMENINO +18</h2>
                            <p>⚽ ¿Qué esperas para unirte a nosotras y formar parte de esta experiencia única? ¡todos son bienvenidos!</p>
                            <p>
                                Comparte momentos emocionantes y vive la verdadera camaradería que solo el fútbol femenino puede ofrecer.</p>
                            <h2>¿Qué estas esperando?</h2>
                        </div>
                    </div>
                    <div className="card card3">
                        <div className="card-content">
                            <h2>Cierre Triunfal del Año</h2>
                            <p>Nuestras escuelitas despidieron el año así, en el polideportivo, juntando la alegría de los chicos, profesores, comité deportivo y comisión directiva 👏👏,hasta el año que viene 🏆🥂👍</p>
                        </div>
                        <img className="botom" src={juntos} alt="Descripción de la imagen" />
                    </div>
                    <div className="card card4">
                        <img src={taekwonHome} alt="Descripción de la imagen" />
                        <div className="card-content">
                            <h2>Título 4</h2>
                            <p>Subtítulo 4</p>
                        </div>
                    </div>
                    <div className="card card5">
                        <div className="card-content">
                            <h2>Título 5</h2>
                            <p>Subtítulo 5</p>
                        </div>
                        <img className="botom2direction" src={cups} alt="Descripción de la imagen" />
                    </div>
                    <div className="card card6">
                        <img src={directivos} alt="Descripción de la imagen" />
                        <div className="card-content">
                            <h2>Título 6</h2>
                            <p>Subtítulo 6</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}