import NavBrowserBst from "../../components/NavBrowserBst";
import banner from "../../assets/banner.png"
import miniatura1 from "../../assets/miniatura1.jpeg"
import miniatura2 from "../../assets/miniatura2.jpeg"
import noti1 from "../../assets/taeNoti.jpeg"
import noti2 from "../../assets/hockey.jpg"
import noti3 from "../../assets/futFem.jpeg"
import noti4 from "../../assets/cierreA.jpg"
import noti5 from "../../assets/basqNoti.jpg"
import noti6 from "../../assets/futInfNoti.jpg"
import logo from "../../assets/logo.png"

import './Home.css'

import Footer from "../../components/Footer";

import { useTypewriter } from "react-simple-typewriter";
import { useState } from "react";
import { NavLink } from "react-router-dom";

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
            <NavBrowserBst />
            <div className="conatiner-banner">
                <img className="banner-img" src={banner} alt="banner actividades" />
                <div className="container-text-banner-typeRighter">
                    <span className="span-seleccion">
                        {text}
                    </span>

                </div>
            </div>

            <div className="big-container noticias">
                <div className="videos-tit">
                    <h1>{`Noticias >`} </h1>
                </div>
                <div className="container-noticias-home">
                    <div className="noti-secicion">
                        <div className="noticia-bigone">
                            <div className="inside-notiBigone-container-pic">
                                <img src={noti1} alt="competicion de taekwondo" />
                                <img id="logo-noticias" src={logo} alt="logo del club" />
                                <h1>TAEKWONDO</h1>
                            </div>
                            <div className="inside-notiBigone-container-text">

                            </div>
                        </div>
                        <div className="cont-insideContainer-bigone">
                            <div className="noticia-smallones">
                                <div className="inside-notiSmallone-container-pic">
                                    <img src={noti2} alt="equipo de hockey" />
                                    <img id="logo-noticias" src={logo} alt="logo del club" />
                                </div>
                                <div className="inside-notiSmallone-container-text">

                                </div>
                            </div>
                            <div className="noticia-smallones">
                                <div className="inside-notiSmallone-container-pic">
                                    <img src={noti3} alt="equipo de futbol femenino" />
                                    <img id="logo-noticias" src={logo} alt="logo del club" />

                                </div>
                                <div className="inside-notiSmallone-container-text">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="noti-secicion">
                        <div className="noticia-smallones">
                            <div className="inside-notiSmallone-container-pic">
                                <img src={noti4} alt="cierre de año en polideportivo" />
                                <img id="logo-noticias" src={logo} alt="logo del club" />

                            </div>
                            <div className="inside-notiSmallone-container-text">

                            </div>
                        </div>
                        <div className="noticia-smallones">
                            <div className="inside-notiSmallone-container-pic">
                                <img src={noti5} alt="equipo de futbol femenino" />
                                <img id="logo-noticias" src={logo} alt="logo del club" />

                            </div>
                            <div className="inside-notiSmallone-container-text">

                            </div>
                        </div>
                        <div className="noticia-smallones">
                            <div className="inside-notiSmallone-container-pic">
                                <img src={noti6} alt="equipo de futbol femenino" />
                                <img id="logo-noticias" src={logo} alt="logo del club" />

                            </div>
                            <div className="inside-notiSmallone-container-text">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-videos-home">
                <div className="videos-tit">
                    <h1>{`Videos >`} </h1>
                </div>
                <div className="conatiner-miniaturas-videos">
                    <div className="miniatura">
                        <a href="https://www.youtube.com/watch?v=yNYJiepC0R4" target="_blank" rel="noreferrer">
                            <img src={miniatura1} alt="miniatura video" />
                        </a>
                        <div className="container-text-miniatura">
                            <h1>Raíces de Grandeza: Historia del Club Mariano Acosta</h1>
                            <p>Explora la rica historia del Club Mariano Acosta, desde sus inicios hasta convertirse en un símbolo comunitario. Un viaje lleno de pasión y logros que ha marcado nuestra identidad deportiva y social.</p>
                        </div>
                    </div>
                    <div className="miniatura">
                        <a href="https://www.youtube.com/watch?v=4tsN43DT5kc&t=3s" target="_blank" rel="noreferrer">
                            <img src={miniatura2} alt="miniatura video" />
                        </a>
                        <div className="container-text-miniatura">
                            <h1>Partido picante entre Mariano Acosta y La sub 21</h1>
                            <p>El pasado 9 febrero Mariano Acosta se enfrento contra La sub 21, el partido fue super apretado con un resultado de 5 a 4, saliendo como vencedor La sub 21. Mira todo el partido aca!</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}