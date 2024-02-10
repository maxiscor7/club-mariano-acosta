import { NavLink } from 'react-router-dom';
import './NavBrowser.css';
import logo from "../assets/logo.png";
import { useState } from 'react';

export default function NavBrowser() {
    const disiplinasData = ['Taekwondo', 'Patin artístico', 'Kick Boxing', 'Ritmos urbanos', 'Zumba', 'Taebo', 'Hockey', 'Rock', 'Vóley', 'Fútbol femenino', 'Taekwondo', 'Reggaetón infantil', 'Acro dance', 'Fútbol masculino', 'Escuela de padle', 'Básquetbol'];
    const elClub = ['Historia', 'Instalaciones'];

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
        <div>
            <div className='container-logo'>
                <img src={logo} alt='logo club social y deportivo mariano moreno' />
                <div className='container-tit'>
                    <h2>Club Social y Deportivo</h2>
                    <h1>MARIANO MORENO</h1>
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
                    <div key={index} className='disiplina-item'>
                        {disciplina}
                    </div>
                ))}
            </div>
            <div className={`${showClub ? 'hide-div-club' : 'hiddenClub'}`}>
                {elClub.map((club, index) => (
                    <div key={index} className='disiplina-item'>
                        {club}
                    </div>
                ))}
            </div>
        </div>
    );
}