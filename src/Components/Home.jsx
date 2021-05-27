import './HomeStyles.css'
import './Slideshow'
import styled from 'styled-components';

import {
  Link
} from "react-router-dom";
import Slideshow from './Slideshow';

export default function Home(){
    return(
       <>
       
       
        <main className="hero">
          <div className="slide">
            <Slideshow/>
          </div>
          
          <div className="info-content" data-aos="fade-up" data-aos-duration="2000">


            <h3>Welcome To</h3>
            <h1>E-Vent</h1>
            <p>Crea tu propio evento desde casa, y nosotros hacemos el resto por ti</p>
            <br />
            <Link to="/login" className="iniciar-sesion">Iniciar Sesion</Link>
            <Link to="/SignUp" className="registro">Registrarme</Link>   
          </div>
      </main>
      <div className="hero2">
        <h1 style={{color: "red"}}>Más Contenido</h1>
      </div>
      </>
    )
}

const Titulo = styled.p `
    font-size: 18px;
    font-weight: 700;
    text-transform: upercase;
    margin-botto,: 10px
`;