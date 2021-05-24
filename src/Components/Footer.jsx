import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons' 


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
                                <li><a href="#">Servicios</a></li>
                                <li><a href="#">Como afiliar mi negocio</a></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Ayuda</h4>
                            <ul>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Metodos de pago</a></li>
                                <li><a href="#">Como crear mi evento</a></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Eventos</h4>
                            <ul>
                                <li><a href="#">Crear E-Vent</a></li>
                                <li><a href="#">Galeria</a></li>
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
                    <a href="#">X</a>
                    <h2>Mi primer Modal</h2>
                    <p>Este es mi primera ventana modal sin utilizar JavaScript.</p>
                </div>  
                </div>
            </footer>
        </>
    )
}