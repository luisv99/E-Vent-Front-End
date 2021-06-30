import './FacturacionStyles.scss';
//import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useParams } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import {useHistory} from "react-router-dom";


export default function Facturacion(){

    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [montoTotal, setMontoTotal] = useState("")
    const [services, setServices] = useState([])
    const { event_id } = useParams();
    const redirect = useHistory();

    useEffect (() => {
        getInfo()
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getInfo = () =>{



        console.log('Id: ' + event_id)

        Axios.get("http://localhost:5000/api/event/full/" + event_id).then((res)=>{
            setName(res.data.name)
            setLocation(res.data.location)
            setServices(res.data.services)
            
            var aux = 0
            res.data.services.map(service => {
                aux = aux + service.price
                console.log(aux)
            })
            setMontoTotal(aux)
            console.log('evento: ' + res.data)
        }
        ).catch(err =>{
            console.log(err)
        })
        
        console.log("Monto Total: " + montoTotal)
    }

    const handleSubmit =  e => {

        Axios.put("http://localhost:5000/api/event/completar/" + event_id, {
            user_id: localStorage.getItem('user_id'),
            montoTotal: montoTotal,
            metodo_pago: localStorage.getItem('metodo_pago')

        })
        redirect.push("/PagoExitoso");
        console.log("Id: " + event_id)
    }
    return(
        <>
            <div className="cont-factura">
            <div className="signupSection-factura">
                <div className="info-factura">
                    <h1>E-Vent</h1>
                    <br></br>
                    <h1>LOGO</h1>
                </div>
                
                <form action="#" onSubmit= {handleSubmit}  className="signupForm-factura" name="signupform">
                    <h2>Factura</h2>
                    <ul className="noBullet-factura">
                        <li>
                            <label htmlFor="">Nombre del evento</label>
                           <input className="inputFields-factura" type="text" value={name} readOnly= {true}  onChange = {(e)=>{setName(e.target.value)}} />
                        </li>
                    
                        <li>
                            <label htmlFor="">Locación</label>
                            <input className="inputFields-factura"  type="text" value={location} readOnly= {true}  onChange = {(e)=>{setLocation(e.target.value)}}/>
                        </li>
                        <li>
                            <label className="labels-factura" htmlFor="">Servicios</label>
                            <ul className="services-list">
                                {services.map((service) => (
                                    <li className="services-li" key = {service.id} >{service.name}: ${service.price}</li>
                                ))}
                            </ul>
                        </li>
                        <li>
                            <label className="labels-factura" htmlFor="">Monto total</label>
                            <input className="inputFields-factura" type="text" value = {montoTotal + " $"} readOnly= {true}/>
                        </li>
                        
                    </ul>
                        <div id="center-btn">
                            
                            <input type="submit" id="join-btn-login" name="join" alt="Join" value="Pagar"/>
                        </div>
                
                </form>
                
            </div>
            </div>
        
        </>
    )
}