import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
    Link
  } from "react-router-dom";

export default function Compras(){
    const [services, setServices] = useState([])
    const [serviceByName, setServiceByName] = useState('')
    
    useEffect (() => {
        getServices();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [serviceByName]);

    const getServices = () =>{
        Axios.get("http://localhost:5000/api/services/" + serviceByName).then((res)=>{
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
            
            <h1 className="titulo">Historial de Facturas</h1>
            <label htmlFor="filtroS">Nombre</label>
            <input type="text" id="filtroS" onChange={(e)=>{setServiceByName(e.target.value)}}/>
            <table id="customers">
                <tr>
                    <th>User_id</th>
                    <th>Factura_id</th>
                    <th>Nombre Cliente</th>
                    <th>Nombre Evento</th>
                    <th>Monto Total ($)</th>
                    
                </tr>

                { services.map((service) => (
                
                <tr>
                    <td>{service.user_id}</td>
                    <td>{service.name}</td>
                    <td>{service.price}</td>
                    <td>{service.description}</td>
                    <td>{service.description}</td>

                </tr>
                )) }
                </table>
                </div>

        </>
    )
}