import NavBrowser from "../../components/NavBrowser";
import banner from "../../assets/banner.png"
import hockey from "../../assets/hockey.jpg"
import futFem from "../../assets/futFem.png"
import juntos from "../../assets/juntos.jpg"
import './Home.css'
import CarouselSponsors from "../../components/CarouselSponsors";
import Footer from "../../components/Footer";
export default function Home() {

    return (
        <div className="container-home">
            <NavBrowser />
            <img className="banner-img" src={banner} alt="banner actividades" />
            <div className="container-cards">
                <div className="card">
                    <img src={hockey} alt="hockey" />
                    <div className="container-textCard">
                        <h4>HOCKEY CLUB SOCIAL Y DEPORTIVO MARIANO ACOSTA</h4>
                        <p>"Venite y sumate" - "Planteles femeninos y masculinos"</p>
                        <p>En febrero arrancamos los entrenamientos para la temporada 2024, todas las categorias 10ma, 9na, 8va, 7ma, 6ta, 5ta, primera division, mamis y Equipo masculino.</p>
                        <h4>¡ANOTATE AHORA!</h4>
                    </div>
                </div>
                <div className="card">
                    <img src={futFem} alt="hockey" />
                    <div className="container-textCard">
                        <h4>ABIERTA LA INSCRPCION FUTBOL FEMENINO +18</h4>
                        <p>⚽ ¿Qué esperas para unirte a nosotras y formar parte de esta experiencia única? ¡todos son bienvenidos!</p>
                        <p>Comparte momentos emocionantes y vive la verdadera camaradería que solo el fútbol femenino puede ofrecer.</p>
                        <h4>¡ANOTATE AHORA!</h4>
                    </div>
                </div>
                <div className="card">
                    <img src={juntos} alt="hockey" />
                    <div className="container-textCard">
                        <h4>Cierre Triunfal del Año</h4>
                        <p>Nuestras escuelitas despidieron el año así, en el polideportivo, juntando la alegría de los chicos, profesores, comité deportivo y comisión directiva 👏👏,hasta el año que  viene 🏆🥂👍</p>
                        
                    </div>
                </div>
            </div>
            <CarouselSponsors/>
            <Footer/>
        </div>
    )
}