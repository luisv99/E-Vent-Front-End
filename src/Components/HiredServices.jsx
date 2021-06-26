import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
    Link, useParams
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
        Axios.get("http://localhost:5000/api/services/hired/" + proveedor_id).then((res)=>{
            setServices(res.data)
            console.log("Data: " + res.data['events'])
            
        }
        )
        console.log("HOLA")
        console.log('Servicios' + services.events)
        
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
            
            {services.map((service) => (
                
                <table id="customers">
                    <div>
                        <h2>Servicio: {service.name}</h2>
                    </div>
                    <tr>
                        <th>User_id</th>
                        <th>Evento</th>
                        <th>Fecha</th>  
                    </tr>
                        
                    {service.events.map((event) => (
                    
                    <tr>
                        <td>{event.user_id}</td>
                        <td>{event.name}</td>
                        <td>{event.date}</td>
                        <td><button className="deleteBtn" onClick = {(e) => {deleteServices(e, service.id)}}>Delete</button></td>
                        <td><Link to={`/EditServicios/ ${service.id}`} >Editar</Link></td>

                    </tr>
                    ))}
                </table>
            ))
                
            }
            </div>

        </>
    )
}