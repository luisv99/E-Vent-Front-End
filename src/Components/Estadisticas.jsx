import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
    Link, useParams
  } from "react-router-dom";


export default function Estadisticas(){
    const [eventosPorAnio, setEventosPorAnio] = useState([])
    const [serviciosMasContratados, setServiciosMasContratados] = useState([])
    const [serviciosMenosContratados, setServiciosMenosContratados] = useState([])
    const [cantidadDeEventosPorMes, setCantidadDeEventosPorMes] = useState([])
    const [clientesQueHanGastadoMas, setClientesQueHanGastadoMas] = useState([])

    const {proveedor_id} = useParams()

    
    useEffect (() => {
        getEstadisticas();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getEstadisticas = () =>{
        
        Axios.get("http://localhost:5000/eventosPorAnio").then((res)=>{
            setEventosPorAnio(res.data)
            
            
        }
        )
        Axios.get("http://localhost:5000/serviciosMasContratados").then((res)=>{
            setServiciosMasContratados(res.data)
            
            
        }
        )
        Axios.get("http://localhost:5000/serviciosMenosContratados").then((res)=>{
            setServiciosMenosContratados(res.data)
            
            
        }
        )
        Axios.get("http://localhost:5000/cantidadDeEventosPorMes").then((res)=>{
            setCantidadDeEventosPorMes(res.data)
            
            
        }
        )
        Axios.get("http://localhost:5000/clientesQueHanGastadoMas").then((res)=>{
            setClientesQueHanGastadoMas(res.data)
            console.log("Data: " + JSON.stringify(res.data))
            
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
            <div className="contenedorP">
            
            <h1 className="titulo">Estadisticas</h1>
                
                <table id="customers">
                    <div>
                        <h2>Servicios Mas Contratados</h2>
                    </div>
                    <tr>
                        <th>Servicio</th>
                        <th>Contratos</th> 
                    </tr>
                { serviciosMasContratados.map((servicio) => (
                
                <tr>
                    <td>{servicio.name}</td>
                    <td>{servicio.cant}</td>

                </tr>
                )) }
                        
                    
                </table>
                <table id="customers">
                    <div>
                        <h2>Servicios Menos Contratados</h2>
                    </div>
                    <tr>
                        <th>Servicio</th>
                        <th>Contratos</th> 
                    </tr>
                { serviciosMenosContratados.map((servicio) => (
                
                <tr>
                    <td>{servicio.name}</td>
                    <td>{servicio.cant}</td>

                </tr>
                )) }
                        
                    
                </table>
           
            </div>
            <div className="contenedorP">
            
                
                <table id="customers">
                    <div>
                        <h2>Promedio de monto total de evento por Ano</h2>
                    </div>
                    <tr>
                        <th>Ano</th>
                        <th>Promedio</th> 
                    </tr>
                { eventosPorAnio.map((ano) => (
                
                <tr>
                    <td>{ano.yyyy}</td>
                    <td>{ano.avg}</td>

                </tr>
                )) }
                        
                    
                </table>

                <table id="customers">
                    <div>
                        <h2>Eventos Por Mes</h2>
                    </div>
                    <tr>
                        <th>Ano</th>
                        <th>Mes</th>
                        <th>Eventos</th> 
                    </tr>
                { cantidadDeEventosPorMes.map((mes) => (
                
                <tr>
                    <td>{mes.yyyy}</td>
                    <td>{mes.mm}</td>
                    <td>{mes.count}</td>

                </tr>
                )) }
                        
                    
                </table>

                <table id="customers">
                    <div>
                        <h2>Mejores Clientes</h2>
                    </div>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Monto Total Gastado</th> 
                    </tr>
                { clientesQueHanGastadoMas.map((cliente) => (
                
                <tr>
                    <td>{cliente.name}</td>
                    <td>{cliente.lastName}</td>
                    <td>{cliente.gasto}</td>

                </tr>
                )) }
                        
                    
                </table>
                
           
            </div>

        </>
    )
}