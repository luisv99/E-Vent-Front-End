//import './ServiciosAdminStyles.css'
//import './ProveedorServicios.css'
import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
    Link
  } from "react-router-dom";


export default function Admin(){

    const [servicios, setServicios] = useState([])
    //const [proveedorByName, setProveedorByName] = useState('')

    useEffect (() => {
        getServicios()
    }, []);

    const getServicios = () =>{
        Axios.get("http://localhost:5000/services").then((res)=>{
            setServicios(res.data)
            console.log(res.data)
        }
        )
    }

    

    

    return(
        <>
            <div className="contenedorP">
            
            <h1 className="titulo">Lista de Productos</h1>
            <table id="customers">
                <tr>
                    <th></th> 
                    <th>Nombre del Producto</th>
                    <th>Precio</th>
                    <th>Descripción</th>
                    <th>Promoción</th>
                    <th>Disponibilidad</th>
                </tr>

                { servicios.map((servicio) => (
                
                <tr>
                    <td></td>
                    <td>{servicio.name}</td>
                    <td>{servicio.price}</td>
                    <td>{servicio.description}</td>
                    <td>{servicio.promotion}</td>
                    <td>{servicio.available}</td>                    
                   
                </tr>
                )) }
                </table>
                </div>

        </>
    )
}