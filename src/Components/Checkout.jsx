import React from 'react';
import './CheckoutStyles.scss'
import './PagoTDC.scss';
import './PagoPorZelleStyles.css'
import { useState } from 'react';
import {Link} from "react-router-dom";

export default function Checkout(){
        const [zelle, setZelle] = useState(false);
        const [tdc, setTDC] = useState(false);
        //const [paypal, setPaypal] = useState(false);

        const zellePayment = ()=>{
            setZelle(true)
            setTDC(false)
        }
        const tdcPayment = ()=>{
            setTDC(true)
            setZelle(false)
        }



        

    return(
        <>
            <div className="comtenedor">
                <div className="botonesPagos">
                <h2 className="tituloZelle">Seleccione su metodo de pago</h2>
                        <Link onClick={tdcPayment} className="button1" id="linksPagos">
                            Tarjeta de credito
                        </Link>

                        <Link onClick={zellePayment} className="button4" id="linksPagos">
                            Zelle 
                        </Link>               
                </div>
            </div>

            {zelle && <div className="pagoZelle">
                <form>
                <h2 className="tituloZelle">Usted ha seleccionado su pago por zelle</h2>
                <div className="correoZelle">
                    <label className="labelZelle" htmlFor="correoZelle">Nombre y apellido del Titular</label>
                    <input className="inputZelle" type="email" id="correoZelle" required /> <br />
                    <label className="labelRef" htmlFor="ref">Comprobante de Pago</label>
                    <input className="inputRef" type="file" id="ref" required />
                    <br />
                    <input type="submit" value="Enviar" className="btnZelle" id="ref" required />
                </div>
                </form>
            </div>}

            {tdc && <div className="contCredito">
            <div className="signupSectionCredito">
                <div className="infoCredito">
                    <h1>E-Vent</h1>
                    <br></br>
                    <h1>LOGO</h1>
                </div>
                
                <form action="#"   className="signupFormCredito" name="signupform">
                    <h2>Tarjeta De Credito</h2>
                    <ul className="noBulletCredito">
                        <li>
                            <label htmlfor="Nombre"></label>
                            <input type="cc-given-name" className="inputFieldsCredito" id="nombre" name="nombre" placeholder="Nombre"  />
                        </li>
                    
                        <li>
                            <label htmlfor="Número de Tarjeta"></label>
                            <input type="cardNumber" className="inputFieldsCredito" id="location" name="numTarjeta" placeholder="Número De Tarjeta"  />
                        </li>
                        <li>
                            <label htmlfor="Numero de personas"></label>
                            <input type="cc-csc" maxLength="3"  className="inputFieldsCredito" id="number" name="number" placeholder="CVV"   />
                        </li>

                        <li>
                            <label htmlfor="Fecha del evento"></label>
                            <input type="month" className="inputFieldsCredito" id="date" name="date" placeholder="número de Personas"  />
                        </li>
                        <li id="center-btn">
                            <input type="submit" id="join-btn" name="join" alt="Join" value="Pagar E-vent"/>
                        </li>
                    </ul>
                
                </form>
                
            </div>
            </div>}

        
        </>
    )
}

