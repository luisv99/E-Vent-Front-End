import './ServiciosAdminStyles.css'
import Axios from 'axios';
import React, { useState, useEffect } from 'react';


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
        })
    }

    return(
        <>
            <div className="contenedor">
            
            <h1 className="titulo">Lista de Proveedores</h1>
            <label htmlFor="filtro">Nombre</label>
            <input type="text" id="filtro" onChange={(e)=>{getProveedorByName(e)}} />
            <table id="customers">
                <tr>
                    <th>Nombre</th>
                    <th>Activo</th>
                    <th>Direccion</th>
                    <th>Cedula</th>
                    <th></th>
                    
                </tr>

                { proveedores.map((proveedor) => (
                
                <tr>
                    <td>{proveedor.name}</td>
                    <td>{proveedor.email}</td>
                    <td></td>
                    <td></td>
                    <td>
                        <button onClick = {(e) => {deleteProveedor(e, proveedor.id)}}>Delete</button>
                    </td>

                </tr>
                )) }
                </table>
                </div>

        </>
    )
}