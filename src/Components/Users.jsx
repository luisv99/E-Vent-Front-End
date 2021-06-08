import './UsersStyles.css'
import Axios from 'axios';
import React, { useState, useEffect } from 'react';


export default function Admin(){

    const [users, setUsers] = useState([])
    const [userByName, setUserByName] = useState('')

    useEffect (() => {
        getUsers()
    }, []);

    const getUsers = () =>{
        Axios.get("http://localhost:5000/api/users").then((res)=>{
            setUsers(res.data)
            console.log(res.data)
        }
        )
    }

    /*const getUsersByName = () =>{
        Axios.get("http://localhost:5000/api/user/:name").then((res)=>{
            setUsers(res.data)
            console.log(res.data)
            //alert('Funciona')

        }
        )
    }*/

    return(
        <>
            <div className="contenedor">
            
            <h1 className="titulo">Lista de usuarios</h1>
            <label htmlFor="filtro">Cedula</label>
            <input type="text" id="filtro" /*onChange={(e)=>{setUserByName(e.target.value)}}*/ />
            <table id="customers">
                <tr>
                    <th>Nombre y Apellido</th>
                    <th>Email</th>
                    <th>Direccion</th>
                    <th>Cedula</th>
                    <th>Eliminar</th>
                    <th>Editar</th>
                </tr>

                { users.map((user) => (
                
                <tr>
                    <td>{user.name} {user.lastName}</td>
                    <td>{user.email}</td>
                    <td>Germany</td>
                    <td>26.489.495</td>
                    <td><button className="deleteBtn" >Delete</button></td>
                    <td><button className="editarBtn" >Editar</button></td>


                </tr>
                )) }
                </table>
                </div>

        </>
    )
}