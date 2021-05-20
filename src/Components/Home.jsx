import {
  Link
} from "react-router-dom";


export default function Home(){
    return(
       <>
        <main className="hero">
          <div className="info-content" data-aos="fade-up" data-aos-duration="2000">
            <h3>Welcome To</h3>
            <h1>E-Vent</h1>
            <p>Crea tu propio evento desde casa a tu gusto, y nosotros hacemos el resto por ti</p>
            <br />
            <Link to="/login" className="iniciar-sesion">Iniciar Sesion</Link>
            <Link to="/register" className="registro">Registrarme</Link> {/*hola Marcos*/}   {/*hola*/}   
          </div>
      </main>

       </>
    )
}