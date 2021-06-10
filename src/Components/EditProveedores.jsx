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