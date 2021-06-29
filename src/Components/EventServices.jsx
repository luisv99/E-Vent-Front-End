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

    const [comp, setComp] = useState(false)

    const { event_id } = useParams();

    useEffect (() => {
        getEventServices();
    }, []);

    const getEventServices = () =>{
        
        Axios.get("https://dry-shelf-94984.herokuapp.com/api/event/full/" + event_id).then((res)=>{
            setServices(res.data.services);
            
            console.log('res data: ' + res.data.completado);
            
            
            var aux = 0
            res.data.services.map(service => {
                aux = aux + service.price
                console.log(aux)
                
            })
            setComp(res.data.completado)
            console.log('comp: ' + comp);
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
            <div className="contenedorA" style={{marginTop: "10rem"}}>
            
            <h1 className="titulo">Servicios de su evento</h1>
            
            {comp &&<li><Link className="pay-link" to={`/Checkout/${event_id}`}><button className="pay-btn">Pagar</button></Link></li>}
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
                <hr />
                <h4 className="monto-total">Monto Total: {montoTotal}$</h4>
                </div>

                

        </>
    )
}