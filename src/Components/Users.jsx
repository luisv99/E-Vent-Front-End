import './UsersStyles.css'
import Axios from 'axios';
import React, { useState, useEffect } from 'react';


export default function Admin(){

    const [users, setUsers] = useState([])
    const [userByName, setUserByName] = useState('')

    useEffect (() => {
        getUsers()
    }, []);

    useEffect (() => {
        searchUsers();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userByName]);


    const getUsers = () =>{
        Axios.get("https://dry-shelf-94984.herokuapp.com/api/users/").then((res)=>{
            setUsers(res.data)
            console.log(res.data)
        }
        )
    }

    const searchUsers = ()=>{
        Axios.get("https://dry-shelf-94984.herokuapp.com/api/users/"+ userByName).then((res)=>{
            setUsers(res.data)
            console.log(res.data)
            console.log('User By Name' + userByName);
    }).catch(err => {
        console.log(err)
    })}

    const getUsersByName = (e) =>{
            setUserByName(e.target.value)
        }
        
    

    return(
        <>
            <div className="contenedorU">
            
            <h1 className="titulo">Lista de usuarios</h1>
            <label htmlFor="filtro">Cedula</label>
            <input type="text" id="filtro" onChange={(e)=>{getUsersByName(e)}}/>
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
                    <td>{user.direccion}</td>
                    <td>{user.cedula}</td>
                    <td><button className="deleteBtn" >Delete</button></td>
                    <td><button className="editarBtn" >Editar</button></td>


                </tr>
                )) }
                </table>
                </div>

        </>
    )
}