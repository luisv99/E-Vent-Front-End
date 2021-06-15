import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
    Link
  } from "react-router-dom";


export default function ServiciosAdmin(){
    const [services, setServices] = useState([])
    const [serviceByName, setServiceByName] = useState('')
    
    useEffect (() => {
        getServices();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [serviceByName]);

    const getServices = () =>{
        Axios.get("https://dry-shelf-94984.herokuapp.com/api/services/" + serviceByName).then((res)=>{
            setServices(res.data)
            console.log('Servicios' + res.data)
        }
        )
        console.log(services)
    }


    const deleteServices = (e, id) => {
        e.preventDefault();
        console.log("Delete")

        Axios.delete("https://dry-shelf-94984.herokuapp.com/api/services/"+ id).then((res) => {
            alert(res.data.message)
            getServices()
        }).catch(err => {
            alert(err.data.message)
            alert("error")
        })
    }

    return(
        <>
            <div className="contenedorP">
            
            <h1 className="titulo">Lista de Servicios</h1>
            <label htmlFor="filtroS">Nombre</label>
            <input type="text" id="filtroS" onChange={(e)=>{setServiceByName(e.target.value)}}/>
            <Link to="/AddServices" className="boton-crear-usuario">Agregar Servicio</Link>
            <table id="customers">
                <tr>
                    <th>User_id</th>
                    <th>Nombre</th>
                    <th>Precio ($)</th>
                    <th>Descripcion</th>
                    <th>Promocion</th>
                    <th>Disponibilidad</th>
                    <th>Eliminar</th>
                    <th>Editar</th>
                    
                </tr>

                { services.map((service) => (
                
                <tr>
                    <td>{service.user_id}</td>
                    <td>{service.name}</td>
                    <td>{service.price}</td>
                    <td>{service.description}</td>
                    <td>{service.available}</td>                    
                    <td>{service.promotion}</td>                    
                    <td><button className="deleteBtn" onClick = {(e) => {deleteServices(e, service.id)}}>Delete</button></td>
                    <td><Link to={`/EditServicios/ ${service.id}`} >Editar</Link></td>

                </tr>
                )) }
                </table>
                </div>

        </>
    )
}
