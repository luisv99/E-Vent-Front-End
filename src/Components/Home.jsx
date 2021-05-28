import './HomeStyles.css'
import './Slideshow'
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css'
import {useEffect} from 'react'

import {
  Link
} from "react-router-dom";
import Slideshow from './Slideshow';

export default function Home(){
  useEffect(()=>{
    AOS.init();
  })
    return(
       <>
       
       
        <main className="hero">
          <div className="slide">
            <Slideshow/>
          </div>
          
          
          
          <div className="info-content" data-aos="fade-up" data-aos-duration="2000">

            <h3>Welcome To</h3>
            <h1>E-Vent</h1>
            <p>Crea tu propio evento desde casa a tu gusto, y nosotros hacemos el resto por ti</p>
            <br />
            <Link to="/login" className="iniciar-sesion">Iniciar Sesion</Link>
            <Link to="/SignUp" className="registro">Registrarme</Link>   
          </div>
          
      
      </main>

      

      <div className="hero2" >
        <div className="content1" data-aos="fade-up">
          <h2 className="title1">Unica agencia de festejos virtual <br/>en el pais</h2>
          <img className="img1" src="/Imagenes/party2.png" alt="" />
        </div>
      </div>

      <h1 className="title2">Contrata tus servicios favoritos</h1>
      <div className="hero3">
        <div className="content2">
        <img className="img2" src="/imagenes/SantaTeresa.jpg" alt="" />
        <h2 className="title3" data-aos="fade-up">Bebidas</h2>
        </div>
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