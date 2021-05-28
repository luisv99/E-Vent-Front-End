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
          <div className="slide" data-aos="fade-up-right" data-aos-duration="2000">
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
        <div className="content1">
          <h2 className="title1" data-aos="fade-up-right" data-aos-duration="2000">Unica agencia de festejos <span style={{color: "#9c0525"}}>VIRTUAL</span> <br/>en el pais</h2>
          <img data-aos="fade-up" data-aos-duration="1800" className="img1" src="/imagenes/party2.png" alt="" />
        </div>
      </div>

      <div className="title2">
        <h1 data-aos="zoom-in" data-aos-duration="2000" >Contrata tus servicios favoritos</h1>
      </div>
      
      <div className="hero3">
        <div className="content2">
        <img data-aos="fade-up" data-aos-duration="1800" className="img2" src="/imagenes/SantaTeresa.jpg" alt="" />
        <h2 className="title3" data-aos="fade-up" data-aos-duration="1800">Bebidas</h2>
        </div>
      </div>

      <div className="hero3">
        <div className="content2">
        <h2 className="title3" data-aos="fade-up" data-aos-duration="1800">Comida</h2>
        <img data-aos="fade-up" data-aos-duration="1800" className="img2" src="/imagenes/Caracas-Catering.jpg" alt="" />
        <img data-aos="fade-up" data-aos-duration="1800" className="img3" src="/imagenes/Arabito.png" alt="" />
        </div>
      </div>
      

      <div className="hero3">
        <div className="content2">
        <img data-aos="fade-up" data-aos-duration="1800" className="img3" src="/imagenes/party4.png" alt="" />
        <h2 className="title4" data-aos="fade-up" data-aos-duration="1800">Fiestas</h2>
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