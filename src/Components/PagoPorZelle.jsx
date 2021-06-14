import './PagoPorZelleStyles.css'


export default function PagoPorZelle(){
    return(
        <>
            <div className="pagoZelle">
                <form action="">
                <h2 className="tituloZelle">Usted ha seleccionado su pago por zelle</h2>
                <div className="correoZelle">
                    <label className="labelZelle" htmlFor="correoZelle">Correo</label>
                    <input className="inputZelle" type="email" id="correoZelle" required /> <br />
                    <label className="labelRef" htmlFor="ref">Numero de referencia</label>
                    <input className="inputRef" type="text" id="ref" required />
                    <br />
                    <input type="submit" value="Enviar" className="btnZelle" id="ref" required />
                </div>
                </form>
            </div>
        </>
    )
}