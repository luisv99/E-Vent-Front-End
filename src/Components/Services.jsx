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

    useEffect (() => {
        getServices();
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
        }
        )
        console.log(services)
    }

    const getUserEvents = (serviceId) =>{
        setServiceId(serviceId)
        Axios.get("https://dry-shelf-94984.herokuapp.com/api/events/user/" + localStorage.getItem('user_id')).then((res)=>{
            setEvents(res.data)
            console.log('Eventos: ' + res.data)
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
            alert("Event added successfully")
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
                        <Modal className="eventModal" isOpen={modalIsOpen} >
                            <button className="close-modal" onClick={setModalIsOpenToFalse}>x</button>
                            <h2 className="titulo-servicios">Seleccione a cual de sus eventos desea agregar "{service.name}"</h2>
                            <div className="select">
                            <select value={eventId}  onChange = {(e) => {setEventId(e.target.value)}}>
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