import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars,faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {
    Link
  } from "react-router-dom";

export default function NavBar(){
    return(
        <>
        <header className="header">
            <nav className="navbar">
            <ul className="menu" id="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Services">Crea tu E-Vent</Link></li>
                <li><Link to="/recomendations">Recomendaciones</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>

            <div className="menu-bar">
                <FontAwesomeIcon icon={faBars} id="menu-bar" className="fas"/>
            </div>

            <div className="shop">
                <FontAwesomeIcon icon={faShoppingCart} className="fas"/>
            </div>

            </nav>
        </header>
    
    </>
    )
}