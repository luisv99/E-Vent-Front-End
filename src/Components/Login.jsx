import React, { useState } from 'react';
import './LoginStyles.scss'
import Axios from 'axios';
import { useHistory } from "react-router-dom"


export default function Login(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const redirect = useHistory();

    const handleSubmit = event => {
        event.preventDefault();
        Axios.post("./api/auth/logIn", {
            email: email,
            password: password,
        }).then((response) =>{
            alert("Succesful LogIn");
            localStorage.setItem("SavedToken", response.data.accessToken)
            localStorage.setItem("user_id", response.data.id)
            localStorage.setItem("roles", response.data.roles)
            redirect.push("/")

        

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
                    
                    <form onSubmit={handleSubmit} method="POST" className="signupForm" name="signupform">
                        <h2>Iniciar Sesion</h2>
                        <ul className="noBullet2">
                            <li>
                                <label htmlFor="email"></label>
                                <input type="email" className="inputFields" id="email" name="email" placeholder="Email"  required onChange = {(e)=>{setEmail(e.target.value)}} />
                            </li>
                            <li>
                                <label htmlFor="password"></label>
                                <input type="password" className="inputFields" id="password" name="password" placeholder="Contraseña"  required onChange = {(e)=>{setPassword(e.target.value)}} />
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