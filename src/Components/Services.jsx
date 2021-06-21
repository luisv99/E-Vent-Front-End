import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import {
     useParams
  } from "react-router-dom";
  import './ServicesStyles.css'
import ReactCircleModal from 'react-circle-modal'



export default function Services(){
    const [services, setServices] = useState([])
    const [show, setShow] = useState(false);
    const [events, setEvents] = useState([])

    const [serviceId, setServiceId] = useState('')
    const [eventId, setEventId] = useState('')

    const [modalIsOpen, setModalIsOpen] = useState(false);
    
    const { proveedor_id } = useParams();

    useEffect (() => {
        getServices();
        console.log(events);
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }

    const getServices = () =>{
        console.log("Proveedor Id: " + proveedor_id)
        Axios.get("http://localhost:5000/api/services/proveedores/" + proveedor_id).then((res)=>{
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
        Axios.get("http://localhost:5000/api/events/user/" + localStorage.getItem('user_id')).then((res)=>{
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
        Axios.post("http://localhost:5000/api/event/" + eventId + "/add/" + serviceId, {
            event_id: 5,
            service_id: serviceId
        }).then(() => {
            alert("Event added successfully")
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
                        <p>{service.description}
                        </p>
                        <button value = {service.id} className="button" onClick = {e => getUserEvents(e.target.value)}>
                            Lo quiero en mi Evento 
                        </button>
                        <Modal isOpen={modalIsOpen}style="height:50%; width: 50%">
                            <button onClick={setModalIsOpenToFalse}>x</button>
                            <h1>Selecciona el eveanto a agregar el servicio</h1>
                            <select value={eventId}  onChange = {(e) => {setEventId(e.target.value)}}>
                                {events.map((event => (
                                    <option value = {event.id}> {event.name} </option>
                                )))}
                            </select>
                            <button onClick={e => agregarServicio()}>Agregar Servicio</button>
                            <button onClick={setModalIsOpenToFalse}>Cancelar</button>
                        </Modal>
                    </div>

                    


                    ))}
                    
                </div>
            </div>

    
        </>
    )
}