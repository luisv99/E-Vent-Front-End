import './ServiciosAdminStyles.css'
import Axios from 'axios';
import React, { useState, useEffect } from 'react';


export default function Admin(){

    const [proveedores, setProveedores] = useState([])
    const [userByName, setUserByName] = useState('')

    useEffect (() => {
        getProveedores()
    }, []);

    const getProveedores = () =>{
        Axios.get("http://localhost:5000/api/proveedores").then((res)=>{
            setProveedores(res.data)
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
            
            <h1 className="titulo">Lista de Proveedores</h1>
            <label htmlFor="filtro">Nombre</label>
            <input type="text" id="filtro" /*onChange={(e)=>{setUserByName(e.target.value)}}*/ />
            <table id="customers">
                <tr>
                    <th>Nombre</th>
                    <th>Activo</th>
                    <th>Direccion</th>
                    <th>Cedula</th>
                </tr>

                { proveedores.map((proveedor) => (
                
                <tr>
                    <td>{proveedor.name}</td>
                    <td>{proveedor.email}</td>
                    <td></td>
                    <td></td>

                </tr>
                )) }
                </table>
                </div>

        </>
    )
}