import './FacturacionStyles.scss';
//import React, { useState, useEffect } from 'react';
//import Axios from 'axios';
//import { useHistory } from "react-router-dom"


export default function (){

    {/*const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [number, setNumber] = useState("")
    const [date, setDate] = useState("")
    const redirect = useHistory();*/}

    const handleSubmit =  event => {
    
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
                
                <form action="#" onSubmit= {handleSubmit} method="POST" className="signupForm-factura" name="signupform">
                    <h2>Factura</h2>
                    <ul className="noBullet-factura">
                        <li>
                            <label htmlFor="">Nombre del evento</label>
                           <input className="inputFields-factura" type="text"  />
                        </li>
                    
                        <li>
                            <label htmlFor="">Locación</label>
                            <input className="inputFields-factura"  type="text" />
                        </li>
                        <li>
                            <p htmlFor="">Servicios</p>
                            <ul className="services-list">
                                <li className="services-li">Servicio 1: price$</li>
                                <li className="services-li">Servicio 2: price$</li>
                                <li className="services-li">Servicio 3: price$</li>
                                <li className="services-li">Servicio 4: price$</li>
                            </ul>
                            {/*<input className="inputFields-factura" type="text"  />*/}
                        </li>
                        <li>
                            <label htmlFor="">Monto total</label>
                            <input className="inputFields-factura" type="text" />
                        </li>
                        
                    </ul>
                        <div id="center-btn">
                            <input type="submit" id="join-btn-factura" name="join" alt="Join" value="Ir a Pagar"/>
                        </div>
                
                </form>
                
            </div>
            </div>
        
        </>
    )
}