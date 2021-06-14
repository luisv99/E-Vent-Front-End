import './CatalogosStyle.scss'
import Axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function Catalogo(){
    const [proveedores, setProveedores] = useState([])
    //const [userByName, setUserByName] = useState('')

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

    return(
        <>
            <div className="cont1Catalogo">
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