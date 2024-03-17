import './Footer.css'
import insta from "../assets/insta.png";
import face from "../assets/face.png";

export default function Footer() {
    return (
        <footer>
            <div className='container-footer'>
                <p>© 2024 Club Social y Deportivo Mariano Acosta. Todos los derechos reservados.</p>
                <p>Direcion: Cnel. Salvadores 2667, Mariano Acosta | Teléfono: 1131848212 y/o 1150375322</p>
                <p>Correo electrónico: csdma2024@gmail.com</p>
                <div className='container-social-media-footer'>
                    <p>Redes Sociales: </p>
                    <a href='https://www.instagram.com/club.mariano.acosta/' target='_blank' rel="noreferrer"><img src={insta} alt='' /></a>
                    <a href='https://www.facebook.com/profile.php?id=61556710889445' target='_blank' rel="noreferrer"><img src={face} alt='' /></a>
                </div>
            </div>
            <div className='container-maxysdesigndigital'>
                <p>Desarrollado por © MxySDigitalDesign</p>
            </div>
        </footer>
    );
};