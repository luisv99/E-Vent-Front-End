import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
     useParams
  } from "react-router-dom";


export default function HiredServices(){
    const [services, setServices] = useState([])

    const {proveedor_id} = useParams()

    
    useEffect (() => {
        getServices();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getServices = () =>{
        console.log("Proveedor Id: " + proveedor_id)
        
        Axios.get("https://dry-shelf-94984.herokuapp.com/api/services/hired/" + proveedor_id).then((res)=>{
            setServices(res.data)
            console.log("Data: " + res.data['events'])
            
        }
        )
        console.log("HOLA")
        console.log('Servicios' + services.events)
        
    }

    return(
        <>
            <div className="contenedorP" style={{marginTop:"5rem"}}>
            <div>
                        <h2 style={{textAlign:"center"}}>Eventos que me han contratado</h2>
                    </div>
                        
            {services.map((service) => (

                <table id="customers">
                    
                    <tr>
                        <th style={{width:"10px"}}>User_id</th>
                        <th style={{textAlign:"center"}}>Servicio</th>
                        <th style={{textAlign:"center"}}>Evento</th>  
                        <th style={{width:"300px" , textAlign:"center"}}>Fecha</th>  
                    </tr>
                        
                    {service.events.map((event) => (
                    
                    <tr>
                        <td>{event.user_id}</td>
                        <td>{service.name}</td>
                        <td>{event.name}</td>
                        <td>{event.date}</td>


                    </tr>
                    ))}
                </table>
            ))
                
            }
            </div>

        </>
    )
}