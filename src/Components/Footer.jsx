
import './Footer.css';
import './Slideshow2';
import './CrearEvento';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';


import imgS from './../Imagenes/Métodos de pago.png';
import imgT from './../Imagenes/team.png';
import imgN from './../Imagenes/negocio2.png';
import imgSA from './../Imagenes/SA.png';
import imgP from './../Imagenes/preguntas.png';


import Slideshow2 from './Slideshow2';


import { faFacebookF, faTwitter, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons' 
import {
    Link
  } from "react-router-dom";
  import Modal from 'react-modal';

export default function Footer(){
    const [quienesSomosmodalIsOpen, setQuienesSomosmodalIsOpen] = useState(false);
    const [metodosPagomodalIsOpen, setMetodosPagomodalIsOpen] = useState(false);
    const [pregFrecuentesmodalIsOpen, setPregFrecuentesmodalIsOpen] = useState(false);
    const [afiliaNegociomodalIsOpen, setAfiliaNegociomodalIsOpen] = useState(false);
    const [servicioClientemodalIsOpen, setServicioClientemodalIsOpen] = useState(false);
    /* const [modalIsOpen, modalIsOpen] = useState(false);
    const [modalIsOpen, modalIsOpen] = useState(false);  */
 
    return(
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row1">
                        <div className="footer-col">
                            <h4>Compania</h4>
                            <ul>
                                <li><Link onClick={()=>setQuienesSomosmodalIsOpen(true)}>Quienes somos</Link></li>
                                <li><Link onClick={()=>setMetodosPagomodalIsOpen(true)}>Métodos de pago</Link></li>
                                <li><Link onClick={()=>setAfiliaNegociomodalIsOpen(true)}>Cómo afiliar mi negocio</Link></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Ayuda</h4>
                            <ul>
                                <li><Link onClick={()=>setServicioClientemodalIsOpen(true)}>Servicio al cliente</Link></li>
                                <li><Link onClick={()=>setPregFrecuentesmodalIsOpen(true)}>Preguntas Frecuentes</Link></li>
                                <li><Link to="/">Como crear mi evento</Link></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Eventos</h4>
                            <ul>
                                <li><Link to="/CrearEvento">Crear E-Vent</Link></li>
                                <li><Link to="#miModal8">Galeria</Link></li>
                                <li><Link to="#">Clientes</Link></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Redes sociales</h4>
                            <div className="social-links">
                                <Link to="#"><FontAwesomeIcon icon={faFacebookF} className="fab fa-facebook-f"></FontAwesomeIcon></Link>
                                <Link to="#"><FontAwesomeIcon icon={faTwitter} className="fab fa-twitter"></FontAwesomeIcon></Link>
                                <Link to="#"><FontAwesomeIcon icon={faInstagram} className="fab fa-instagram"></FontAwesomeIcon></Link>
                                <Link to="#"><FontAwesomeIcon icon={faWhatsapp} className="fab fa-dribbble"></FontAwesomeIcon></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <Modal className="eventModal" isOpen={quienesSomosmodalIsOpen} >
                    <button className="close-modal" onClick={()=>setQuienesSomosmodalIsOpen(false)}>X</button>
                    <img src={imgT} alt=""/>
                </Modal>

                <Modal className="eventModal" isOpen={metodosPagomodalIsOpen} >
                    <button className="close-modal" onClick={()=>setMetodosPagomodalIsOpen(false)}>X</button>
                    <img src={imgS} alt=""/>
                </Modal>

                <Modal className="eventModal" isOpen={afiliaNegociomodalIsOpen} >
                    <button className="close-modal" onClick={()=>setAfiliaNegociomodalIsOpen(false)}>X</button>
                    <img src={imgN} alt=""/>
                </Modal>

                <Modal className="eventModal" isOpen={servicioClientemodalIsOpen} >
                    <button className="close-modal" onClick={()=>setServicioClientemodalIsOpen(false)}>X</button>
                    <img src={imgSA} alt=""/>
                </Modal>

                <Modal className="eventModal" isOpen={pregFrecuentesmodalIsOpen} >
                    <button className="close-modal" onClick={()=>setPregFrecuentesmodalIsOpen(false)}>X</button>
                    <img src={imgP} alt=""/>
                </Modal>


              
            </footer>
        </>
    )
}