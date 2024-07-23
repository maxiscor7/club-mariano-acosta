import { NavLink } from 'react-router-dom';
import './NavBrowserBst.css';
import logo from "../assets/logo.png";
import insta from "../assets/insta.png";
import face from "../assets/face.png";


export default function NavBrowserBst() {

    return (
        <div className='container-all-nabvar'>
            <div className='container-logo'>
                <a href='https://club-mariano-acosta.vercel.app/'><img src={logo} alt='logo club social y deportivo mariano moreno' /></a>
                <div className='container-tit'>
                    <h2>Club Social y Deportivo</h2>
                    <h1>MARIANO ACOSTA</h1>
                </div>
            </div>
            <div className='container-social-media'>
                <p>Seguinos:</p>
                <a href='https://www.instagram.com/club.mariano.acosta/' target='_blank' rel="noreferrer"><img src={insta} alt=''/></a>
                <a href='https://www.facebook.com/profile.php?id=61556710889445' target='_blank' rel="noreferrer"><img src={face} alt=''/></a>
            </div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary py-0 text-center" >
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse container-links-navbar" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to={"/"}>Inicio</NavLink>
                            </li>
                            {/*<li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    El club
                                </a>
                                <ul className="dropdown-menu text-center">
                                    <NavLink className="dropdown-item" aria-current="page" to={"/historia"}>Historia del CSDMA</NavLink>
                                </ul>
                            </li> !!!! esta parte no se si va a continuar, si no continua borrarla definitivamente   !!!! */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sedes
                                </a>
                                <ul className="dropdown-menu text-center">
                                    <li>
                                        <NavLink className="dropdown-item subrrallado" aria-current="page" to={"/sede-social"}>Sede social</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item" aria-current="page" to={"/anexo-polideportivo"}>Anexo polideportivo Mariano Acosta</NavLink>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown ">
                                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Disciplinas
                                </a>
                                <ul className="dropdown-menu text-center">
                                    <li><NavLink className="dropdown-item subrrallado" aria-current="page" to={"/basquetbol"}>Basquetbol</NavLink></li>
                                    <li><NavLink className="dropdown-item subrrallado" aria-current="page" to={"/boxeo"}>Boxeo</NavLink></li>
                                    <li><NavLink className="dropdown-item subrrallado" aria-current="page" to={"/folklore"}>Folklore</NavLink></li>
                                    <li><NavLink className="dropdown-item subrrallado" aria-current="page" to={"/futbol-femenino"}>Futbol Femenino </NavLink></li>
                                    <li><NavLink className="dropdown-item subrrallado" aria-current="page" to={"/futbol-masculino"}>Futbol Masculino</NavLink></li>
                                    <li><NavLink className="dropdown-item subrrallado" aria-current="page" to={"/futbol-primera"}>Futbol Primera</NavLink></li>
                                    <li><NavLink className="dropdown-item subrrallado" aria-current="page" to={"/hockey"}>Hockey</NavLink></li>
                                    <li><NavLink className="dropdown-item subrrallado" aria-current="page" to={"/kick-boxing"}>Kick Boxing</NavLink></li>
                                    <li><NavLink className="dropdown-item subrrallado" aria-current="page" to={"/padel"}>Padel</NavLink></li>
                                    <li><NavLink className="dropdown-item subrrallado" aria-current="page" to={"/partin-artistico"}>Partin Artistico</NavLink></li>
                                    <li><NavLink className="dropdown-item subrrallado" aria-current="page" to={"/rock"}>Rock</NavLink></li>
                                    <li><NavLink className="dropdown-item subrrallado" aria-current="page" to={"/taekwondo"}>Taekwondo</NavLink></li>
                                    <li><NavLink className="dropdown-item subrrallado" aria-current="page" to={"/voley"}>Voley</NavLink></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Socios
                                </a>
                                <ul className="dropdown-menu text-center">
                                    <li>
                                        <NavLink className="dropdown-item subrrallado" aria-current="page" to={"/socios"}>Como asociarse</NavLink>
                                        <NavLink className="dropdown-item subrrallado" aria-current="page" to={"/socios"}>Beneficios para Socios</NavLink>
                                        <NavLink className="dropdown-item" aria-current="page" to={"/socios"}>Cierre de ciclo 2024</NavLink>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Indumentaria oficial
                                </a>
                                <ul className="dropdown-menu text-center">
                                    <li>
                                        <NavLink className="dropdown-item" aria-current="page" to={"/indumentaria"}>La boutique del CSDMA</NavLink>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <NavLink to={"/contacto"} className="nav-link">Contacto</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )

}