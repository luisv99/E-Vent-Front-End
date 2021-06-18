import React from 'react';
import './CheckoutStyles.scss'
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
        const tdcPayment = ()=>{
            setTDC(true)
        }
        const cashPayment = ()=>{
            setCash(true)
        }
        const paypalPayment = ()=>{
            setPaypal(true)
        }

    return(
        <>
            <div className="comtenedor">
                <div className="botonesPagos">

                        <Link onClick={tdcPayment} className="button1" id="linksPagos">
                            Tarjeta de credito
                        </Link>

                        <Link onClick={paypalPayment} className="button2" id="linksPagos">
                            Paypal
                        </Link>

                        <Link onClick={cashPayment} className="button3" id="linksPagos">
                            Cash 
                        </Link>

                        <Link onClick={zellePayment} className="button4" id="linksPagos">
                            Zelle 
                        </Link>               
                </div>
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

