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
        searchProveedores()
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [proveedorByName]);

    
   


    const searchProveedores = ()=>{
        Axios.get("https://dry-shelf-94984.herokuapp.com/api/proveedores/"+ proveedorByName).then((res)=>{
            setProveedores(res.data)
            console.log(res.data)
            console.log('Proveedor By Name' + proveedorByName);
    }).catch(err => {
        console.log(err)
    })};


    const deleteProveedor = (e, id) => {
        console.log("Delete")
        e.preventDefault();

        Axios.delete("https://dry-shelf-94984.herokuapp.com/api/proveedor/" + id).then((res) => {
            alert(res.data.message)
            searchProveedores()
        }).catch(err => {
            alert(err.data.message)
            alert("error")
        })
    }

    return(
        <>
            <div className="contenedorP">
            
            <h1 className="titulo">Lista de Proveedores</h1>
            <label htmlFor="filtroP">Nombre del Proveedor</label>
            <input type="text" id="filtroP" onChange={(e)=>{ setProveedorByName(e.target.value)}} />
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
                    <td><Link to={`/EditProveedores/ ${proveedor.id}`} >Editar</Link></td>

                </tr>
                )) }
                </table>
                </div>

                

        </>
    )
    
}

                
    
