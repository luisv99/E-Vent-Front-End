import './AddServicesStyles.css';
import './editServicios.css'
import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from "react-router-dom"
import {Link}from "react-router-dom";


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
        getInfo();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getInfo = () =>{
        
        console.log('Id del servicio:' + servicio_id)

        Axios.get("https://dry-shelf-94984.herokuapp.com/api/servicesById/" + servicio_id).then((res)=>{
            setName(res.data.name)
            setPrice(res.data.price)
            setDescription(res.data.description)
            setPromotion(res.data.promotion)
            setAvailable(res.data.available)
            setImage(res.data.image)
            
            console.log(res);
            console.log(res.data);
            console.log(res.data.name);
        }
        ).catch(err =>{
            console.log(err)
        })
    }

    const editServicio = () =>{
        //event.preventDefault();
        
        Axios.put("https://dry-shelf-94984.herokuapp.com/api/services/" + servicio_id, {
            id: servicio_id,
            name: name,
            price: price,
            description: description,
            promotion: promotion,
            available: available,
            image: image
        }).then((response) =>{
            alert("Funciona")
            redirect.push("/ServiciosAdmin")
        }).catch(err => {
            alert(err.response.data.message)
        })
        
        
    }

    return(
        <>
            <div className="cont-services" id="cont-services">
            <div className="signupSectionServices">
                <div className="infoServices">
                    <h1>E-Vent</h1>
                    <br></br>
                    <h1>LOGO</h1>
                </div>
                
                <form action="#" onSubmit= {editServicio} method="POST" className="addServiceForm" name="signupform">
                    <h2>Editar "{name}"</h2>
                    <ul className="noBulletServices">
                        
                        <li>
                            <input type="text" className="inputFields-services" id="nombre" name="nombre" placeholder="Nombre" required value={name} onChange = {(e)=>{setName(e.target.value); }}/>
                        </li>

                        <li>
                            <input type="text" className="inputFields-services" id="name" name="name" placeholder="Foto" required value={image} onChange = {(e)=>{setImage(e.target.value)}}/>
                        </li>

                        <li>
                            <textarea cols="40" rows="4" type="text" className="inputFields-services" id="description" name="Description" placeholder="Description" required value={description} onChange = {(e)=>{setDescription(e.target.value)}}/>
                        </li>
                        
                        <li>
                            <input type="text" className="inputFields-services" id="price" name="price" placeholder="Price" required value={price} onChange = {(e)=>{setPrice(e.target.value)}}/>
                        </li>
                        
                        <li>
                            <label htmlFor="direccion">Esta en promocion?</label>
                            <input type="checkbox" className="inputFields-services" id="direccion" name="Promocion" placeholder="Promocion" value={promotion} onChange = {(e)=>{setPromotion(e.target.value); console.log(e.target.value);} }/>
                        </li>
                        
                        <li>
                            <label htmlFor="direccion">Esta Disponible?</label>
                            <input type="checkbox" className="inputFields-services" id="direccion" name="Promocion" placeholder="Promocion" value={available} onChange = {(e)=>{setAvailable(e.target.value); console.log(e.target.value);}}/>
                        </li>
                    </ul>
                            <input type="submit" id="join-btn-services" name="join" alt="Join" value="Aceptar"/>

                            <Link to="/ServiciosAdmin" id="join-btn-2" >Listado de servicios</Link>
                
                </form>
                
            </div>
            </div>
    
	

        </>
        
    )
}