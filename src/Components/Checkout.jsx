import React from 'react';
import './CheckoutStyles.scss'
import './PagoTDC.scss';
import './PagoPorZelleStyles.css'
import { useState } from 'react';
import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom"


export default function Checkout(){

        const redirect = useHistory();

        const [zelle, setZelle] = useState(false);
        const [tdc, setTDC] = useState(false);
        //const [paypal, setPaypal] = useState(false);

        const zellePayment = ()=>{
            setZelle(true)
            setTDC(false)
        };
        const tdcPayment = ()=>{
            setTDC(true)
            setZelle(false)
        };

        const finishPayment = () =>{
            redirect.push("/PagoExitoso");
        };



        

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
                    <Link to="/PagoExitoso" onClick={finishPayment} value="Enviar" className="btnZelle" id="ref">Enviar Comprobante</Link>
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
                            <input type="cc-given-name" className="inputFieldsCredito" id="nombre" name="nombre" required placeholder="Titular"  />
                        </li>
                    
                        <li>
                            <input type="cardNumber" className="inputFieldsCredito" id="location" required name="numTarjeta" placeholder="Número De Tarjeta"  />
                        </li>
                        <li>
                            <input type="cc-csc" maxLength="3"  className="inputFieldsCredito" required id="number" name="number" placeholder="CVV"   />
                        </li>

                        <li>
                            <input type="month" className="inputFieldsCredito" id="date" required name="date" placeholder="número de Personas"  />
                        </li>

                        <li id="center-btn">
                            <Link to="/PagoExitoso" id="join-btn-checkout" name="join" alt="Join">Pagar E-Vent</Link>
                        </li>
                    </ul>
                
                </form>
                
            </div>
            </div>}

        
        </>
    )
}

