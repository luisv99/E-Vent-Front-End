import './ProvedoresStyles.scss'
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Router } from 'react-router';

export default function (){

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [promocion, setPromocion] = useState(false)
    const [disponibilidad, setDisponibilidad] = useState(true)
    
    const handleSubmit = async event => {
        event.preventDefault();

        Axios.post("./api/auth/signup", {
            name: name,
            description: description,
            promocion: promocion,
            disponibilidad: disponibilidad,
        }).then((res) =>{
            alert("Funcionó!")
            alert(res.data.message)
        },
        console.log("no se que pasa"),
        //alert(response.data.message),
       // alert(response.data.message),
        ).catch(err => {
            alert("Error: " + err.message)
            alert(err.response.data.message)
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
                            <label htmlfor="direccion">Esta en promocion?</label>
                            <input type="checkbox" className="inputFields" id="direccion" name="Promocion" placeholder="Promocion"  required onChange = {(e)=>{setPromocion(e.target.value)}}/>
                        </li>
                        <li>
                            <label htmlfor="email"></label>
                            <input type="email" className="inputFields" id="email" name="Disponibilidad" placeholder="Disponibilidad"  required onChange = {(e)=>{setDisponibilidad(e.target.value)}}/>
                        </li>
                        <li>
                            <label htmlfor="telefono"></label>
                            <textarea cols="40" rows="4" type="text" className="inputFields" id="telefono" name="Description" placeholder="Description"  required onChange = {(e)=>{setDescription(e.target.value)}}/>
                        </li>
                    </ul>
                            <input type="submit" id="join-btn" name="join" alt="Join" value="Crear"/>
                
                </form>
                
            </div>
            </div>
        
        </>
    )
}