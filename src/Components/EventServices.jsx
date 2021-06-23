import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
     useParams, Link
  } from "react-router-dom";
  import './ServicesStyles.css'


export default function Services(){
    const [services, setServices] = useState([])
    
    const { event_id } = useParams();

    useEffect (() => {
        getEventServices();
    }, []);

    const getEventServices = () =>{
        
        Axios.get("http://localhost:5000/api/event/full/" + event_id).then((res)=>{
            setServices(res.data.services)
            console.log('Servicios: ' + res.data.services)
        }
        )
    } 
  
    return(
        <>
            <div className="contenedorP">
            
            <h1 className="titulo">Lista de Proveedores</h1>
            
            <Link to="/Provedores" className="boton-crear-usuario">Agregar Proveedor</Link>
            
            <table id="customers">
                <tr>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Precio</th>
                    <th>Eliminar</th>
                    <th>Editar</th>
                    
                </tr>

                { services.map((service) => (
                
                <tr>
                    <td>{service.name}</td>
                    <td>{service.description}</td>
                    <td>{service.precio}</td>                    
                    <td><button className="deleteBtn" >Delete</button></td>
                    <td><Link className="botonEditar" to={`/EditProveedores/ ${service.id}`} >Edit</Link></td>

                </tr>
                )) }
                </table>
                </div>

                

        </>
    )
}