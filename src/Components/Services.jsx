import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
    Link, useParams
  } from "react-router-dom";


export default function Services(){
    const [services, setServices] = useState([])
    
    const { proveedor_id } = useParams();

    useEffect (() => {
        getServices();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getServices = () =>{
        Axios.get("https://dry-shelf-94984.herokuapp.com/api/services/proveedores/" + proveedor_id).then((res)=>{
            setServices(res.data)
            console.log('Servicios' + res.data)
        }
        )
        console.log(services)
    }

    return(
        <>
            <div className="contenedorP">
            
            <h1 className="titulo">Lista de Servicios</h1>
            
            <Link to="/AddServices" className="boton-crear-usuario">Agregar Servicio</Link>
            <table id="customers">
                <tr>
                    <th>User_id</th>
                    <th>Nombre</th>
                    <th>Precio ($)</th>
                    <th>Descripcion</th>
                    <th>Correo</th>
                    <th>Promocion</th>

                    
                </tr>

                { services.map((service) => (
                
                <tr>
                    <td>{service.user_id}</td>
                    <td>{service.name}</td>
                    <td>{service.price}</td>
                    <td>{service.description}</td>
                    <td>{service.available}</td>                    
                    <td>{service.promotion}</td>                    
                   

                </tr>
                )) }
                </table>
                </div>

        </>
    )
}