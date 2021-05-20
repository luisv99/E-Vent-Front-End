import './ContactoStyles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDribbble} from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons' 


export default function Contacto(){
    return(
        <>
            <div className="container">
                <div className="card-wrapper">
                     <div className="card">
                        <div className="card-image">
                        <img src="https://image.ibb.co/dUTfmJ/profile_img.jpg" alt="profile one"/>
                        </div>

                     <ul className="social-icons">
                    <li>
                        <a href=""><FontAwesomeIcon icon={faFacebookF} className="fab fa-facebook-f"></FontAwesomeIcon></a>
                    </li>
                    <li>
                        <a href=""><FontAwesomeIcon icon={faInstagram} className="fab fa-instagram"></FontAwesomeIcon></a>
                    </li>
                <li>
                <a href="">
                    <FontAwesomeIcon icon={faTwitter} className="fab fa-twitter"></FontAwesomeIcon>
                </a>
                </li>
                <li>
                <a href="">
                    <FontAwesomeIcon icon={faTwitter} className="fab fa-dribbble"></FontAwesomeIcon>
                </a>
                </li>
            </ul>

            <div className="details">
                <h2>John Smith
                <br/>
                <span className="job-title">UI Developer</span>
                </h2>
            </div>
            </div>
        </div>
            
            
        <div className="card-wrapper">
            
            <div className="card profile-two">
                
                <div className="card-image profile-img--two">
                <img src="https://image.ibb.co/c9rY6J/profile02.jpg" alt="profile two"/>
                </div>

                <ul className="social-icons">
                <li>
                    <a href="">
                    <FontAwesomeIcon icon={faTwitter} className="fab fa-facebook-f"></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a href="">
                    <FontAwesomeIcon icon={faTwitter} className="fab fa-instagram"></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a href="">
                    <FontAwesomeIcon icon={faTwitter} className="fab fa-twitter"></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a href="">
                    <FontAwesomeIcon icon={faTwitter} className="fab fa-dribbble"></FontAwesomeIcon>
                    </a>
                </li>
                </ul>

                <div className="details jane">
                    <h2>Jane Doe
                    <br/>
                    <span className="job-title">UI Designer</span>
                    </h2>
                </div>
            </div>
        </div>  
        <div className="card-wrapper">
            
            <div className="card profile-two">
                
                <div className="card-image profile-img--two">
                <img src="https://image.ibb.co/c9rY6J/profile02.jpg" alt="profile two"/>
                </div>

                <ul className="social-icons">
                <li>
                    <a href="">
                    <FontAwesomeIcon icon={faTwitter} className="fab fa-facebook-f"></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a href="">
                    <FontAwesomeIcon icon={faTwitter} className="fab fa-instagram"></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a href="">
                    <FontAwesomeIcon icon={faTwitter} className="fab fa-twitter"></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a href="">
                    <FontAwesomeIcon icon={faTwitter} className="fab fa-dribbble"></FontAwesomeIcon>
                    </a>
                </li>
                </ul>

                <div className="details jane">
                    <h2>Jane Doe
                    <br/>
                    <span className="job-title">UI Designer</span>
                    </h2>
                </div>
            </div>
        </div> 
        <div className="card-wrapper">
            
            <div className="card profile-two">
                
                <div className="card-image profile-img--two">
                <img src="https://image.ibb.co/c9rY6J/profile02.jpg" alt="profile two"/>
                </div>

                <ul className="social-icons">
                <li>
                    <a href="">
                    <FontAwesomeIcon icon={faTwitter} className="fab fa-facebook-f"></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a href="">
                    <FontAwesomeIcon icon={faTwitter} className="fab fa-instagram"></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a href="">
                    <FontAwesomeIcon icon={faTwitter} className="fab fa-twitter"></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a href="">
                    <FontAwesomeIcon icon={faTwitter} className="fab fa-dribbble"></FontAwesomeIcon>
                    </a>
                </li>
                </ul>

                <div className="details jane">
                    <h2>Jane Doe
                    <br/>
                    <span className="job-title">UI Designer</span>
                    </h2>
                </div>
            </div>
        </div>  
        <div className="card-wrapper">
            
            <div className="card profile-two">
                
                <div className="card-image profile-img--two">
                <img src="https://image.ibb.co/c9rY6J/profile02.jpg" alt="profile two"/>
                </div>

                <ul className="social-icons">
                <li>
                    <a href="">
                    <FontAwesomeIcon icon={faTwitter} className="fab fa-facebook-f"></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a href="">
                    <FontAwesomeIcon icon={faTwitter} className="fab fa-instagram"></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a href="">
                    <FontAwesomeIcon icon={faTwitter} className="fab fa-twitter"></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a href="">
                    <FontAwesomeIcon icon={faTwitter} className="fab fa-dribbble"></FontAwesomeIcon>
                    </a>
                </li>
                </ul>

                <div className="details jane">
                    <h2>Jane Doe
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