import React from 'react';
import './CheckoutStyles.css'
import { useState } from 'react';
import {Link} from "react-router-dom";

export default function Checkout(){
        const [zelle, setZelle] = useState(false);
        const [tdc, setTDC] = useState(false);
        const [paypal, setPaypal] = useState(false);
        const [cash, setCash] = useState(false);

        const zellePayment = ()=>{
            setZelle(true)
        }

    return(
        <>
            <div className="comtenedor">
                        <a href="./TarjetaCredito" className="button1">
                            Tarjeta de credito
                        </a>

                        <a href="#!" className="button2">
                            Paypal
                        </a>

                        <a href="#!" className="button3">
                            Cash 
                        </a>

                        <Link onClick={zellePayment} className="button4">
                            Zelle 
                        </Link>               
            </div>

            {zelle && <div className="pagoZelle">
                <form action="">
                <h2 className="tituloZelle">Usted ha seleccionado su pago por zelle</h2>
                <div className="correoZelle">
                    <label className="labelZelle" htmlFor="correoZelle">Nombre y apellido del Titular</label>
                    <input className="inputZelle" type="email" id="correoZelle" required /> <br />
                    <label className="labelRef" htmlFor="ref">Screenshot de la transferencia</label>
                    <input className="inputRef" type="file" id="ref" required />
                    <br />
                    <input type="submit" value="Enviar" className="btnZelle" id="ref" required />
                </div>
                </form>
            </div>}
        </>
    )
}

