import { NavLink } from 'react-router-dom';
import './NavBrowser.css';
import logo from "../assets/logo.png";
import { useState } from 'react';

export default function NavBrowser() {
    const disiplinasData = [
        { nombre: 'Taekwondo', ruta: '/taekwondo' },
        { nombre: 'Hockey', ruta: '/hockey' },
        { nombre: 'Vóley', ruta: '/voley' },
        { nombre: 'Básquetbol', ruta: '/basquetbol' },
        { nombre: 'Fútbol femenino', ruta: '/futbol-femenino' },
        { nombre: 'Fútbol masculino', ruta: '/futbol-masculino' },
        { nombre: 'Ritmos urbanos', ruta: '/ritmos-urbanos' },
        { nombre: 'Patin artístico', ruta: '/partin-artistico' },
        { nombre: 'Kick Boxing', ruta: '/kick-boxing' },
        { nombre: 'Zumba', ruta: '/zumba' },
        { nombre: 'Taebo', ruta: '/taebo' },
        { nombre: 'Rock', ruta: '/rock' },
        { nombre: 'Reggaetón infantil', ruta: '/reggaeton-infantil' },
        { nombre: 'Acro dance', ruta: '/acro-dance' },
        { nombre: 'Escuela de padle', ruta: '/escuela-de-padle' }];

    const elClub = [{ nombre: 'Historia', ruta: '/historia' }, { nombre: 'Instalaciones', ruta: '/instalaciones' }];

    const [showDisciplinas, setShowDisciplinas] = useState(false);
    const [showClub, setShowClub] = useState(false);

    const handleDisciplinasClick = () => {
        setShowDisciplinas(!showDisciplinas);
        setShowClub(false); // Restablecer el estado de showClub al hacer clic en Disciplinas
    };

    const handleClubClick = () => {
        setShowClub(!showClub);
        setShowDisciplinas(false); // Restablecer el estado de showDisciplinas al hacer clic en Club
    };
    const handleOtherLinks = () => {
        setShowDisciplinas(false); // Restablecer el estado de showDisciplinas al hacer clic en Club
        setShowClub(false); // Restablecer el estado de showClub al hacer clic en Disciplinas
    }
    return (
        <div className='big-container'>
            <div className='container-logo'>
                <img src={logo} alt='logo club social y deportivo mariano moreno' />
                <div className='container-tit'>
                    <h2>Club Social y Deportivo</h2>
                    <h1>MARIANO ACOSTA</h1>
                </div>
            </div>

            <div className='navBrowser'>
                <div className='inside-navBrowser'>
                    <div className='buttonBrowser' onClick={handleOtherLinks}>
                        <NavLink id='button-link' style={{ textDecoration: 'none' }} to={"/"}>Inicio</NavLink>
                    </div>
                    <div className='buttonBrowser' onClick={handleDisciplinasClick}>
                        <p id={`${showDisciplinas ? 'button-link-active' : 'button-link-desactive'}`} style={{ textDecoration: 'none' }}>Disciplinas</p>
                    </div>
                    <div className='buttonBrowser' onClick={handleClubClick}>
                        <p id={`${showClub ? 'button-link-active' : 'button-link-desactive'}`} style={{ textDecoration: 'none' }}>El Club</p>
                    </div>
                    <div className='buttonBrowser' onClick={handleOtherLinks}>
                        <NavLink id='button-link' style={{ textDecoration: 'none' }} to={"/eventos"}>Eventos</NavLink>
                    </div>
                    <div className='buttonBrowser' onClick={handleOtherLinks}>
                        <NavLink id='button-link' style={{ textDecoration: 'none' }} to={"/contacto"}>Contacto</NavLink>
                    </div>
                </div>
            </div>

            <div className={`${showDisciplinas ? 'hide-div-disciplinas' : 'hidden'}`}>
                {disiplinasData.map((disciplina, index) => (
                    
                        <NavLink key={index} className='disiplina-item'
                        id='button-link'
                        style={{ textDecoration: 'none', color:'white' }}
                        to={disciplina.ruta}
                        >
                            {disciplina.nombre}
                        </NavLink>
                    
                ))}
            </div>
            <div className={`${showClub ? 'hide-div-club' : 'hiddenClub'}`}>
                {elClub.map((club, index) => (
                    
                        <NavLink key={index} className='disiplina-item'
                            id='button-link'
                            style={{ textDecoration: 'none', color:'white' }}
                            to={club.ruta}
                        >
                            {club.nombre}
                        </NavLink>
                    
                ))}
            </div>
        </div>
    );
}