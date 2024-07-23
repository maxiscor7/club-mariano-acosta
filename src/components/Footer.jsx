import './Footer.css'
import insta from "../assets/insta.png";
import face from "../assets/face.png";

export default function Footer() {
    return (
        <footer>
            <div className='container-footer'>
                <p>© 2024 Club Social y Deportivo Mariano Acosta. Todos los derechos reservados.</p>
                <p><label>Direcion:</label> Crisalde 485, Mariano Acosta, partido de Merlo</p>
                <p><label>Teléfono:</label> +54 9 220 499-8123</p>
                <p><label>Whatsapp:</label> +54 9 11 3184-8212 y +54 9 11 5037-5322</p>
                <p><label>Correo electrónico:</label> csdma.secretario@gmail.com</p>
                <div className='container-social-media-footer'>
                    <p><label>Redes Sociales:</label> </p>
                    <a href='https://www.instagram.com/club.mariano.acosta/' target='_blank' rel="noreferrer"><img src={insta} alt='' /></a>
                    <a href='https://www.facebook.com/profile.php?id=61556710889445' target='_blank' rel="noreferrer"><img src={face} alt='' /></a>
                </div>
            </div>
            <div className='container-maxysdesigndigital'>
                
            </div>
        </footer>
    );
};