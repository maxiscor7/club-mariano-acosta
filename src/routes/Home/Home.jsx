import NavBrowser from "../../components/NavBrowser";
import banner from "../../assets/banner.png"
import miniatura1 from "../../assets/miniatura1.jpeg"
import miniatura2 from "../../assets/miniatura2.jpeg"
import notiFut from "../../assets/noti-fut-inf.png"
import notiHock from "../../assets/noti-hock.png"
import notiMini from "../../assets/noti-mini.png"
import notiTae from "../../assets/noti-tae.png"
import './Home.css'

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

            <div className="big-container noticias">
                <div className="videos-tit">
                    <h1>{`Noticias >`} </h1>
                </div>
                <div className="container-noticias-home">
                    <div className="container-mini-noticia1 efectHov">
                        <img src={notiFut} alt="noticias" />
                    </div>
                    <div className="container-mini-noticia2 efectHov">
                        <img src={notiTae} alt="noticias" />
                    </div>
                    <div className="container-mini-noticia4 efectHov">
                        <img src={notiHock} alt="noticias" />
                    </div>
                    <div className="container-mini-noticia3 efectHov">
                        <img src={notiMini} alt="noticias" />
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
                            <h2>Raíces de Grandeza: Historia del Club Mariano Acosta</h2>
                            <p>Explora la rica historia del Club Mariano Acosta, desde sus inicios hasta convertirse en un símbolo comunitario. Un viaje lleno de pasión y logros que ha marcado nuestra identidad deportiva y social.</p>
                        </div>
                    </div>
                    <div className="miniatura">
                        <a href="https://www.youtube.com/watch?v=4tsN43DT5kc&t=3s" target="_blank" rel="noreferrer">
                            <img src={miniatura2} alt="miniatura video" />
                        </a>
                        <div className="container-text-miniatura">
                            <h2>Partido picante entre Mariano Acosta y La sub 21</h2>
                            <p>El pasado 9 febrero Mariano Acosta se enfrento contra La sub 21, el partido fue super apretado con un resultado de 5 a 4, saliendo como vencedor La sub 21. Mira todo el partido aca!</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}