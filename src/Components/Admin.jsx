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
                        <Link to="/Users" className="usersA">Gestion de Usuarios</Link>
                        <Link to="/ProveedoresAdmin" className="usersA">Gestion de Proveedores</Link>
                        <Link to="/ServiciosAdmin" className="usersA">Gestion de Servicios</Link>
                        <Link to="/Users" className="usersA">Gestion de Administradores</Link>
                    </div>
                </div>
            </div>

        </>
    )
}