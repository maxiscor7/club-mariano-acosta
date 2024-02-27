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
            <CarouselSponsors />
            
            <div className="container-cards">
                <div className="card card1"></div>
                <div className="card card2"></div>
                <div className="card card3"></div>
                <div className="card card4"></div>
                <div className="card card5"></div>
                <div className="card card6"></div>
            </div>
            <Footer />
        </div>
    )
}