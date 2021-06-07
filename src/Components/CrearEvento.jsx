import './CrearEvento.scss';
import React, { useState, useEffect } from 'react';
import Axios from 'axios';

export default function (){

    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [number, setNumber] = useState("")
    const [date, setDate] = useState("")
    
    const handleSubmit =  event => {
        event.preventDefault()
        console.log("SENT TOKEN: "+localStorage.getItem('SavedToken'))
        Axios.post("http://localhost:5000/api/event/create", {
            name: name,
            location: location,
            cant_personas: number,
            date: date,
            user_id: localStorage.getItem('user_id'),
            token: localStorage.getItem('SavedToken')
            
        }).then((res) =>{
            alert("Prueba")
            alert(res.data.message)
        }).catch(err => {
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
                    <h2>Crear tu evento</h2>
                    <ul className="noBullet">
                        <li>
                            <label htmlfor="nombre de la empresa"></label>
                            <input type="text" className="inputFields" id="nombre" name="nombre" placeholder="Nombre"  required onChange = {(e)=>{setName(e.target.value)}}/>
                        </li>
                    
                        <li>
                            <label htmlfor="locación"></label>
                            <input type="text" className="inputFields" id="location" name="location" placeholder="Locación"  required onChange = {(e)=>{setLocation(e.target.value)}}/>
                        </li>
                        <li>
                            <label htmlfor="Numero de personas"></label>
                            <input type="number" className="inputFields" id="number" name="number" placeholder="número de Personas"  required onChange = {(e)=>{setNumber(e.target.value)}}/>
                        </li>

                        <li>
                            <label htmlfor="Fecha del evento"></label>
                            <input type="date" className="inputFields" id="date" name="date" placeholder="número de Personas"  required onChange = {(e)=>{setDate(e.target.value)}}/>
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