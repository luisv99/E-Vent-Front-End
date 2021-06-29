import './CatalogosStyle.scss'
import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
    Link
  } from "react-router-dom";

export default function Catalogo(){
    const [proveedores, setProveedores] = useState([])
    const [proveedorByName, setProveedorByName] = useState('')

 
    useEffect (() => {
        searchProveedores();
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

    return(
        <>
            <div className="cont1Catalogo">
            <div className="buscador">
                <label className="labell" htmlFor="filtro">Nombre del local</label>
                <input type="text" id="filtro" onChange={(e)=>{ setProveedorByName(e.target.value)}} />
            </div>

                <div className="contCatalogo">

                    {proveedores.map((proveedor,index)=>(
                    <div className="carta">
                        <h4 className="cardTitle">{proveedor.name}</h4>
                        <img src={proveedor.image} alt=""/>
                        <p>ID: {proveedor.id}</p>
                        <Link Link to={`/Services/ ${proveedor.id}`} className="button">Ver Servicios</Link>
                    </div>
                    ))}
                
                </div>
            </div>
            
       
        </>
    )
}