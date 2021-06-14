import './SignUpStyles.scss'
import React, { useState, useEffect } from 'react';
import Axios from 'axios';

export default function (){

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [direccion, setDireccion] = useState("")
    const [telefono, setTelefono] = useState("")
    const [cedula, setCedula] = useState("")
    
    const handleSubmit = event => {
        event.preventDefault();
        console.log(cedula)
        Axios.post("./api/auth/signup", {
            name: name,
            lastName: lastName,
            email: email,
            password: password,
            roles: ["user"],
            direccion: direccion,
            telefono: telefono,
            cedula: cedula
        }).then((response) =>{
            
        }).catch(err => {
            alert(err.response.data.message)
        })
        console.log("YA PASO")
       
        
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
                    <h2>Crear una cuenta</h2>
                    <ul className="noBullet">
                        <li>
                            <input type="text" className="inputFields" id="nombre" name="nombre" placeholder="Nombre"  required onChange = {(e)=>{setName(e.target.value)}}/>
                        </li>
                        <li>
                            <input type="text" className="inputFields" id="apellido" name="apellido" placeholder="Apellido"  required onChange = {(e)=>{setLastName(e.target.value)}}/>
                        </li>
                        <li>
                            <input type="number" className="inputFields" id="cedula" name="cedula" placeholder="Cedula"  required onChange = {(e)=>{setCedula(e.target.value)}}/>
                        </li>
                        <li>
                            <input type="number" className="inputFields" id="telefono" name="telefono" placeholder="Telefono"  required onChange = {(e)=>{setTelefono(e.target.value)}}/>
                        </li>
                        <li>
                            <input type="text" className="inputFields" id="direccion" name="direccion" placeholder="Direccion"  required onChange = {(e)=>{setDireccion(e.target.value)}}/>
                        </li>
                        <li>
                            <input type="email" className="inputFields" id="email" name="email" placeholder="Email"  required onChange = {(e)=>{setEmail(e.target.value)}}/>
                        </li>
                        <li>
                            <input type="password" className="inputFields" id="password" name="password" placeholder="Contraseña"  required onChange = {(e)=>{setPassword(e.target.value)}}/>
                        </li>
                    <div className="boton">

                            <input type="submit" id="join-btn" name="join" alt="Join" value="Registrarme"/>
                    </div>
                    </ul>
                
                </form>
                
            </div>
            </div>
        
        </>
    )
}