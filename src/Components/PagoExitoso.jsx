import './PagoExitosoStyles.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
import React, {useEffect } from 'react';


export default function PagoExitoso(){
    useEffect(()=>{
        AOS.init();
      });

    return(
    <>  <div className="fondo">
            <div className= "pago-exitoso" data-aos="zoom-in" data-aos-duration="3000">
                <h1>Gracias por celebrar con Event!</h1>
            </div>
        </div>
    </>
    )}