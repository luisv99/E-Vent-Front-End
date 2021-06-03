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
                <li><Link to="/">Home</Link></li>
                <li><Link to="/CrearEvento">Crea tu E-Vent</Link></li>
                <li><Link to="/recomendations">Recomendaciones</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/Provedores">Provedores</Link></li>
                
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