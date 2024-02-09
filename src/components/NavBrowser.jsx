import { Link } from 'react-router-dom'


export default function NavBrowser() {

    return (
        <div className='navBrowser'>
            <div className='buttonBrowser'>
                <Link to={"/"}>Home</Link>
            </div>
            <div className='buttonBrowser'>
                <Link to={"/contact"}>Contact</Link>
            </div>
        </div>
    )
}