import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
    Link
  } from "react-router-dom";

export default function Compras(){
    const [facturas, setFacturas] = useState([])
    const [serviceByName, setServiceByName] = useState('')
    
    useEffect (() => {
        getFacturas();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [serviceByName]);

    const getFacturas = () =>{
        Axios.get("http://localhost:5000/api/facturas").then((res)=>{
            setFacturas(res.data)
            console.log('Facturas' + JSON.stringify(res.data))
            
        }
        )
        
    }


    const deleteServices = (e, id) => {
        e.preventDefault();
        console.log("Delete")

        Axios.delete("https://dry-shelf-94984.herokuapp.com/api/services/"+ id).then((res) => {
            alert(res.data.message)

        }).catch(err => {
            alert(err.data.message)
            alert("error")
        })
    }

    return(
        <>
            <div className="contenedorP" style={{marginTop: "10rem"}}>
            
            <h1 className="titulo">Historial de Facturas</h1>
            <label htmlFor="filtroS">Nombre</label>
            <input type="text" id="filtroS" onChange={(e)=>{setServiceByName(e.target.value)}}/>
            <table id="customers">
                <tr>
                    <th>User_id</th>
                    <th>Factura_id</th>
                    <th>Nombre Cliente</th>
                    <th>Nombre Evento</th>
                    <th>Monto Total ($)</th>
                    
                </tr>

                { facturas.map((factura) => (
                
                <tr>
                    <td>{factura.user_id}</td>
                    <td>{factura.id}</td>
                    <td>{factura.user.name}</td>
                    <td>{factura.event.name}</td>
                    <td>{factura.montoTotal}</td>

                </tr>
                )) }
                </table>
                </div>

        </>
    )
}
