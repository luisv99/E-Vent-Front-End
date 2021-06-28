import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
     useParams, Link
  } from "react-router-dom";
  import './ServicesStyles.css'


export default function Services(){
    const [services, setServices] = useState([])
    const [montoTotal, setMontoTotal] = useState("")

    const { event_id } = useParams();

    useEffect (() => {
        getEventServices();
    }, []);

    const getEventServices = () =>{
        
        Axios.get("https://dry-shelf-94984.herokuapp.com/api/event/full/" + event_id).then((res)=>{
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
    
    const deleteService = (e, id) => {
        console.log("Delete Service " + id)
        e.preventDefault();

        Axios.delete("https://dry-shelf-94984.herokuapp.com/api/event/" + event_id + "/delete/" + id).then((res) => {
            alert(res.data.message)
            getEventServices()
        }).catch(err => {
            alert(err.data.message)
            alert("error")
        })
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
                    
                </tr>

                { services.map((service) => (
                
                <tr key = {service.id}>
                    <td>{service.name}</td>
                    <td>{service.description}</td>
                    <td>{service.price}</td>                    
                    <td><button className="deleteBtn" onClick = {(e) => {deleteService(e, service.id)}}>Delete</button></td>

                </tr>
                )) }
                </table>
                <p>Monto Total: {montoTotal}</p>
                <Link to={`/Factura/${event_id}`}><button>Pagar</button></Link>
                </div>

                

        </>
    )
}