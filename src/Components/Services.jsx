import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
     useParams
  } from "react-router-dom";
  import './ServicesStyles.css'


export default function Services(){
    const [services, setServices] = useState([])
    
    const { proveedor_id } = useParams();

    useEffect (() => {
        getServices();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getServices = () =>{
        Axios.get("http://localhost:5000/api/services/proveedores/" + proveedor_id).then((res)=>{
            setServices(res.data)
            console.log('Servicios' + res.data)
            console.log(proveedor_id)
        }
        )
        console.log(services)
    }

    return(
        <>
            <div className="cont1">

                <div className="contCard">
                { services.map((service) => (

                    <div className="card1">
                        <h3 >{service.name}</h3>
                        <img src={service.image} className="service-img" alt="service-pic"/>
                        <p>{service.description}
                        </p>
                        <a href="#!" className="button">
                            Lo quiero en mi Evento 
                        </a>
                    </div>

                    


                    ))}
                </div>
            </div>


        </>
    )
}