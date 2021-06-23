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
        getUserEvents();
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
            <div className="contenedorP2">

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
                Personas: {event.cant_personas}
            </p>
            <Link to="/Factura"><button>Factura</button></Link>
            </li>	
            ))};
        </ul>
            </div>

                

        </>
    )
    
}