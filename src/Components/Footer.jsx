<<<<<<< HEAD
import './Footer.css';
import './Slideshow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
=======
<<<<<<< HEAD
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
=======
import './Footer.css';
import './Slideshow2';
import './CrearEvento';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
>>>>>>> d73c56cd1d93afbe92b8396de70212929f45932d
>>>>>>> marcos
import imgS from './../Imagenes/Métodos de pago.png';
import imgT from './../Imagenes/team.png';
import imgN from './../Imagenes/negocio2.png';
import imgSA from './../Imagenes/SA.png';
import imgP from './../Imagenes/preguntas.png';
<<<<<<< HEAD
import Slideshow from './Slideshow';
=======
<<<<<<< HEAD
=======
import Slideshow2 from './Slideshow2';
>>>>>>> d73c56cd1d93afbe92b8396de70212929f45932d
>>>>>>> marcos

import { faFacebookF, faTwitter, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons' 
import {
    Link
  } from "react-router-dom";

export default function Footer(){
    return(
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-col">
                            <h4>Compania</h4>
                            <ul>
                                <li><a href="#miModal">Quienes somos</a></li>
                                <li><a href="#miModal2">Métodos de pago</a></li>
                                <li><a href="#miModal3">Cómo afiliar mi negocio</a></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Ayuda</h4>
                            <ul>
                                <li><a href="#miModal4">Servicio al cliente</a></li>
                                <li><a href="#miModal5">Preguntas Frecuentes</a></li>
                                <li><a href="#">Como crear mi evento</a></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Eventos</h4>
                            <ul>
<<<<<<< HEAD
                                <li><a href="#">Crear E-Vent</a></li>
=======
                                <li><a href="CrearEvento">Crear E-Vent</a></li>
>>>>>>> marcos
                                <li><a href="#miModal8">Galeria</a></li>
                                <li><a href="#">Clientes</a></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Redes sociales</h4>
                            <div className="social-links">
                                <a href="#"><FontAwesomeIcon icon={faFacebookF} className="fab fa-facebook-f"></FontAwesomeIcon></a>
                                <a href="#"><FontAwesomeIcon icon={faTwitter} className="fab fa-twitter"></FontAwesomeIcon></a>
                                <a href="#"><FontAwesomeIcon icon={faInstagram} className="fab fa-instagram"></FontAwesomeIcon></a>
                                <a href="#"><FontAwesomeIcon icon={faWhatsapp} className="fab fa-dribbble"></FontAwesomeIcon></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="miModal" class="modal">
                <div class="modal-contenido">
                    <a href="#" className="modal-closed">X</a>
                    <img src={imgT} alt=""/>
                </div>  
                </div>

                <div id="miModal2" class="modal2">
                <div class="modal-contenido2">
                    <a href="#">X</a>
                    <img src={imgS} alt=""/>
                </div>  
                </div>

                <div id="miModal3" class="modal3">
                <div class="modal-contenido3">
                    <a href="#">X</a>
                    <img src={imgN} alt=""/>
                </div>  
                </div>

                <div id="miModal4" class="modal4">
                <div class="modal-contenido4">
                    <a href="#">X</a>
                    <img src={imgSA} alt=""/>
                </div>  
                </div>

                <div id="miModal5" class="modal5">
                <div class="modal-contenido5">
                    <a href="#">X</a>
                    <img src={imgP} alt=""/>
                </div>  
                </div>

<<<<<<< HEAD
=======

>>>>>>> marcos
                <div id="miModal8" class="modal8">
                <div class="modal-contenido8">
                    <a href="#">X</a>
                    <div className="slide">
<<<<<<< HEAD
                        <Slideshow/>
=======
                        <Slideshow2/>
>>>>>>> marcos
                    </div>
                </div>  
                </div>

              
            </footer>
        </>
    )
}