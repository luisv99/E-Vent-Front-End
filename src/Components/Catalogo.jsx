import './CatalogosStyle.scss'
import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import useStateWithCallback from 'use-state-with-callback'


export default function Catalogo(){
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
        Axios.get("http://localhost:5000/api/proveedores").then((res)=>{
            setProveedores(res.data)
            console.log(res.data)
        }
        )
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

    return(
        <>
            <div className="cont1Catalogo">

            <label className="labell" htmlFor="filtro">Nombre del local</label>
            <input type="text" id="filtro" onChange={(e)=>{ getProveedorByName(e)}} />

                <div className="contCatalogo">

                    {proveedores.map((proveedor,index)=>(
                    <div className="carta">
                        <h3>{proveedor.name}</h3>
                        <img src={proveedor.image} alt=""/>
                        <p>{proveedor.telefono}</p>
                        <a href="#!" className="button">
                            Contratar
                        </a>
                    </div>
                    ))}
                
                </div>
            </div>
            
       
        </>
    )
}