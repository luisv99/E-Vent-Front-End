import './ProvedoresStyles.scss'
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Router } from 'react-router';

export default function (){

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [promotion, setPromocion] = useState(false)
    const [available, setDisponibilidad] = useState(true)
    
    const handleSubmit = async event => {
        event.preventDefault();
        console.log(promotion)
        Axios.post("./api/service/create", {
            name: name,
            price: price,
            description: description,
            promotion: promotion,
            available: available,
            user_id: localStorage.getItem('user_id'),
            roles: localStorage.getItem('roles'),
            token: localStorage.getItem('SavedToken')
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
                            <label htmlfor="name"></label>
                            <input type="text" className="inputFields" id="name" name="name" placeholder="Name"  required onChange = {(e)=>{setName(e.target.value)}}/>
                        </li>
                        <li>
                            <label htmlfor="description"></label>
                            <textarea cols="40" rows="4" type="text" className="inputFields" id="description" name="Description" placeholder="Description"  required onChange = {(e)=>{setDescription(e.target.value)}}/>
                        </li>
                        <li>
                            <label htmlfor="price"></label>
                            <input type="text" className="inputFields" id="price" name="price" placeholder="Price"  required onChange = {(e)=>{setPrice(e.target.value)}}/>
                        </li>
                    </ul>
                            <input type="submit" id="join-btn" name="join" alt="Join" value="Crear"/>
                
                </form>
                
            </div>
            </div>
        
        </>
    )
}