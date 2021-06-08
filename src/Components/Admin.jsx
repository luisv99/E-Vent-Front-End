import {
    Link
  } from "react-router-dom";

import './AdminStyles.css'

export default function Admin(){
    return(
        <>
            <div className="con">
                <div className="con2">
                <h1 className="title">Seleccione un opcion</h1>
                    <div className="links">
                        <Link to="/Users" className="users">Gestion de Usuarios</Link>
                        <Link to="/ProveedoresAdmin" className="users">Gestion de Proveedores</Link>
                        <Link to="/ServicesAdmin" className="users">Gestion de Servicios</Link>
                        <Link to="/Users" className="users">Gestion de Administradores</Link>
                    </div>
                </div>
            </div>

        </>
    )
}