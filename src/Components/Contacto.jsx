import './ContactoStyles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons' 


function Contacto(){
    return(
        <>
            <div className="container">

            <div className="card-wrapper">
            
            <div className="card profile-two">
                
                <div className="card-image profile-img--two">
                <img src="/imagenes/SelfieLuis.jpeg" id="card-imageLuiss" alt="profile two"/>
                </div>

                <ul className="social-icons">
                <li>
                    <a href="">
                    <FontAwesomeIcon icon={faFacebookF} className="fab fa-facebook-f"></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a href="">
                    <FontAwesomeIcon icon={faInstagram} className="fab fa-instagram"></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a href="">
                    <FontAwesomeIcon icon={faTwitter} className="fab fa-twitter"></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a href="">
                    <FontAwesomeIcon icon={faWhatsapp} className="fab fa-dribbble"></FontAwesomeIcon>
                    </a>
                </li>
                </ul>

                <div className="details jane">
                    <h2>Luis Vargas
                    <br/>
                    <span className="job-title">Front End</span>
                    </h2>
                </div>
            </div>
        </div> 
            
        <div className="card-wrapper2">
            
            <div className="card profile-two">
                
                <div className="card-image profile-img--two">
                <img src="https://image.ibb.co/c9rY6J/profile02.jpg" alt="profile two"/>
                </div>

                <ul className="social-icons">
                <li>
                    <a href="">
                    <FontAwesomeIcon icon={faFacebookF} className="fab fa-facebook-f"></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a href="">
                    <FontAwesomeIcon icon={faInstagram} className="fab fa-instagram"></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a href="">
                    <FontAwesomeIcon icon={faTwitter} className="fab fa-twitter"></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a href="">
                    <FontAwesomeIcon icon={faWhatsapp} className="fab fa-dribbble"></FontAwesomeIcon>
                    </a>
                </li>
                </ul>

                <div className="details jane">
                    <h2>Gustavo Toro
                    <br/>
                    <span className="job-title">Back End</span>
                    </h2>
                </div>
            </div>
        </div>  
        <div className="card-wrapper3">
            
            <div className="card profile-two">
                
                <div className="card-image profile-img--two">
                <img src="https://image.ibb.co/c9rY6J/profile02.jpg" alt="profile two"/>
                </div>

                <ul className="social-icons">
                <li>
                    <a href="">
                    <FontAwesomeIcon icon={faFacebookF} className="fab fa-facebook-f"></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a href="">
                    <FontAwesomeIcon icon={faInstagram} className="fab fa-instagram"></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a href="">
                    <FontAwesomeIcon icon={faTwitter} className="fab fa-twitter"></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a href="">
                    <FontAwesomeIcon icon={faWhatsapp} className="fab fa-dribbble"></FontAwesomeIcon>
                    </a>
                </li>
                </ul>

                <div className="details jane">
                    <h2>Marcos Rodriguez
                    <br/>
                    <span className="job-title">Social Media</span>
                    </h2>
                </div>
            </div>
        </div> 
        <div className="card-wrapper4">
            
            <div className="card profile-two">
                
                <div className="card-image profile-img--two">
                <img src="https://image.ibb.co/c9rY6J/profile02.jpg" alt="profile two"/>
                </div>

                <ul className="social-icons">
                <li>
                    <a href="">
                    <FontAwesomeIcon icon={faFacebookF} className="fab fa-facebook-f"></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a href="">
                    <FontAwesomeIcon icon={faInstagram} className="fab fa-instagram"></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a href="">
                    <FontAwesomeIcon icon={faTwitter} className="fab fa-twitter"></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a href="">
                    <FontAwesomeIcon icon={faWhatsapp} className="fab fa-dribbble"></FontAwesomeIcon>
                    </a>
                </li>
                </ul>

                <div className="details jane">
                    <h2>Barbara Alvarez
                    <br/>
                    <span className="job-title">UI Designer</span>
                    </h2>
                </div>
            </div>
        </div>  
        <div className="card-wrapper5">
            
            <div className="card profile-two">
                
                <div className="card-image profile-img--two">
                <img src="https://image.ibb.co/c9rY6J/profile02.jpg" alt="profile two"/>
                </div>

                <ul className="social-icons">
                <li>
                    <a href="">
                    <FontAwesomeIcon icon={faFacebookF} className="fab fa-facebook-f"></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a href="">
                    <FontAwesomeIcon icon={faInstagram} className="fab fa-instagram"></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a href="">
                    <FontAwesomeIcon icon={faTwitter} className="fab fa-twitter"></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a href="">
                    <FontAwesomeIcon icon={faWhatsapp} className="fab fa-dribbble"></FontAwesomeIcon>
                    </a>
                </li>
                </ul>

                <div className="details jane">
                    <h2>Fernando Mejia
                    <br/>
                    <span className="job-title">UI Designer</span>
                    </h2>
                </div>
            </div>
        </div>   
        </div>
        </>
    )
}

export default Contacto;
