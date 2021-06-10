import './editProveedoresStyles.css'

export default function editProveedores(){
    return(
        <>

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

        </>
        
    )
}