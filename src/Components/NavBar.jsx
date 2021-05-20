import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars,faShoppingCart} from '@fortawesome/free-solid-svg-icons'


export default function NavBar(){
    return(
        <>
        <header className="header">
            <nav className="navbar">
            <ul className="menu" id="menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">Crea tu E-Vent</a></li>
                <li><a href="#">Recomendaciones</a></li>
                <li><a href="#">Contact</a></li>
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