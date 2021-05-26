import React, { useState, useEffect } from 'react';
import './LoginStyles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars,faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import Axios from 'axios';

export default function Login(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const handleSubmit = event => {
        event.preventDefault();
        Axios.post("./api/auth/logIn", {
            email: email,
            password: password,
        }).then((response) =>{
            alert("Succesful LogIn");
        },
        (error) =>{
            alert(error.response.data.message);
        });
    }

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
                
                <form onSubmit={handleSubmit} method="POST" className="signupForm" name="signupform">
                    <h2>Iniciar Sesion</h2>
                    <ul className="noBullet">
                        <li>
                            <label htmlfor="email"></label>
                            <input type="email" className="inputFields" id="email" name="email" placeholder="Email"  required onChange = {(e)=>{setEmail(e.target.value)}}/>
                        </li>
                        <li>
                            <label htmlfor="password"></label>
                            <input type="password" className="inputFields" id="password" name="password" placeholder="Contraseña"  required onChange = {(e)=>{setPassword(e.target.value)}}/>
                        </li>
                        <li id="center-btn">
                            <input type="submit" id="join-btn" name="join" alt="Join" value="Entrar a E-Vent"/>
                        </li>
                    </ul>
                
                </form>
                
               
            </div>
               
        </>
    )
}