import './SignUpStyles.scss'
import React, { useState } from 'react';
import Axios from 'axios';
import { useHistory } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIcons } from '@fortawesome/free-solid-svg-icons'


export default function SignUp(){

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [direccion, setDireccion] = useState("")
    const [telefono, setTelefono] = useState("")
    const [cedula, setCedula] = useState("")
    const redirect = useHistory();

    
    const handleSubmit = event => {
        event.preventDefault();
        console.log(cedula)
        Axios.post("https://dry-shelf-94984.herokuapp.com/api/auth/signup", {
            name: name,
            lastName: lastName,
            email: email,
            password: password,
            roles: ["user"],
            direccion: direccion,
            telefono: telefono,
            cedula: cedula
        }).then((response) =>{
            redirect.push("/")

        }).catch(err => {
            alert(err.response.data.message)
        })
        console.log("YA PASO")
       
        
    }
    return(
        <>
            <div className="cont-registro">
            <div className="signupSection-registro">
                <div className="info-registro">
                    <h1>E-Vent</h1>
                    <br></br>
                    <div className="shop-login">
                        <FontAwesomeIcon icon={faIcons}  className="fas" />
                    </div>
                </div>
                
                <form action="#" onSubmit= {handleSubmit} method="POST" data-testid = 'signupForm' className="signupForm-registro" name="signupform">
                    <h2>Crear una cuenta</h2>
                    <ul className="noBullet-registro">
                        <li>
                            <input type="text" className="inputFields-registro" id="nombre" data-testid = 'nombre' name="nombre" placeholder="Nombre"  required onChange = {(e)=>{setName(e.target.value)}}/>
                        </li>
                        <li>
                            <input type="text" className="inputFields-registro" id="apellido" data-testid = 'apellido' name="apellido" placeholder="Apellido"  required onChange = {(e)=>{setLastName(e.target.value)}}/>
                        </li>
                        <li>
                            <input type="number" className="inputFields-registro" id="cedula" data-testid = 'cedula' name="cedula" placeholder="Cedula"  required onChange = {(e)=>{setCedula(e.target.value)}}/>
                        </li>
                        <li>
                            <input type="tel" className="inputFields-registro" id="telefono" data-testid = 'telefono' name="telefono" min="11" max="11" placeholder="Telefono"  required onChange = {(e)=>{setTelefono(e.target.value)}}/>
                        </li>
                        <li>
                            <input type="text" className="inputFields-registro" id="direccion" data-testid = 'direccion' name="direccion" placeholder="Direccion"  required onChange = {(e)=>{setDireccion(e.target.value)}}/>
                        </li>
                        <li>
                            <input type="email" className="inputFields-registro" id="email" data-testid = 'email' name="email" placeholder="Email"  required onChange = {(e)=>{setEmail(e.target.value)}}/>
                        </li>
                        <li>
                            <input type="password" className="inputFields-registro" id="password" data-testid = 'password' name="password" placeholder="Contrase??a"  required onChange = {(e)=>{setPassword(e.target.value)}}/>
                        </li>
                    <div className="boton">

                            <input type="submit" id="join-btn-registro" data-testid="join-btn-registro" name="join" alt="Join" value="Registrarme"/>
                    </div>
                    </ul>
                
                </form>
                
            </div>
            </div>
        
        </>
    )
}