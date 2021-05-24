import React, { useState, useEffect } from 'react';
import './LoginStyles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars,faShoppingCart} from '@fortawesome/free-solid-svg-icons'


export default function Login(){
    return(
        <>
            <div className="cont">
                <div className="signupSection">
                    <div className="info">
                        <h1>E-Vent</h1>
                        <br></br>
                        <h1>LOGO</h1>
                    </div>
                    
                    <form action="#" method="POST" className="signupForm" name="signupform">
                        <h2>Iniciar Sesion</h2>
                        <ul className="noBullet">
                            <li>
                                <label htmlfor="email"></label>
                                <input type="email" className="inputFields" id="email" name="email" placeholder="Email"  required />
                            </li>
                            <li>
                                <label htmlfor="password"></label>
                                <input type="password" className="inputFields" id="password" name="password" placeholder="Contraseña"  required />
                            </li>
                            <li id="center-btn">
                                <input type="submit" id="join-btn" name="join" alt="Join" value="Entrar a E-Vent"/>
                            </li>
                        </ul>
                    
                    </form>
                    
                </div>
            </div>
               
        </>
    )
}