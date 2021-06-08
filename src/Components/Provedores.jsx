import './ProvedoresStyles.scss'
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Router } from 'react-router';

export default function (){

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
        

        Axios.post("./api/auth/signup", {
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
                            <label htmlfor="telefono"></label>
                            <input type="number" className="inputFields" id="telefono" name="telefono" placeholder="Telefono"  required onChange = {(e)=>{setTelefono(e.target.value)}}/>
                        </li>
                        <li>
                            <label htmlfor="direccion"></label>
                            <input type="text" className="inputFields" id="direccion" name="direccion" placeholder="Direccion"  required onChange = {(e)=>{setDireccion(e.target.value)}}/>
                        </li>
                        <li>
                            <label htmlfor="email"></label>
                            <input type="email" className="inputFields" id="email" name="email" placeholder="Email"  required onChange = {(e)=>{setEmail(e.target.value)}}/>
                        </li>
                        <li>
                            <label htmlfor="password"></label>
                            <input type="password" className="inputFields" id="password" name="password" placeholder="Contraseña"  required onChange = {(e)=>{setPassword(e.target.value)}}/>
                        </li>
                        <li>
                            <label htmlfor="image"></label>
                            <input type="file" className="inputFields" id="image" name="image" placeholder="Imagen"  required onChange = {(e)=>{setImage(e.target.files[0]); console.log("Input foto",image)}}/>
                        </li>
                    </ul>
                            <input type="submit" id="join-btn" name="join" alt="Join" value="Crear"/>
                
                </form>
                
            </div>
            </div>
        
        </>
    )
}