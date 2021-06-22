import './ServiciosAdminStyles.css'
import './ProveedoresStyles.css'
import './UserEventsStyles.css'
import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
    Link
  } from "react-router-dom";


export default function Admin(){

    const [events, setEvents] = useState([])

    useEffect (() => {
        getUserEvents()
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    
   


    const getUserEvents = () =>{

        Axios.get("http://localhost:5000/api/events/user/" + localStorage.getItem('user_id')).then((res)=>{
            setEvents(res.data)
            console.log('Eventos: ' + res.data)
        }
        )
    } 

    return(
        <>
            <div className="contenedorP">
            
            <h1 className="titulo">Tus Eventos</h1>
            <label id="labelFiltroP" htmlFor="filtroP">Nombre del Proveedor</label>
            <input type="text" id="filtroP"  />
            <Link to="/Provedores" className="boton-crear-usuario">Agregar Proveedor</Link>
            
            <table id="customers">
                <tr>
                    <th>Nombre</th>
                    <th>Fecha</th>
                    <th>Direccion</th>
                    <th>Cantidad de Personas</th>
                    <th>Editar</th>
                    
                </tr>

                { events.map((event) => (
                
                <tr>
                    <td>{event.name}</td>
                    <td>{event.date}</td>
                    <td>{event.location}</td>                    
                    <td>{event.cant_personas}</td>                    
                    <td><Link className="botonEditar" to={`/EventServices/ ${event.id}`} >Detalles</Link></td>

                </tr>
                )) }
                </table>
                </div>

        <ul class="tilesWrap">
            
            {events.map((event)=>(
                <li>
            <h3>{event.name}</h3>
            <p>
                Ubicacion: {event.location}
            </p>
            <p>
                Fecha: {event.date}
            </p>
            <p>
                Ubicacion: {event.cant_personas}
            </p>
            <button>Detalles</button>
            </li>	
            ))};
        </ul>

                

        </>
    )
    
}