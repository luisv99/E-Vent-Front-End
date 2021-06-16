import './HomeStyles.css'
import './Slideshow'
import AOS from 'aos';
import 'aos/dist/aos.css'
import {useEffect} from 'react'

import {
  Link
} from "react-router-dom";
import Slideshow from './Slideshow';

export default function Home(){

  const logOut = event =>{
    localStorage.clear();
    window.location.reload();
  }

  useEffect(()=>{
    AOS.init();
  })
  
  if(!localStorage.getItem('SavedToken')){

    return(
       <>
       
       <div className="allHome">

      
        <main className="hero">
          <div className="slide" data-aos="fade-up-right" data-aos-duration="2000">
            <Slideshow/>
          </div>
          
          
          
          <div className="info-content" data-aos="fade-up" data-aos-duration="3000">

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
          <h2 className="title1" data-aos="fade-up-right" data-aos-duration="3000">Unica agencia de festejos <span style={{color: "#9c0525" ,fontWeight:"900"}}>VIRTUAL</span> <br/>en el pais</h2>
          <img data-aos="fade-up" data-aos-duration="3000" className="img1" src="/imagenes/party2.png" alt="" />
        </div>
      </div>

      


      <div className="title2">
        <h1 data-aos="zoom-in" data-aos-duration="2000" >Contrata tus servicios favoritos</h1>
      </div>
      
      <div className="hero3">
        <div className="content2">
        <h2 className="title3" data-aos="fade-up" data-aos-duration="1800">Bebidas</h2>
        <img data-aos="fade-up" data-aos-duration="1800" className="img2" src="/imagenes/SantaTeresa.jpg" alt="" />
        </div>
      </div>

      <div className="hero3">
        <div className="content2">
        <h2 className="title3" data-aos="fade-up" data-aos-duration="1800">Comida</h2>
        <img data-aos="fade-up" data-aos-duration="1800" className="img2" src="/imagenes/Caracas-Catering.jpg" alt="" />
        </div>
      </div>
      

      <div className="hero3" id="divFiestas1">
        <div className="content2" id="divFiestas">
        <h2 className="title4" data-aos="fade-up" data-aos-duration="1800">Fiestas</h2>
        <img data-aos="fade-up" data-aos-duration="1800"  id="img4" src="/imagenes/party4.png" alt="" />
        </div>
      </div>
      </div>
      </>
    )
  }
  else{

    return(
    <>
    <div className="allHome">
    <main className="hero">
      <div className="slide">
            <Slideshow/>
      </div>
      <div className="info-content" data-aos="fade-up" data-aos-duration="2000">
        <h3>Welcome To</h3>
        <h1>E-Vent</h1>
        <p>Crea tu propio evento desde casa a tu gusto, y nosotros hacemos el resto por ti</p>
        <br />
        <button onClick={logOut} className="iniciar-sesion">Terminar Sesion</button>
      </div>
  </main>
    <div className="hero2" >
    <div className="content1">
      <h2 className="title1" data-aos="fade-up-right" data-aos-duration="2000">Unica agencia de festejos <span style={{color: "#9c0525" ,fontWeight:"900"}}>VIRTUAL</span> <br/>en el pais</h2>
      <img data-aos="fade-up" data-aos-duration="1800" className="img1" src="/imagenes/party2.png" alt="" />
    </div>
  <div className="title2">
    <h1 data-aos="zoom-in" data-aos-duration="2000" >Contrata tus servicios favoritos</h1>
  </div>
  
  </div>

  <div className="hero3">
    <div className="content2">
    <h2 className="title3" data-aos="fade-up" data-aos-duration="1800">Bebidas</h2>
    <img data-aos="fade-up" data-aos-duration="1800" className="img2" src="/imagenes/SantaTeresa.jpg" alt="" />
    </div>
  </div>

  <div className="hero3">
    <div className="content2">
    <h2 className="title3" data-aos="fade-up" data-aos-duration="1800">Comida</h2>
    <img data-aos="fade-up" data-aos-duration="1800" className="img2" src="/imagenes/Caracas-Catering.jpg" alt="" />
    </div>
  </div>
  

  <div className="hero3" id="divFiestas1">
    <div className="content2" id="divFiestas">
    <h2 className="title4" data-aos="fade-up" data-aos-duration="1800">Fiestas</h2>
    <img data-aos="fade-up" data-aos-duration="1800" id="img4" src="/imagenes/party4.png" alt="" />
    </div>
  </div>

  </div>
  </>
    
    )


  }
}


