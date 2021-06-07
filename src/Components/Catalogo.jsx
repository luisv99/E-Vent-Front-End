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
            <div className="cont1">
                <div className="cont">

                    {proveedores.map((proveedor,index)=>(
                    <div className="card">
                        <h3>{proveedor.name}</h3>
                        <img src={proveedor.image} alt=""/>
                        <p>Kentucky Fried Chicken
                        </p>
                        <a href="#!" className="button">
                            Agregar
                        </a>
                    </div>
                    ))}
                
                </div>
            </div>
            
       
        </>
    )
}