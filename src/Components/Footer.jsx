
import './Footer.css';
import './Slideshow2';
import './CrearEvento';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

export default function Footer(){
    return(
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row1">
                        <div className="footer-col">
                            <h4>Compania</h4>
                            <ul>
                                <li><Link to="#miModal">Quienes somos</Link></li>
                                <li><Link to="#miModal2">Métodos de pago</Link></li>
                                <li><Link to="#miModal3">Cómo afiliar mi negocio</Link></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Ayuda</h4>
                            <ul>
                                <li><Link to="#miModal4">Servicio al cliente</Link></li>
                                <li><Link to="#miModal5">Preguntas Frecuentes</Link></li>
                                <li><Link to="#">Como crear mi evento</Link></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Eventos</h4>
                            <ul>
                                <li><Link to="CrearEvento">Crear E-Vent</Link></li>
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

                <div id="miModal" class="modal">
                <div class="modal-contenido">
                    <Link to="#" className="modal-closed">X</Link>
                    <img src={imgT} alt=""/>
                </div>  
                </div>

                <div id="miModal2" class="modal2">
                <div class="modal-contenido2">
                    <Link to="#">X</Link>
                    <img src={imgS} alt=""/>
                </div>  
                </div>

                <div id="miModal3" class="modal3">
                <div class="modal-contenido3">
                    <Link to="#">X</Link>
                    <img src={imgN} alt=""/>
                </div>  
                </div>

                <div id="miModal4" class="modal4">
                <div class="modal-contenido4">
                    <Link to="#">X</Link>
                    <img src={imgSA} alt=""/>
                </div>  
                </div>

                <div id="miModal5" class="modal5">
                <div class="modal-contenido5">
                    <Link to="#">X</Link>
                    <img src={imgP} alt=""/>
                </div>  
                </div>

                <div id="miModal8" class="modal8">
                <div class="modal-contenido8">
                    <Link to="#">X</Link>
                    <div className="slide">
                        <Slideshow2/>
                    </div>
                </div>  
                </div>

              
            </footer>
        </>
    )
}