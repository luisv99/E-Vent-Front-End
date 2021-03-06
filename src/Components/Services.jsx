import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import {
     useParams
  } from "react-router-dom";
  import './ServicesStyles.css'



export default function Services(){
    const [services, setServices] = useState([])
    const [events, setEvents] = useState([])

    const [serviceId, setServiceId] = useState('')
    const [eventId, setEventId] = useState('')

    const [modalIsOpen, setModalIsOpen] = useState(false);
    
    const { proveedor_id } = useParams();

    let role = true

    if (localStorage.getItem('roles') === "ROLE_USER"){
        role = true;
    }else{
        role = false;
    };

    useEffect (() => {
        getServices();
        console.log(events);
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }

    const getServices = () =>{
        console.log("Proveedor Id: " + proveedor_id)
        Axios.get("https://dry-shelf-94984.herokuapp.com/api/services/proveedores/" + proveedor_id).then((res)=>{
            setServices(res.data)
            console.log('Servicios' + res.data)
            console.log(proveedor_id)
        }
        )
        console.log(services)
    }

    const getUserEvents = (serviceId) =>{
        console.log('getUserEvents')
        console.log('serviceID: ' + serviceId)
        setServiceId(serviceId)
        Axios.get("https://dry-shelf-94984.herokuapp.com/api/events/user/" + localStorage.getItem('user_id')).then((res)=>{
            setEvents(res.data)
            console.log('Eventos: ' + res.data)
        }
        ).catch(() => {
            alert('Error')
        });

        setModalIsOpen(true)
    };

    const agregarServicio = () => {
        console.log("agregando servico")
        console.log("Event Id: " + eventId)
        Axios.post("https://dry-shelf-94984.herokuapp.com/api/event/" + eventId + "/add/" + serviceId, {
            event_id: 5,
            service_id: serviceId
        }).then(() => {
            alert("Servicio agregado correctamente")
        }).catch(err => {
            alert('Seleccione un evento')
        })
    }

    return(
        <>
            <div className="cont1">

                <div className="contCard">
                { services.map((service) => (

                    <div className="card1">
                        <h3 >{service.name}</h3>
                        <img src={service.image} className="service-img" alt="service-pic"/>
                        <p>{service.description}</p>
                        {role && <button value = {service.id} className="button" onClick = {e => getUserEvents(e.target.value)}>
                            Lo quiero en mi Evento 
                        </button>}
                        {!role && <button value = {service.id} className="button" disabled onClick = {e => getUserEvents(e.target.value)}>
                            Accion no permitida
                        </button>}
                        <Modal className="eventModal" isOpen={modalIsOpen} >
                            <button className="close-modal" onClick={setModalIsOpenToFalse}>x</button>
                            <h2 className="titulo-servicios">Seleccione a cual de sus eventos desea agregar "{service.name}"</h2>
                            <div className="select">

                            <select value={eventId}  onChange = {(e) => {setEventId(e.target.value)}}>
                                <option> Seleccione un Evento </option>
                                {events.map((event => (
                                    <option value = {event.id}> {event.name} </option>
                                )))};
                            </select>
                            
                            <button id="btn-btn-success" className="btn btn-success" onClick={e => agregarServicio()}>Agregar Servicio</button>
                            <button id="btn-btn-danger"  className="btn btn-danger" onClick={setModalIsOpenToFalse}>Cancelar</button>
                            </div>
                        </Modal>
                    </div>

                    


                    ))}
                    
                </div>
            </div>

    
        </>
    )
}