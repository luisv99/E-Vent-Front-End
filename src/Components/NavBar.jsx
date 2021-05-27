import './NavBar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars,faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {
    Link
  } from "react-router-dom";
import logo from './../Imagenes/logo.png';
import home from './../Imagenes/home.png';
import crear from './../Imagenes/crear.png';
import recomendaciones from './../Imagenes/recomendaciones.png';
import contacto from './../Imagenes/contacto.png';

export default function NavBar(){
    return(
        <>
        <header className="header">
            <nav className="navbar">
            <ul className="menu" id="menu">
                <li className= "home"><Link to="/"><img  src={home} alt="home"/></Link></li>
                <li className= "home"><Link to="/Services"><img src={crear} alt="crear"/></Link></li>
                <li><Link to="/"><img src={logo} alt="logo"/></Link></li>
                <li className= "home"><Link to="/recomendations"><img src={recomendaciones} alt="recomendaciones"/></Link></li>
                <li className= "home"><Link to="/contact"><img src={contacto} alt="contacto"/></Link></li>
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