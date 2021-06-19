import './CrearEvento.scss';
import React, { useState } from 'react';
import Axios from 'axios';
import { useHistory } from "react-router-dom"


export default function CrearEvento (){

    const fecha =  new Date ();
    
    console.log(fecha+2);

    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [number, setNumber] = useState("")
    const [date, setDate] = useState("")
    const redirect = useHistory();

    const handleSubmit =  event => {
        event.preventDefault()
        Axios.post("https://dry-shelf-94984.herokuapp.com/api/event/create", {
            name: name,
            location: location,
            cant_personas: number,
            date: date,
            user_id: localStorage.getItem('user_id'),
            token: localStorage.getItem('SavedToken')
        }).then((res) =>{
            redirect.push("/Catalogo")
            alert("Prueba")
            //alert(res.data.message)
        }).catch(err => {
            alert(err.response.data.message)
        })
        
    }
    return(
        <>
            <div className="cont-crear-eventos">
            <div className="signupSection-crear-eventos">
                <div className="info">
                    <h1>E-Vent</h1>
                    <br></br>
                    <h1>LOGO</h1>
                </div>
                
                <form action="#" onSubmit= {handleSubmit} method="POST" className="signupForm-crear-eventos" name="signupform">
                    <h2>Crea tu evento</h2>
                    <ul className="noBullet-crear-eventos">
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
                            <input type="date" className="inputFields" id="date" name="date" placeholder="número de Personas" min="2017-04-01" required onChange = {(e)=>{setDate(e.target.value)}}/>
                        </li>
                        
                        <li id="center-btn">
                            <input type="submit" id="join-btn-crear-eventos" name="join" alt="Join" value="Crear Evento"/>
                        </li>
                    </ul>
                
                </form>
                
            </div>
            </div>
        
        </>
    )
}