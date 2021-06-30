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
            <div className="contenedorU" style={{marginTop: "10rem"}}>
            
            <h1 className="titulo">Lista de usuarios</h1>
            <label htmlFor="filtro">Cedula</label>
            <input type="text" id="filtro" onChange={(e)=>{getUsersByName(e)}}/>
            <table id="customers">
                <tr>
                    <th style={{textAlign:"center"}}>Nombre y Apellido</th>
                    <th style={{textAlign:"center"}}>Email</th>
                    <th style={{textAlign:"center"}}>Direccion</th>
                    <th style={{textAlign:"center"}}>Cedula</th>
                </tr>

                { users.map((user) => (
                
                <tr>
                    <td>{user.name} {user.lastName}</td>
                    <td className="emailField">{user.email}</td>
                    <td>{user.direccion}</td>
                    <td>{user.cedula}</td>

                </tr>
                )) }
                </table>
                </div>

        </>
    )
}