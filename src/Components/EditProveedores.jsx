import './editProveedoresStyles.css'
import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIcons } from '@fortawesome/free-solid-svg-icons'


export default function EditProveedores(){

    const redirect = useHistory();

    const { proveedor_id } = useParams();

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [image, setImage] = useState("")
    const [direccion, setDireccion] = useState("")
    const [telefono, setTelefono] = useState("")
    

    useEffect (() => {
        getInfo()
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getInfo = () =>{
        
        console.log('Id del proveedor:' + proveedor_id)

        Axios.get("https://dry-shelf-94984.herokuapp.com/api/user/" + proveedor_id).then((res)=>{
            setName(res.data.name)
            setEmail(res.data.email)
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
        Axios.put("https://dry-shelf-94984.herokuapp.com/api/proveedor/" + proveedor_id, {
            id: proveedor_id,
            name: name,
            email: email,
            direccion: direccion,
            telefono: telefono,
            image: image
        }).then((response) =>{
            alert("Funciona")
            redirect.push("/ProveedoresAdmin")
        }).catch(err => {
            alert(err.response.data.message)
        })
        
        
    }

    return(
        <>
            <div className="cont-edit-proveedores">
            <div className="signupSection-edit-proveedores">
                <div className="infoServices">
                    <h1>E-Vent</h1>
                    <br></br>
                    <div className="shop-login">
                        <FontAwesomeIcon icon={faIcons}  className="fas" />
                    </div>
                </div>
                
                <form action="#" onSubmit= {editProveedor} method="POST" className="addServiceForm-edit-proveedores" name="signupform">
                    <h2>Editar a "{name}"</h2>
                    <ul className="noBullet-edit-proveedores">
                        
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