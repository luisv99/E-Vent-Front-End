import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faGlassCheers, faIcons, faTruckMonster } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useEffect } from 'react';
import {
    Link
  } from "react-router-dom";






export default function NavBar(){

    const [open, setOpen] = useState(false)

    return(
        <>
      

            <ul className={`menu ${open? "menu-toggle":""}`} id="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/CrearEvento">Crea tu E-Vent</Link></li>
                <li><Link to="/recomendations">Recomendaciones</Link></li>
     
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/Catalogo">Catalogo</Link></li>
                <li><Link to="/Services">Servicios</Link></li>
                <li><Link to="/Checkout">Checout</Link></li>
                
                
                <li><Link to="/Catalogo">Locales</Link></li>
            </ul>

            <div className="menu-bar" onClick={()=>setOpen(prev=>!prev)} >
                <FontAwesomeIcon icon= {faBars} className="fas2" id="menu-bar"/>
            </div>

            <div className="shop">
                <FontAwesomeIcon icon={faIcons}  className="fas" />
            </div>

      
    
    </>
    )
}