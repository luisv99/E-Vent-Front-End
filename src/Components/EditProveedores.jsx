import './editProveedoresStyles.css'

export default function editProveedores(){
    return(
        <>
            <div className="cont">
            <div className="signupSectionServices">
                <div className="infoServices">
                    <h1>E-Vent</h1>
                    <br></br>
                    <h1>LOGO</h1>
                </div>
                
                <form action="#"  method="POST" className="addServiceForm" name="signupform">
                    <h2>Editar a ...</h2>
                    <ul className="noBullet">
                        
                        <li>
                            <input type="text" className="inputFields" id="nombre" name="nombre" placeholder="Nombre" required />
                        </li>

    <div className="formularioEdit">
    <form action="#" target="" method="get" name="formDatosPersonales">

	<label htmlFor="name">Nombre</label>
	<input type="text" name="nombre" id="nombre" placeholder="Nombre"/>

	<label htmlFor="email">Email</label>
	<input type="text" name="apellidos" id="apellidos" placeholder="Email"/>

	<label htmlFor="password">Password</label>
	<input type="email" name="email" id="email" placeholder="Password" required />
	
    <label htmlFor="telefono">Telefono</label>
	<input type="text" name="mensaje" for="mensaje" placeholder="Telefono" maxlength="300"/>

	<textarea name="mensaje" for="mensaje" placeholder="Descripcion" maxlength="300"></textarea>

	<input type ="file" name="asunto" id="asunto" placeholder="titular de la consulta"/>
	
	<input type="submit" name="enviar" value="Confirmar"/>
</form>
</div>
                        <li>
                            <input type="file" className="inputFields" required />
                        </li>

                        
                        <li>
                            <input type="text" className="inputFields" id="price" name="price" placeholder="Email" required />
                        </li>
                        
                        <li>
                            <input type="text" className="inputFields" placeholder="Password" />
                        </li>

                        <li>
                            <input type="text" className="inputFields" placeholder="Telefono" />
                        </li>
                        
                        <li>
                            <textarea type="text" className="inputFields" id="direccion" name="Promocion" placeholder="Direccion" />
                        </li>

                        
                            <input type="submit" id="join-btn" name="join" alt="Join" value="Editar"/>
                    </ul>
                
                </form>
                
            </div>
            </div>
    
	

        </>
        
    )
}