import './ServiciosAdminStyles.css'
import './ProveedoresStyles.css'
import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
    Link
  } from "react-router-dom";


export default function Admin(){

    const [proveedores, setProveedores] = useState([])
    const [proveedorByName, setProveedorByName] = useState('')

    useEffect (() => {
        getProveedores()
    }, []);

    const getProveedores = () =>{
        Axios.get("./api/proveedores").then((res)=>{
            setProveedores(res.data)
            console.log(res.data)
        }
        )
    }

    const getProveedorByName = (e) =>{
        setProveedorByName(e.target.value)
        Axios.get("./api/proveedor/" + proveedorByName).then((res)=>{
            setProveedores(res.data)
            console.log(res.data)
            //alert('Funciona')

        }
        ).catch(err => {
            console.log(err)
        })
    }

    const deleteProveedor = (e, id) => {
        console.log("Delete")
        e.preventDefault();

        Axios.delete("./api/proveedor/" + id).then((res) => {
            alert(res.data.message)
            getProveedores()
        }).catch(err => {
            alert(err.data.message)
            alert("error")
        })
    }

    return(
        <>
            <div className="contenedorP">
            
            <h1 className="titulo">Lista de Proveedores</h1>
            <label htmlFor="filtro">Nombre</label>
            <input type="text" id="filtro" onChange={(e)=>{getProveedorByName(e)}} />
            <Link to="/Provedores" className="boton-crear-usuario">Agregar Proveedor</Link>
            <table id="customers">
                <tr>
                    <th>Nombre</th>
                    <th>Telefono</th>
                    <th>Correo</th>
                    <th>Direccion</th>
                    <th>Eliminar</th>
                    <th>Editar</th>
                    
                </tr>

                { proveedores.map((proveedor) => (
                
                <tr>
                    <td>{proveedor.name}</td>
                    <td>{proveedor.telefono}</td>
                    <td>{proveedor.email}</td>
                    <td>{proveedor.direccion}</td>                    
                    <td><button className="deleteBtn" onClick = {(e) => {deleteProveedor(e, proveedor.id)}}>Delete</button></td>
                    <td><button className="editarBtn" onClick = {(e) => {deleteProveedor(e, proveedor.id)}}>Editar</button></td>

                </tr>
                )) }
                </table>
                </div>

        </>
    )
}