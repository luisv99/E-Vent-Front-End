import './RecomendacionesStyles.css'

export default function Recomendaciones(){
    return(
        <>
            <div className="contenedor1">
                <h2>Para los Adultos</h2>

                <div className="contenedor">
                    <div className="card">
                        <h3>Pasapalos</h3>
                        <p>Recuerda siempre contratar una agencia encargada de los pasapalos y el servicio de mesoneros 
                            para tu evento.
                            Esto siempre te hara quedar bien y ademas, a los invitados siempre les gusta tener 
                            algo para "picar".
                        </p>
                    </div>

                    <div className="card" id="card2">
                        <h3>Toldo</h3>
                        <p>Nunca se sabe si puede llover, por eso te recomendamos contratar alguna compania 
                            encargada de la instalacion de toldos (mas que todo si tienes jardin).
                        </p>
                    </div>

                    <div className="card">
                       <h3>Recomendacion 3</h3>
                    </div>
                </div>
                <h1 className="tituloJovenes">Para los Jovenes</h1>
                <div className="cont2">
                    <div className="card">
                        <h3>Hielo</h3>
                        <p>Es muy importante que el hielo nunca se acabe, es por eso que E-Vent
                            te recomienda calcular una bolsa de hielo por cada 3 personas
                        </p>
                    </div>

                    <div className="card" id="card2">
                        <h3>Comida</h3>
                        <p>Nunca olvides contratar alguna compania encargada de un servicio de comida,
                            puedes optar por comida rapida como arepas y perros calientes.
                        </p>
                    </div>

                    <div className="card">
                       <h3>Seguridad</h3>
                       <p>Siempre es importante que haya alguien encargado de la entrada del evento,
                           por eso te recomendamos que coloques seguridad en la entrada para garantizar
                           el orden y cuidarte de los coleados.
                        </p>
                    </div>
                </div>
            </div>
            
       
        </>
    )
}