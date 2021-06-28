import './FacturacionStyles.scss';
//import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useParams } from "react-router-dom"
import React, { useState, useEffect } from 'react';


export default function (){

    {/*const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [number, setNumber] = useState("")
    const [date, setDate] = useState("")
    const redirect = useHistory();*/}
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [montoTotal, setMontoTotal] = useState("")
    const [services, setServices] = useState([])
    const { id } = useParams();

    useEffect (() => {
        getInfo()
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getInfo = () =>{



        console.log('Id: ' + id)

        Axios.get("http://localhost:5000/api/event/full/" + id).then((res)=>{
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

        Axios.put("http://localhost:5000/api/event/completar/" + id, {
            user_id: localStorage.getItem('user_id'),
            montoTotal: montoTotal,

        })
        console.log("Id: " + id)
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
                           <input className="inputFields-factura" type="text" value={name}  required onChange = {(e)=>{setName(e.target.value)}} />
                        </li>
                    
                        <li>
                            <label htmlFor="">Locación</label>
                            <input className="inputFields-factura"  type="text" value={location}  required onChange = {(e)=>{setLocation(e.target.value)}}/>
                        </li>
                        <li>
                            <p htmlFor="">Servicios</p>
                            <ul className="services-list">
                                {services.map((service) => (
                                    <li className="services-li" key = {service.id} >{service.name}: ${service.price}</li>
                                ))}
                            </ul>
                            {/*<input className="inputFields-factura" type="text"  />*/}
                        </li>
                        <li>
                            <label htmlFor="">Monto total</label>
                            <input className="inputFields-factura" type="text" value = {montoTotal} readOnly= {true}/>
                        </li>
                        
                    </ul>
                        <div id="center-btn">
                            <input type="submit" id="join-btn-factura" name="join" alt="Join" value="Ir a Pagar" />
                        </div>
                
                </form>
                
            </div>
            </div>
        
        </>
    )
}