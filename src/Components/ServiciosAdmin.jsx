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
            console.log('Servicios')
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
            <div className="contenedorP" style={{marginTop: "10rem"}}>
            
            <h1 className="titulo">Lista de Servicios</h1>
            <label htmlFor="filtroS">Nombre</label>
            <input type="text" id="filtroS" onChange={(e)=>{setServiceByName(e.target.value)}}/>
            <Link to="/AddServices" className="boton-crear-usuario">Agregar Servicio</Link>
            <table id="customers">
                <tr>
                    <th style={{textAlign:"center"}}>User_id</th>
                    <th style={{textAlign:"center"}}>Nombre</th>
                    <th style={{textAlign:"center"}}>Precio ($)</th>
                    <th style={{textAlign:"center"}}>Descripcion</th>
                    <th style={{textAlign:"center"}}>Eliminar</th>
                    <th style={{textAlign:"center"}}>Editar</th>
                    
                </tr>

                { services.map((service) => (
                
                <tr>
                    <td key={service}>{service.user_id}</td>
                    <td key={service}>{service.name}</td>
                    <td key={service}>{service.price}</td>
                    <td key={service}>{service.description}</td>
                    <td key={service}><button className="deleteBtn" onClick = {(e) => {deleteServices(e, service.id)}}>Delete</button></td>
                    <td key={service}><Link to={`/EditServicios/ ${service.id}`} >Editar</Link></td>

                </tr>
                )) }
                </table>
                </div>

        </>
    )
}
