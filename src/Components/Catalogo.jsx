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
                    <div className="card">
                        <h3>KFC</h3>
                        <img src="/imagenes/KFC.JPG" alt=""/>
                        <p>Kentucky Fried Chicken
                        </p>
                        <a href="#!" className="button">
                            Agregar
                        </a>
                    </div>
                </div>
            </div>
            
       
        </>
    )
}