import './NavBar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faIcons } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
import {
    Link
  } from "react-router-dom";
import logo from './../Imagenes/logo.png';
import home from './../Imagenes/home.png';
import crear from './../Imagenes/crear.png';
import recomendaciones from './../Imagenes/recomendaciones.png';
import contacto from './../Imagenes/contacto.png';




export default function NavBar(){

    const [open, setOpen] = useState(false)

    return(
        <>
        <header className="header">
            <nav className="navbar">

            <ul className={`menu ${open? "menu-toggle":""}`} id="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/CrearEvento">Crea tu E-Vent</Link></li>
                <li><Link to="/recomendations">Recomendaciones</Link></li>
                <li><Link to="/Admin">Admin</Link></li>
                <li><Link to="/Catalogo">Locales</Link></li>
            </ul>

            <div className="menu-bar" onClick={()=>setOpen(prev=>!prev)} >
                <FontAwesomeIcon icon= {faBars} className="fas2" id="menu-bar"/>
            </div>

            <div className="shop">
                <FontAwesomeIcon icon={faIcons}  className="fas" />
            </div>

            </nav>
        </header>
    
    </>
    )
}