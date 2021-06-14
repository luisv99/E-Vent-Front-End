import './editProveedoresStyles.css';
import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import { Redirect } from 'react-router';
import {
    Link
  } from "react-router-dom";

export default function EditProveedores(){

    const { proveedor_id } = useParams();

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [image, setImage] = useState("")
    const [imageURL, setImageURL] = useState("")
    const [direccion, setDireccion] = useState("")
    const [telefono, setTelefono] = useState("")
    

    useEffect (() => {
        
        getInfo()
    }, []);

    const getInfo = () =>{
        
        console.log(proveedor_id)

        Axios.get("http://localhost:5000/api/user/" + proveedor_id).then((res)=>{
            setName(res.data.name)
            setEmail(res.data.email)
            setPassword(res.data.password)
            setImage(res.data.image)
            setDireccion(res.data.direccion)
            setTelefono(res.data.telefono)
            
            
            console.log(res.data)
        }
        ).catch(err =>{
            console.log(err)
        })
    }

    const editProveedor = () =>{
        //event.preventDefault();
        
        console.log(proveedor_id)
        

        Axios.put("http://localhost:5000/api/proveedor/" + proveedor_id, {
            id: proveedor_id,
            name: name,
            email: email,
            direccion: direccion,
            telefono: telefono,
        }).then((response) =>{
            alert("Funciona")
            alert(response.data.message)
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
                
                <form action="#"  onSubmit= {editProveedor} method="POST" className="addServiceForm" name="signupform">
                    <h2>Editar a ...</h2>
                    <ul className="noBullet">
                        
                        <li>
                            <input type="text" className="inputFields" id="nombre" name="nombre" value = {name} onChange = {(e)=>{setName(e.target.value)}} required />
                        </li>

                        <li>
                            <input type="text" className="inputFields"  value = {image} onChange = {(e)=>{setImage(e.target.value)}} required />
                        </li>

                        
                        <li>
                            <input type="text" className="inputFields" id="price" name="price" placeholder="Email"  value = {email} onChange = {(e)=>{setEmail(e.target.value)}}required />
                        </li>

                        <li>
                            <input type="text" className="inputFields" placeholder="Telefono" value = {telefono} onChange = {(e)=>{setTelefono(e.target.value)}}/>
                        </li>
                        
                        <li>
                            <textarea type="text" className="inputFields" id="direccion" name="Promocion" placeholder="Direccion" value = {direccion} onChange = {(e)=>{setDireccion(e.target.value)}}/>
                        </li>

                        
                    </ul>
                            <input type="submit" id="join-btn" name="join" alt="Join" value="Editar"/>
                            
                
                </form>
                
            </div>
            </div>
    
	

        </>
        
    )
}