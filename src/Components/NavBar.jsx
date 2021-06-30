import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faIcons } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
import {
    Link
  } from "react-router-dom";



export default function NavBar(){

    const [open, setOpen] = useState(false)
    const proveedor_id = localStorage.getItem('user_id')

    let isProveedor;
    let isAdmin;
    let isUser;
    const rol = localStorage.getItem('roles');  

    if (rol === "ROLE_PROVEEDOR"){
        isProveedor = true
    }else if (rol === "ROLE_ADMIN"){
        isAdmin = true 
    }else if (rol === "ROLE_USER" ){
        isUser = true
    }

    return(
        <>
        <header className="header">
            <nav className="navbar">

            <ul className={`menu ${open? "menu-toggle":""}`} id="menu">
                <li><Link to="/">Home</Link></li>
                {isUser && <li className="crear-evento"><Link to="/CrearEvento">Crea tu E-Vent</Link></li>}
                {isUser && <li className="crear-evento"><Link to="/Recomendations">Recomendaciones</Link></li>}
                {isProveedor &&<li><Link to={`/HiredServices/${proveedor_id}`}>Eventos</Link></li>}
                {isAdmin && <li><Link to="/Admin">Admin</Link></li>}
                {isProveedor &&<li><Link to="/ServiciosProveedor">Mis Servicios</Link></li>}
                <li><Link to="/Catalogo">Locales</Link></li>
            </ul>

            <div className="menu-bar" onClick={()=>setOpen(prev=>!prev)} >
                <FontAwesomeIcon icon= {faBars} className="fas2" id="menu-bar"/>
            </div>

            <div className="shop">
                <Link style={{color:"white"}} to="/UserEvents"><FontAwesomeIcon icon={faIcons}  className="fas" /></Link>
            </div>

            </nav>
        </header>
    
    </>
    )
}