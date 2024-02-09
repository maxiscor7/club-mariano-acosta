import { Link } from 'react-router-dom'
import './NavBrowser.css';


export default function NavBrowser() {

    return (
        <div className='navBrowser'>
            <div className='buttonBrowser'>
                <Link style={{color: "#1c3168", textDecoration: 'none', backgroundColor: 'rgb(245, 237, 237)'}} to={"/"}>Inicio</Link>
            </div>
            <div className='buttonBrowser'>
                <Link style={{color: "#1c3168", textDecoration: 'none', backgroundColor: 'rgb(245, 237, 237)'}} to={"/disiplines"}>Disiplinas</Link>
            </div>
            <div className='buttonBrowser'>
                <Link style={{color: "#1c3168", textDecoration: 'none', backgroundColor: 'rgb(245, 237, 237)'}} to={"/club"}>El Club</Link>
            </div>
            <div className='buttonBrowser'>
                <Link style={{color: "#1c3168", textDecoration: 'none', backgroundColor: 'rgb(245, 237, 237)'}} to={"/contact"}>Contacto</Link>
            </div>
        </div>
    )
}