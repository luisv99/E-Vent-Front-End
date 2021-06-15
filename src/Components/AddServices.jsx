import './AddServicesStyles.css'
import React, { useState } from 'react';
import Axios from 'axios';
import { useHistory } from "react-router-dom"
import {Link}from "react-router-dom";

export default function AddServices(){

    const redirect = useHistory();

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [promotion, setPromotion] = useState(false)
    const [available, setAvailable] = useState(true)
    const [image, setImage] = useState("")
    
    const handleSubmit = async event => {
        event.preventDefault();
        const data = new FormData()
        data.append('file', image)
        data.append('upload_preset', 'proveedores')
        const res = await fetch("https://api.cloudinary.com/v1_1/gtoro98/image/upload",
        {
            method: "POST",
            body: data,
        })

        const file = await res.json()
        console.log('File:');
        console.log(file)
        console.log('File.Secure_URL:')
        
        console.log(file.secure_url)


        Axios.post("https://dry-shelf-94984.herokuapp.com/api/service/create", {
            name: name,
            price: price,
            description: description,
            promotion: promotion,
            available: available,
            image: file.secure_url,
            user_id: localStorage.getItem('user_id'),
            roles: localStorage.getItem('roles'),
            token: localStorage.getItem('SavedToken')
        }).then((res) =>{
            alert("Funcionó!")
            alert(res.data.message)
            //redirect.push("/ServiciosAdmin")
            window.location.reload();
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
            <div className="signupSectionServices">
                <div className="infoServices">
                    <h1>E-Vent</h1>
                    <br></br>
                    <h1>LOGO</h1>
                </div>
                
                <form action="#" onSubmit= {handleSubmit} method="POST" className="addServiceForm" name="signupform">
                    <h2>Agregar un Servicio</h2>
                    <ul className="noBullet">
                        
                        <li>
                            <input type="text" className="inputFields" id="nombre" name="nombre" placeholder="Nombre" required onChange = {(e)=>{setName(e.target.value)}}/>
                        </li>

                        <li>
                            <input type="file" className="inputFields" id="name" name="name" placeholder="Foto" required onChange = {(e)=>{setImage(e.target.files[0])}}/>
                        </li>

                        <li>
                            <textarea cols="40" rows="4" type="text" className="inputFields" id="description" name="Description" placeholder="Description" required onChange = {(e)=>{setDescription(e.target.value)}}/>
                        </li>
                        
                        <li>
                            <input type="text" className="inputFields" id="price" name="price" placeholder="Price" required onChange = {(e)=>{setPrice(e.target.value)}}/>
                        </li>
                        
                        <li>
                            <label htmlFor="direccion">Esta en promocion?</label>
                            <input type="checkbox" className="inputFields" id="direccion" name="Promocion" placeholder="Promocion" onChange = {(e)=>{setPromotion(e.target.value)}}/>
                        </li>
                        
                        <li>
                            <label htmlFor="available">Esta Disponible?</label>
                            <input type="checkbox" className="inputFields" id="available" name="Promocion" placeholder="Promocion" onChange = {(e)=>{setAvailable(e.target.value)}}/>
                        </li>
                    </ul>
                            <input type="submit" id="join-btn" name="join" alt="Join" value="Agregar"/>
                
                            <Link to="/ServiciosAdmin" id="join-btn-2" >Listado de servicio</Link>
                            
                </form>
                
            </div>
            </div>
        
        </>
    )
}