import NavBrowserBst from "../../components/NavBrowserBst";
import miniatura1 from "../../assets/miniatura1.jpeg"
import miniatura2 from "../../assets/miniatura2.jpeg"
import miniatura3 from "../../assets/miniatura3.png"
import noti1 from "../../assets/taeNoti.jpeg"
import noti2 from "../../assets/aniversario.jpeg"
import noti3 from "../../assets/futFem.jpeg"
import noti4 from "../../assets/Asamblea.jpeg"
import noti5 from "../../assets/basqNoti.jpg"
import noti6 from "../../assets/futInfNoti.jpg"
import logo from "../../assets/logo.png"
import SponsorSlider from "../../components/SponsorSlider";
import videBanner from '../../assets/videoBanner.mp4'

import './Home.css'

import Footer from "../../components/Footer";
import ChatBotMarianoAcosta from "../../components/ChatBotMarianoAcosta/ChatBotMarianoAcosta";
import { NavLink } from 'react-router-dom';




export default function Home() {



    return (
        <div className="container-home">
            <NavBrowserBst />
            <div className="conatiner-banner">
                <div className="video-banner">
                    <video autoPlay loop muted playsInline className="fullscreen-video">
                        <source src={videBanner} type="video/mp4" />
                        {/* Agrega más sources para formatos adicionales si es necesario */}
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div class="banner-sponsor1">
                <SponsorSlider />
            </div>

            <div className="big-container noticias">
                <div className="videos-tit">
                    <h1>{`Noticias >`} </h1>
                </div>
                <div className="container-noticias-home">
                    <div className="noti-secicion">
                        <NavLink to={'/aniversario'} style={{ textDecoration: 'none' }}>
                            <div className="noticia-bigone">
                                <div className="inside-notiBigone-container-pic">
                                    <img src={noti2} alt="competicion de taekwondo" />
                                    {/*<img id="logo-noticias" src={logo} alt="logo del club" />*/}
                                    <h1>78° Aniversario del CSDMA</h1>
                                </div>
                                <div className="inside-notiBigone-container-text">
                                    <div className="miniBigone-noti-container-text">
                                        <p>Enterate de todo lo que paso en el aniversario de CSDMA
                                            ACA!<br /> ...</p>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                        <div className="cont-insideContainer-bigone">

                            <NavLink to={'/asamblea'} style={{ textDecoration: 'none' }}>
                                <div className="noticia-smallones">
                                    <div className="inside-notiSmallone-container-pic">
                                        <img src={noti4} alt="equipo de hockey" />
                                        <img id="logo-noticias" src={logo} alt="logo del club" />
                                        <h1>Asamblea General Ordinaria</h1>
                                    </div>
                                    <div className="inside-notiSmallone-container-text">
                                        <div className="mini-noti-container-text">
                                            <p>Enterate de todo lo que paso en la asamblea de CSDMA
                                                ACA!<br /> ...</p>
                                        </div>

                                    </div>
                                </div>
                            </NavLink>

                            <NavLink to={'/futbol-femenino'} style={{ textDecoration: 'none' }}>
                                <div className="noticia-smallones">

                                    <div className="inside-notiSmallone-container-pic">
                                        <img src={noti3} alt="equipo de futbol femenino" />
                                        <img id="logo-noticias" src={logo} alt="logo del club" />
                                        <h1>FUTBOL FEMENINO</h1>
                                    </div>
                                    <div className="inside-notiSmallone-container-text">
                                        <div className="mini-noti-container-text">
                                            <h4>¡INSCRIPCIONES ABIERTAS!</h4>
                                            <p>Planteles femeninos y masculinos.</p>
                                        </div>

                                    </div>
                                </div>
                            </NavLink>

                        </div>
                    </div>
                    <div className="noti-secicion">

                        <NavLink to={'/taekwondo'} style={{ textDecoration: 'none' }}>
                            <div className="noticia-smallones">
                                <div className="inside-notiSmallone-container-pic">
                                    <img src={noti1} alt="cierre de año en polideportivo" />
                                    <img id="logo-noticias" src={logo} alt="logo del club" />
                                    <h1>TAEKWONDO</h1>

                                </div>
                                <div className="inside-notiSmallone-container-text">
                                    <div className="mini-noti-container-text">
                                        <p>Veni a entrenar, divertirte y competir.
                                            <br />De lunes a viernes 19:30 a 21 hs.</p></div>
                                </div>

                            </div>
                        </NavLink>

                        <NavLink to={'/basquetbol'} style={{ textDecoration: 'none' }}>
                            <div className="noticia-smallones">
                                <div className="inside-notiSmallone-container-pic">
                                    <img src={noti5} alt="equipo de futbol femenino" />
                                    <img id="logo-noticias" src={logo} alt="logo del club" />
                                    <h1>BASQUET</h1>

                                </div>
                                <div className="inside-notiSmallone-container-text">
                                    <div className="mini-noti-container-text">
                                        <p>Así disfrutamos del amistoso femenino de básquet.
                                            <br />¿Que esperas para sumarte?</p>
                                    </div>
                                </div>
                            </div>
                        </NavLink>

                        <NavLink to={'/futbol-masculino'} style={{ textDecoration: 'none' }}>
                            <div className="noticia-smallones">
                                <div className="inside-notiSmallone-container-pic">
                                    <img src={noti6} alt="equipo de futbol femenino" />
                                    <img id="logo-noticias" src={logo} alt="logo del club" />
                                    <h1>FUTBOL INFANTIL</h1>

                                </div>
                                <div className="inside-notiSmallone-container-text">
                                    <div className="mini-noti-container-text">
                                        <p>Empieza el torneo 2024.
                                            <br />Ya somos mas de 160 alumnos.</p>
                                        <h4>¡ANOTATE!</h4>
                                    </div>
                                </div>
                            </div>
                        </NavLink>

                    </div>
                </div>
            </div>
            <div className="container-videos-home">
                <div className="videos-tit">
                    <h1>{`Videos >`} </h1>
                </div>
                <div className="conatiner-miniaturas-videos">
                <div className="miniatura">
                        <a href="https://www.youtube.com/watch?v=4tsN43DT5kc&t=3s" target="_blank" rel="noreferrer">
                            <img src={miniatura3} alt="miniatura video" />
                        </a>
                        <div className="container-text-miniatura">
                            <h1>Disfrutando de un día con actividades recreativas.</h1>
                            <p>Nuestro club social y deportivo Mariano Acosta , en su 78* aniversario , lo que será un cierre de ciclo 2024 , como se lo merecen , a lo grande .</p>
                        </div>
                    </div>
                    <div className="miniatura">
                        <a href="https://www.youtube.com/shorts/RAxnasxB4kQ" target="_blank" rel="noreferrer">
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