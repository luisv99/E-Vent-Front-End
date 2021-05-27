import './ProvedoresStyles.scss'
import React, { useState, useEffect } from 'react';
import Axios from 'axios';

export default function (){

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const handleSubmit =  event => {
        event.preventDefault()
        Axios.post("http://localhost:5000/api/auth/signup", {
            name: name,
            lastName: lastName,
            email: email,
            password: password,
        }).then((res) =>{
            alert("Prueba")
            alert(res.data.message)
        },
        console.log("no se que pasa"),
        //alert(response.data.message),
       // alert(response.data.message),
        (error) =>{
           // alert(error.response.data.message)
        })
        
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
                
                <form action="#" onSubmit= {handleSubmit} method="POST" className="signupForm" name="signupform">
                    <h2>Agregar un provedor</h2>
                    <ul className="noBullet">
                        <li>
                            <label htmlfor="nombre de la empresa"></label>
                            <input type="text" className="inputFields" id="nombre" name="nombre" placeholder="Nombre"  required onChange = {(e)=>{setName(e.target.value)}}/>
                        </li>
                    
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
            </div>
        
        </>
    )
}