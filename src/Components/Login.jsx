import React, { useContext, useState, useEffect } from 'react';
import './LoginStyles.scss'
import Axios from 'axios';
import { useHistory } from "react-router-dom"
import { RolesContext } from './RolesContextProvider';


export default function Login(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const redirect = useHistory();
    const {role, setRole} = useContext(RolesContext);

    useEffect (() => {
        if (role === "ROLE_PROVEEDOR"){
            redirect.push("/");
            window.location.reload();
        }else if (role === "ROLE_USER") {
            redirect.push("/");
            window.location.reload();
        }else if (role === 'ROLE_ADMIN'){
            redirect.push("/");
            window.location.reload();
        };

        console.log('Context desde Login: ' + role);
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [role]);

    const handleSubmit = event => {
        event.preventDefault();
        Axios.post("https://dry-shelf-94984.herokuapp.com/api/auth/logIn", {
            email: email,
            password: password,
        }).then((response) =>{
            alert("Se ha iniciado la sesion exitosamente");
            localStorage.setItem("SavedToken", response.data.accessToken);
            localStorage.setItem("user_id", response.data.id);
            localStorage.setItem("roles", response.data.roles);

            console.log('user_id: ' + response.data.id)

            setRole(localStorage.getItem('roles'));
        

        },
        (error) =>{
            alert(error.response.data.message);
        });
    }

    return(
        <>
            <div className="cont-login">
                <div className="signupSection-login">
                    <div className="info">
                        <h1>E-Vent</h1>
                        <br></br>
                        <h1>LOGO</h1>
                    </div>
                    
                    <form onSubmit={handleSubmit} method="POST" className="signupForm" name="signupform">
                        <h2>Iniciar Sesion</h2>
                        <ul className="noBullet2">
                            <li>
                                <label htmlFor="email"></label>
                                <input type="email" className="inputFields" id="email" name="email" placeholder="Email"  required onChange = {(e)=>{setEmail(e.target.value)}} />
                            </li>
                            <li>
                                <label htmlFor="password"></label>
                                <input type="password" className="inputFields" id="password" name="password" placeholder="Contraseña"  required onChange = {(e)=>{setPassword(e.target.value)}} />
                            </li>
                            <li id="center-btn">
                                <input type="submit" id="join-btn-login" name="join" alt="Join" value="Entrar a E-Vent"/>
                            </li>
                        </ul>
                    
                    </form>
                    
                </div>
                
               
            </div>
               
        </>
    )
}