import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars,faShoppingCart} from '@fortawesome/free-solid-svg-icons'


export default function NavBar(){
    return(
        <>
        <header className="header">
            <nav className="navbar">
            <ul className="menu" id="menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">Crea tu E-Vent</a></li>
                <li><a href="#">Recomendaciones</a></li>
                <li><a href="#">Contact</a></li>
                {/*<li><a href="#">Sign in</a></li> */}
            </ul>

            <div className="menu-bar">
                <FontAwesomeIcon icon={faBars} id="menu-bar" className="fas"/>
            </div>

            <div className="shop">
                <FontAwesomeIcon icon={faShoppingCart} className="fas"/>
            </div>

            </nav>
        </header>

    <main className="hero">
      <div className="info-content" data-aos="fade-up" data-aos-duration="2000">
        <h3>Welcome To</h3>
        <h1>E-Vent</h1>
        <p>Crea tu propio evento desde casa a tu gusto, y nosotros hacemos el resto por ti</p>
        <br />
        <a href="www.google.com" className="iniciar-sesion">Iniciar Sesion</a>
        <a href="www.google.com" className="registro">Registrarme</a>
      </div>
    </main>



    
    
    </>
    )
}