import './SignUpStyles.scss'

export default function (){
    return(
        <>
            <div className="cont">
            <div className="signupSection">
                <div className="info">
                    <h1>E-Vent</h1>
                    <br></br>
                    <h1>LOGO</h1>
                </div>
                
                <form action="#" method="POST" className="signupForm" name="signupform">
                    <h2>Crear una cuenta</h2>
                    <ul className="noBullet">
                        <li>
                            <label htmlfor="nombre"></label>
                            <input type="text" className="inputFields" id="nombre" name="nombre" placeholder="Nombre"  required />
                        </li>
                        <li>
                            <label htmlfor="apellido"></label>
                            <input type="text" className="inputFields" id="apellido" name="apellido" placeholder="Apellido"  required />
                        </li>
                        <li>
                            <label htmlfor="email"></label>
                            <input type="email" className="inputFields" id="email" name="email" placeholder="Email"  required />
                        </li>
                        <li>
                            <label htmlfor="password"></label>
                            <input type="password" className="inputFields" id="password" name="password" placeholder="Contraseña"  required />
                        </li>
                        <li id="center-btn">
                            <input type="submit" id="join-btn" name="join" alt="Join" value="Entrar a E-Vent"/>
                        </li>
                    </ul>
                
                </form>
                
            </div>
            </div>
        
        </>
    )
}