import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import './EstadisticasStyles.css'




export default function Estadisticas(){
    const [eventosPorAnio, setEventosPorAnio] = useState([])
    const [serviciosMasContratados, setServiciosMasContratados] = useState([])
    const [serviciosMenosContratados, setServiciosMenosContratados] = useState([])
    const [cantidadDeEventosPorMes, setCantidadDeEventosPorMes] = useState([])
    const [clientesQueHanGastadoMas, setClientesQueHanGastadoMas] = useState([])


    
    useEffect (() => {
        getEstadisticas();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getEstadisticas = () =>{
        
        Axios.get("https://dry-shelf-94984.herokuapp.com/eventosPorAnio").then((res)=>{
            setEventosPorAnio(res.data)
        });
        
        Axios.get("https://dry-shelf-94984.herokuapp.com/serviciosMasContratados").then((res)=>{
            setServiciosMasContratados(res.data)
            console.log('Mas contratados' + JSON.stringify(res.data));
            });
        
        Axios.get("https://dry-shelf-94984.herokuapp.com/serviciosMenosContratados").then((res)=>{
            setServiciosMenosContratados(res.data)
        })
        Axios.get("https://dry-shelf-94984.herokuapp.com/cantidadDeEventosPorMes").then((res)=>{
            setCantidadDeEventosPorMes(res.data)
            
            
        }
        )
        Axios.get("https://dry-shelf-94984.herokuapp.com/clientesQueHanGastadoMas").then((res)=>{
            setClientesQueHanGastadoMas(res.data)
            console.log("Data: " + JSON.stringify(res.data))
            
        }
        )

        
    }


    return(
        <>

        <div className="contEstadisticas">

        
            <div className="contenedorE1" style={{marginTop:"5rem"}}>
            
                
                    <div>
                        <h2>Servicios Mas Contratados</h2>
                    </div>
                <table style={{width:"400px"}} id="customersE">
                    <tr>
                        <th style={{width:"200px" , textAlign:"center"}}>Servicio</th>
                        <th style={{width:"100px" , textAlign:"center"}}>Contratos</th> 
                    </tr>
                { serviciosMasContratados.map((servicio) => (
                
                <tr>
                    <td>{servicio.name}</td>
                    <td>{servicio.cant}</td>

                </tr>
                )) }
                        
                </table>

                </div>
                


                <div className="contenedorE1" style={{marginTop:"5rem"}}>

                    <div>
                        <h2>Servicios Menos Contratados</h2>
                    </div>
                <table style={{width:"400px"}} id="customersE">
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
                
                <div className="contenedorE1" style={{marginTop:"5rem"}}>
                    <div>
                        <h2>Promedio de monto total de evento por Ano</h2>
                    </div>
                <table style={{width:"300px"}} id="customersE" >
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
                </div>



                <div className="contenedorE1" style={{marginTop:"5rem"}}>
                    <div>
                        <h2>Eventos Por Mes</h2>
                    </div>
                <table style={{width:"300px"}} id="customersE" >
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
                </div>

                <div className="contenedorE1" style={{marginTop:"5rem"}}>
                    <div>
                        <h2 >Mejores Clientes</h2>
                    </div>
                <table style={{width:"500px"}} id="customersE">
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

            </div>
           
                
        </>
    )
}