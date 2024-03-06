import Footer from "../components/Footer";
import NavBrowser from "../components/NavBrowser";
import underConstruccion from '../assets/underConstruccion.png'

export default function Contact() {

    return (
        <div>
            <NavBrowser />
            <div className='container-under-contruccion'>
                <img src={underConstruccion} alt='' />
            </div>
            <Footer />
        </div>
    )
}