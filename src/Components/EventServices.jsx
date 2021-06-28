import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
     useParams, Link
  } from "react-router-dom";
  import './UsersStyles.css'
  import './EventServices.css'


export default function Services(){
    const [services, setServices] = useState([])
    const [montoTotal, setMontoTotal] = useState("")

    const { event_id } = useParams();

    useEffect (() => {
        getEventServices();
    }, []);

    const getEventServices = () =>{
        
        Axios.get("http://localhost:5000/api/event/full/" + event_id).then((res)=>{
            setServices(res.data.services)
            console.log('Servicios: ' + res.data.services)

            var aux = 0
            res.data.services.map(service => {
                aux = aux + service.price
                console.log(aux)
                
            })
            setMontoTotal(aux)
        }
        )
    } 
  
    return(
        <>
            <div className="contenedorA" style={{marginTop: "10rem"}}>
            
            <h1 className="titulo">Lista de Proveedores</h1>
            <Link className="pay-link" to={`/Factura/${event_id}`}><button className="pay-btn">Pagar</button></Link>
            <table id="customers"> 
                <tr>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Precio</th>
                    <th>Eliminar</th>
                    
                </tr>

                { services.map((service) => (
                
                <tr key = {service.id}>
                    <td>{service.name}</td>
                    <td>{service.description}</td>
                    <td>{service.price}</td>                    
                    <td><button className="deleteBtn" >Delete</button></td>

                </tr>
                )) }
                </table>
                <p>Monto Total: {montoTotal}</p>
                </div>

                

        </>
    )
}