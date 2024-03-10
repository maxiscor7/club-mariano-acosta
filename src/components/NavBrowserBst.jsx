import { NavLink } from 'react-router-dom';
import './NavBrowserBst.css';
import logo from "../assets/logo.png";


export default function NavBrowserBst() {

    return (
        <div className='container-all-nabvar'>
            <div className='container-logo'>
                <img src={logo} alt='logo club social y deportivo mariano moreno' />
                <div className='container-tit'>
                    <h2>Club Social y Deportivo</h2>
                    <h1>MARIANO ACOSTA</h1>
                </div>
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
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    El club
                                </a>
                                <ul className="dropdown-menu text-center">
                                    <NavLink className="dropdown-item" aria-current="page" to={"/historia"}>Historia del CSDMA</NavLink>
                                </ul>
                            </li>
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
                                    <li><NavLink className="dropdown-item subrrallado" aria-current="page" to={"/taekwondo"}>Taekwondo</NavLink></li>
                                    <li><NavLink className="dropdown-item subrrallado" aria-current="page" to={"/ritmos-urbanos"}>Ritmos Urbanos</NavLink></li>
                                    <li><NavLink className="dropdown-item subrrallado" aria-current="page" to={"/hockey"}>Hockey</NavLink></li>
                                    <li><NavLink className="dropdown-item subrrallado" aria-current="page" to={"/futbol-femenino"}>Futbol Femenino </NavLink></li>
                                    <li><NavLink className="dropdown-item subrrallado" aria-current="page" to={"/reggaeton-infantil"}>Reggaeton Infantil</NavLink></li>
                                    <li><NavLink className="dropdown-item subrrallado" aria-current="page" to={"/futbol-masculino"}>Futbol Masculino</NavLink></li>
                                    <li><NavLink className="dropdown-item subrrallado" aria-current="page" to={"/basquetbol"}>Basquetbol</NavLink></li>
                                    <li><NavLink className="dropdown-item subrrallado" aria-current="page" to={"/voley"}>Voley</NavLink></li>
                                    <li><NavLink className="dropdown-item subrrallado" aria-current="page" to={"/escuela-de-padle"}>Padle</NavLink></li>
                                    <li><NavLink className="dropdown-item subrrallado" aria-current="page" to={"/rock"}>Rock</NavLink></li>
                                    <li><NavLink className="dropdown-item subrrallado" aria-current="page" to={"/zumba"}>Zumba</NavLink></li>
                                    <li><NavLink className="dropdown-item subrrallado" aria-current="page" to={"/kick-boxing"}>Kick Boxing</NavLink></li>
                                    <li><NavLink className="dropdown-item subrrallado" aria-current="page" to={"/partin-artistico"}>Partin Artistico</NavLink></li>
                                    <li><NavLink className="dropdown-item" aria-current="page" to={"/folklore"}>Folklore</NavLink></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Socios
                                </a>
                                <ul className="dropdown-menu text-center">
                                    <li>
                                        <NavLink className="dropdown-item" aria-current="page" to={"/socios"}>Como asociarse</NavLink>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <NavLink to={"/noticias"} className="nav-link">Noticias</NavLink>
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