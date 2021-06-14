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
    }, [serviceByName]);

    const getServices = () =>{
        Axios.get("http://localhost:5000/api/services/" + serviceByName).then((res)=>{
            setServices(res.data)
            console.log(res.data)
        }
        )
        console.log(services)
    }

    /*const getServiceByName = (e) =>{
        setServiceByName(e.target.value)
        Axios.get("./services/" + serviceByName).then((res)=>{
            setServices(res.data)
            console.log(res.data)
            //alert('Funciona')

        }
        ).catch(err => {
            console.log(err)
        })
    }*/

    const deleteServices = (e, id) => {
        e.preventDefault();
        console.log("Delete")

        Axios.delete("http://localhost:5000/services/"+ id).then((res) => {
            alert(res.data.message)
            getServices()
        }).catch(err => {
            alert(err.data.message)
            alert("error")
        })
    }

    /*const deleteService = async (id) => {
        try {
            const deleteService = await fetch(`http://localhost:5000/services/${id}`,{
                method: "DELETE"

            });
        setServices(services.filter(service => service.id !== id))

            
        } catch (error) {
            console.error(error.message)
        }
    }*/

    return(
        <>
            <div className="contenedorP">
            
            <h1 className="titulo">Lista de Servicios</h1>
            <label htmlFor="filtro">Nombre</label>
            <input type="text" id="filtro" onChange={(e)=>{setServiceByName(e.target.value)}}/>
            <Link to="/AddServices" className="boton-crear-usuario">Agregar Servicio</Link>
            <table id="customers">
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Correo</th>
                    <th>Descripcion</th>
                    <th>Disponibilidad</th>
                    <th>Promocion</th>
                    <th>Eliminar</th>
                    <th>Editar</th>
                    
                </tr>

                { services.map((service) => (
                
                <tr>
                    <td>{service.name}</td>
                    <td>{service.price}</td>
                    <td>{service.user_id}</td>
                    <td>{service.description}</td>
                    <td>{service.available}</td>                    
                    <td>{service.promotion}</td>                    
                    <td><button className="deleteBtn" /*onClick={() => deleteService(service.id)}*/>Delete</button></td>
                    <td><button className="editarBtn" onClick = {(e) => {deleteServices(e, service.id)}}>Editar</button></td>

                </tr>
                )) }
                </table>
                </div>

        </>
    )
}