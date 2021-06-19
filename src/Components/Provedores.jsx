import './ProvedoresStyles.scss'
import React, { useState } from 'react';
import Axios from 'axios';
import {Link}from "react-router-dom";


export default function Provedores (){

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [image, setImage] = useState("")
    const [imageURL, setImageURL] = useState("")
    const [direccion, setDireccion] = useState("")
    const [telefono, setTelefono] = useState("")
    
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
        console.log(file)
        console.log(file.secure_url)
        setImageURL(file.secure_url)
        console.log(imageURL)
        

        Axios.post("https://dry-shelf-94984.herokuapp.com/api/auth/signup", {
            name: name,
            lastName: null,
            email: email,
            password: password,
            roles: ["proveedor"],
            imageURL: file.secure_url,
            direccion: direccion,
            telefono: telefono
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
            <div className="cont-add-proveedores">
            <div className="signupSection-add-proveedores">
                <div className="info-add-proveedores">
                    <h1>E-Vent</h1>
                    <br></br>
                    <h1>LOGO</h1>
                </div>
                
                <form action="#" onSubmit= {handleSubmit} method="POST" className="signupForm-add-proveedores" name="signupform">
                    <h2>Agregar un provedor</h2>
                    <ul className="noBullet-add-proveedores">
                        <li>
                            <input type="text" className="inputFields-add-proveedores" id="nombre" name="nombre" placeholder="Nombre"  required onChange = {(e)=>{setName(e.target.value)}}/>
                        </li>
                        <li>
                            <input type="number" className="inputFields-add-proveedores" id="telefono" name="telefono" placeholder="Telefono"  required onChange = {(e)=>{setTelefono(e.target.value)}}/>
                        </li>
                        <li>
                            <input type="text" className="inputFields-add-proveedores" id="direccion" name="direccion" placeholder="Direccion"  required onChange = {(e)=>{setDireccion(e.target.value)}}/>
                        </li>
                        <li>
                            <input type="email" className="inputFields-add-proveedores" id="email" name="email" placeholder="Email"  required onChange = {(e)=>{setEmail(e.target.value)}}/>
                        </li>
                        <li>
                            <input type="password" className="inputFields-add-proveedores" id="password" name="password" placeholder="Contraseña"  required onChange = {(e)=>{setPassword(e.target.value)}}/>
                        </li>
                        <li>
                            <input type="file" className="inputFields-add-proveedores" id="image" name="image" placeholder="Imagen"  required onChange = {(e)=>{setImage(e.target.files[0])}}/>
                        </li>
                    </ul>
                    
                            <input type="submit" id="join-btn" name="join" alt="Join" value="Agregar"/>

                            <Link to="/ProveedoresAdmin" id="join-btn-2" >Ver Proveedores</Link>
                
                </form>
                
            </div>
            </div>
        
        </>
    )
}