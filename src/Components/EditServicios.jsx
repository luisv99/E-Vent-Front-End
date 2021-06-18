import './AddServicesStyles.css';
import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from "react-router-dom"
import {
    Link
  } from "react-router-dom";

export default function EditProveedores(){

    const redirect = useHistory();

    const { servicio_id } = useParams();

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [promotion, setPromotion] = useState(false)
    const [available, setAvailable] = useState(true)
    const [image, setImage] = useState("")
    

    useEffect (() => {
        
        getInfo()
    }, []);

    const getInfo = () =>{
        
        console.log('Id del servicio:' + servicio_id)

        Axios.get("http://localhost:5000/api/services/" + servicio_id).then((res)=>{
            setName(res.data.name)
            setPrice(res.data.price)
            setDescription(res.data.description)
            setPromotion(res.data.promotion)
            setAvailable(res.data.available)
            setImage(res.data.image)
            
            
            console.log(res.data)
        }
        ).catch(err =>{
            console.log(err)
        })
    }

    const editServicio = () =>{
        //event.preventDefault();
        
        console.log(servicio_id)

        Axios.put("http://localhost:5000/api/services/" + servicio_id, {
            id: servicio_id,
            name: name,
            price: price,
            description: description,
            promotion: promotion,
            available: available,
            image: image
        }).then((response) =>{
            alert("Funciona")
            redirect.push("/")
        }).catch(err => {
            alert(err.response.data.message)
        })
        
        
    }

    return(
        <>
            <div className="cont">
            <div className="signupSectionServices">
                <div className="infoServices">
                    <h1>E-Vent</h1>
                    <br></br>
                    <h1>LOGO</h1>
                </div>
                
                <form action="#" onSubmit= {editServicio} method="POST" className="addServiceForm" name="signupform">
                    <h2>Editar "{name}"</h2>
                    <ul className="noBullet">
                        
                        <li>
                            <input type="text" className="inputFields" id="nombre" name="nombre" placeholder="Nombre" required value={name} onChange = {(e)=>{setName(e.target.value)}}/>
                        </li>

                        <li>
                            <input type="text" className="inputFields" id="name" name="name" placeholder="Name" required value={image} onChange = {(e)=>{setImage(e.target.value)}}/>
                        </li>

                        <li>
                            <textarea cols="40" rows="4" type="text" className="inputFields" id="description" name="Description" placeholder="Description" required value={description} onChange = {(e)=>{setDescription(e.target.value)}}/>
                        </li>
                        
                        <li>
                            <input type="text" className="inputFields" id="price" name="price" placeholder="Price" required value={price} onChange = {(e)=>{setPrice(e.target.value)}}/>
                        </li>
                        
                        <li>
                            <label htmlFor="direccion">Esta en promocion?</label>
                            <input type="checkbox" className="inputFields" id="direccion" name="Promocion" placeholder="Promocion" value={promotion} onChange = {(e)=>{setPromotion(e.target.value)}}/>
                        </li>
                        
                        <li>
                            <label htmlFor="direccion">Esta Disponible?</label>
                            <input type="checkbox" className="inputFields" id="direccion" name="Promocion" placeholder="Promocion" value={available} onChange = {(e)=>{setAvailable(e.target.value)}}/>
                        </li>
                    </ul>
                            <input type="submit" id="join-btn" name="join" alt="Join" value="Crear"/>
                
                </form>
                
            </div>
            </div>
    
	

        </>
        
    )
}