import Axios from 'axios';
import React, { useState, useEffect } from 'react';


export default function Compras(){
    const [facturas, setFacturas] = useState([])
    
    useEffect (() => {
        getFacturas();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getFacturas = () =>{
        Axios.get("https://dry-shelf-94984.herokuapp.com/api/facturas").then((res)=>{
            setFacturas(res.data)
            console.log('Facturas' + JSON.stringify(res.data))
            
        }
        )};


    return(
        <>
            <div className="contenedorP" style={{marginTop: "10rem"}}>
            
            <h1 className="titulo">Historial de Facturas</h1>
            <table id="customers">
                <tr>
                    <th style={{textAlign:"center"}}>User_id</th>
                    <th style={{textAlign:"center"}}>Factura_id</th>
                    <th style={{textAlign:"center"}}>Nombre Cliente</th>
                    <th style={{textAlign:"center"}}>Nombre Evento</th>
                    <th style={{textAlign:"center"}}>Monto Total ($)</th>
                    
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
