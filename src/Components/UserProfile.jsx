import './UserProfileStyles.scss'
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useHistory, useParams } from "react-router-dom"
import {Link}from "react-router-dom";

export default function UserProfile(){

    const redirect = useHistory();

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    //const [password, setPassword] = useState("")
    const [direccion, setDireccion] = useState("")
    const [telefono, setTelefono] = useState("")
    const [cedula, setCedula] = useState("")
    const [password, setPassword] = useState("")
    //const redirect = useHistory();
    const { user_id } = useParams();

    useEffect (() => {
        getInfo()
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getInfo = () =>{

        console.log('Id del usuario:' + user_id)

        Axios.get("http://localhost:5000/api/user/" + user_id).then((res)=>{
            setName(res.data.name)
            setLastName(res.data.lastName)
            setEmail(res.data.email)
            setDireccion(res.data.direccion)
            setTelefono(res.data.telefono)
            setCedula(res.data.cedula)
            
            
            console.log('usuario: ' + res.data)
            console.log(name)
        }
        ).catch(err =>{
            console.log(err)
        })
    }

    const editUser = () =>{
        //event.preventDefault();
        console.log(lastName)
        Axios.put("https://dry-shelf-94984.herokuapp.com/api/proveedor/" + user_id, {
            id: user_id,
            name: name,
            lastName: lastName,
            email: email, 
            direccion: direccion,
            telefono: telefono,
            cedula: cedula
        }).then((response) =>{
            localStorage.clear();
            alert("Funciona")
            redirect.push("/UserProfile/" + user_id)
        }).catch(err => {
            alert(err.response.data.message)
        })
        
        
    }

    const deleteUser = (e) => {
        console.log("Delete")
        e.preventDefault();
        Axios.delete("https://dry-shelf-94984.herokuapp.com/api/proveedor/" + user_id).then((res) => {
            alert(res.data.message)
            localStorage.clear();
            redirect.push("/")
        }).catch(err => {
            alert(err.response.data.message)
            alert("error")
        });
    };

    const changePassword = event => {
        event.preventDefault();
        
        Axios.post("http://localhost:5000/api/auth/changePassword", {
            id: user_id,
            password: password
        }).then((res) =>{
            alert(res.data.message);
        
        },
        (error) =>{
            alert(error.response.data.message);
        });
    }



    return(
        <>
            <div className="cont-registro">
            <div className="signupSection-registro">
                <div className="info-registro">
                    <h1>E-Vent</h1>
                    <br></br>
                    <h1>LOGO</h1>
                </div>
                
                <form action="#" onSubmit= {editUser} method="POST" data-testid = "editProfileForm" className="signupForm-registro" name="signupform">
                    <h2>Mi cuenta</h2>
                    <ul className="noBullet-registro">
                        <li>
                            <input type="text" className="inputFields-registro" id="nombre" data-testid='nombre' name="nombre" placeholder="Nombre" value={name}  required onChange = {(e)=>{setName(e.target.value)}}/>
                        </li>
                        <li>
                            <input type="text" className="inputFields-registro" id="apellido" data-testid="apellido" name="apellido" placeholder="Apellido" value={lastName} onChange = {(e)=>{setLastName(e.target.value)}}/>
                        </li>
                        <li>
                            <input type="number" className="inputFields-registro" id="cedula" data-testid="cedula" name="cedula" placeholder="Cedula" value={cedula}  onChange = {(e)=>{setCedula(e.target.value)}}/>
                        </li>
                        <li>
                            <input type="number" className="inputFields-registro" id="telefono" data-testid="telefono" name="telefono" placeholder="Telefono" value={telefono}  required onChange = {(e)=>{setTelefono(e.target.value)}}/>
                        </li>
                        <li>
                            <input type="text" className="inputFields-registro" id="direccion" data-testid="direccion" name="direccion" placeholder="Direccion" value={direccion}  required onChange = {(e)=>{setDireccion(e.target.value)}}/>
                        </li>
                        <li>
                            <input type="email" className="inputFields-registro" id="email" data-testid="email" name="email" placeholder="Email" value={email}  required onChange = {(e)=>{setEmail(e.target.value)}}/>
                        </li>

                    </ul>
                    
                    <div className="boton">
                            <input type="submit" id="join-btn-delete" name="join" alt="Join" value="Guardar Cambios"/>
                    </div>
                            <input onClick={e => {deleteUser(e)}} className="join-btn-delete" name="join" alt="Join" value="Eliminar Cuenta"/>
                            <li>
                                <input type="password" className="inputFields-registro" id="password" data-testid="password" name="password" placeholder="New Password" value={password}  onChange = {(e)=>{setPassword(e.target.value)}}/>
                            </li>
                            <button onClick = {(e) => {changePassword(e)}}>Reset Password</button>
                </form>
                            
                
            </div>
            </div>
        </>
    );
};
