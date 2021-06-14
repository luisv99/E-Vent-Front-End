import './ServiciosAdminStyles.css'
import './ProveedoresStyles.css'
import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
    Link
  } from "react-router-dom";
import useStateWithCallback from 'use-state-with-callback'


export default function Admin(){

    const [proveedores, setProveedores] = useState([])
    const [proveedorByName, setProveedorByName] = useStateWithCallback('', proveedorByName => {
        
        Axios.get("./api/proveedores/" + proveedorByName).then((res)=>{
            setProveedores(res.data)
            //console.log(res.data)
                //alert('Funciona')

        }
        ).catch(err => {
            console.log(err)
        })
    })

    useEffect (() => {
        getProveedores()
    }, []);

    useEffect (() => {
        searchProveedores()
    }, [proveedorByName]);


    
    const getProveedores = () =>{
        Axios.get("./api/proveedores/").then((res)=>{
            setProveedores(res.data)
            //console.log(res.data)
        }
        )
    }    
    
    }

    const getProveedorByName = async (e) =>{
        setProveedorByName(e.target.value).then(() => {
            alert(proveedorByName)
        })
         ;
        
        
    }
    const searchProveedores = ()=>{
        Axios.get("./api/proveedores/"+ proveedorByName).then((res)=>{
            setProveedores(res.data)
            console.log(res.data)
            console.log('Proveedor By Name' + proveedorByName);
    }).catch(err => {
        console.log(err)
    })}

    
    const getProveedorByName = (e) =>{
        setProveedorByName(e.target.value)
        };



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
            <input type="text" id="filtro" onChange={(e)=>{ getProveedorByName(e)}} />
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
