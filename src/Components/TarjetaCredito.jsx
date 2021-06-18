import './TarjetaCredito.scss';
import React, { useState, useEffect } from 'react';
import Axios from 'axios';

export default function TarjetaCredito (){

    return(
        <>
            <div className="contCredito">
            <div className="signupSectionCredito">
                <div className="infoCredito">
                    <h1>E-Vent</h1>
                    <br></br>
                    <h1>LOGO</h1>
                </div>
                
                <form action="#"   className="signupFormCredito" name="signupform">
                    <h2>Tarjeta De Credito</h2>
                    <ul className="noBulletCredito">
                        <li>
                            <label htmlfor="Nombre"></label>
                            <input type="cc-given-name" className="inputFieldsCredito" id="nombre" name="nombre" placeholder="Nombre"  />
                        </li>
                    
                        <li>
                            <label htmlfor="Número de Tarjeta"></label>
                            <input type="cardNumber" className="inputFieldsCredito" id="location" name="numTarjeta" placeholder="Número De Tarjeta"  />
                        </li>
                        <li>
                            <label htmlfor="Numero de personas"></label>
                            <input type="cc-csc" maxLength="3"  className="inputFieldsCredito" id="number" name="number" placeholder="CVV"   />
                        </li>

                        <li>
                            <label htmlfor="Fecha del evento"></label>
                            <input type="month" className="inputFieldsCredito" id="date" name="date" placeholder="número de Personas"  />
                        </li>
                        <li id="center-btn">
                            <input type="submit" id="join-btn" name="join" alt="Join" value="Pagar E-vent"/>
                        </li>
                    </ul>
                
                </form>
                
            </div>
            </div>
        
        </>
    )
}