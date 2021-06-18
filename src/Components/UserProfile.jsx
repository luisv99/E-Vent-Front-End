import './UserProfileStyles.scss'
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useParams } from "react-router-dom"
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
  

export default function UserProfile(){
 
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    //const [password, setPassword] = useState("")
    const [direccion, setDireccion] = useState("")
    const [telefono, setTelefono] = useState("")
    const [cedula, setCedula] = useState("")
    //const redirect = useHistory();
    const { user_id } = useParams();

    useEffect (() => {
        getInfo()
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getInfo = () =>{

        console.log('Id del usuario:' + user_id)

        Axios.get("https://dry-shelf-94984.herokuapp.com/api/user/" + user_id).then((res)=>{
            setName(res.data.name)
            setLastName(res.data.lastName)
            setEmail(res.data.email)
            setDireccion(res.data.direccion)
            setTelefono(res.data.telefono)
            setCedula(res.data.cedula)
            
            
            console.log(res.data)
        }
        ).catch(err =>{
            console.log(err)
        })
    }

    const editUser = () =>{
        //event.preventDefault();
        Axios.put("https://dry-shelf-94984.herokuapp.com/api/user/" + user_id, {
            id: user_id,
            name: name,
            lastName: lastName,
            email: email, 
            direccion: direccion,
            telefono: telefono,
            cedula: cedula
        }).then((response) =>{
            alert("Funciona")
            //redirect.push("/ProveedoresAdmin")
        }).catch(err => {
            alert(err.response.data.message)
        })
        
        
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
                
                <form action="#" onSubmit= {editUser} method="POST" className="signupForm-registro" name="signupform">
                    <h2>Mi cuenta</h2>
                    <ul className="noBullet-registro">
                        <li>
                            <input type="text" className="inputFields-registro" id="nombre" name="nombre" placeholder="Nombre" value={name}  required onChange = {(e)=>{setName(e.target.value)}}/>
                        </li>
                        <li>
                            <input type="text" className="inputFields-registro" id="apellido" name="apellido" placeholder="Apellido" value={lastName} required onChange = {(e)=>{setLastName(e.target.value)}}/>
                        </li>
                        <li>
                            <input type="number" className="inputFields-registro" id="cedula" name="cedula" placeholder="Cedula" value={cedula}  required onChange = {(e)=>{setCedula(e.target.value)}}/>
                        </li>
                        <li>
                            <input type="number" className="inputFields-registro" id="telefono" name="telefono" placeholder="Telefono" value={telefono}  required onChange = {(e)=>{setTelefono(e.target.value)}}/>
                        </li>
                        <li>
                            <input type="text" className="inputFields-registro" id="direccion" name="direccion" placeholder="Direccion" value={direccion}  required onChange = {(e)=>{setDireccion(e.target.value)}}/>
                        </li>
                        <li>
                            <input type="email" className="inputFields-registro" id="email" name="email" placeholder="Email" value={email}  required onChange = {(e)=>{setEmail(e.target.value)}}/>
                        </li>
                        {/*<li>
                            <input type="password" className="inputFields-registro" id="password" name="password" placeholder="Contraseña"  required onChange = {(e)=>{setPassword(e.target.value)}}/>
                        </li>*/}
                    <div className="boton">

                            <input type="submit" id="join-btn-registro" name="join" alt="Join" value="Registrarme"/>
                    </div>
                    </ul>
                
                </form>
                
            </div>
            </div>
        </>
    );
};
