import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
    Link
  } from "react-router-dom";


export default function ServiciosAdmin(){
    const [services, setServices] = useState([])
    const [serviceByName, setServiceByName] = useState('')
    useEffect (() => {
        getServices()
    }, []);

    const getServices = () =>{
        Axios.get("./api/services").then((res)=>{
            setServices(res.data)
            console.log(res.data)
        }
        )
    }

    const getServiceByName = (e) =>{
        setServiceByName(e.target.value)
        Axios.get("./api/service/" + serviceByName).then((res)=>{
            setServices(res.data)
            console.log(res.data)
            //alert('Funciona')

        }
        ).catch(err => {
            console.log(err)
        })
    }

    const deleteService = (e, id) => {

        console.log("Delete")
        e.preventDefault();

        Axios.delete("./api/service/" + id).then((res) => {
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
            <label htmlFor="filtro">Nombre</label>
            <input type="text" id="filtro" onChange={(e)=>{getServiceByName(e)}} />
            <Link to="/AddServices" className="boton-crear-usuario">Agregar Servicio</Link>
            <table id="customers">
                <tr>
                    <th>Nombre</th>
                    <th>Telefono</th>
                    <th>Correo</th>
                    <th>Direccion</th>
                    <th>Eliminar</th>
                    <th>Editar</th>
                    
                </tr>

                { services.map((service) => (
                
                <tr>
                    <td>{service.name}</td>
                    <td>{service.user_id}</td>
                    <td>{service.price}</td>
                    <td>{service.description}</td>
                    <td>{service.available}</td>                    
                    <td>{service.promotion}</td>                    
                    <td><button className="deleteBtn" onClick = {(e) => {deleteService(e, service.id)}}>Delete</button></td>
                    <td><button className="editarBtn" onClick = {(e) => {deleteService(e, service.id)}}>Editar</button></td>

                </tr>
                )) }
                </table>
                </div>

        </>
    )
}