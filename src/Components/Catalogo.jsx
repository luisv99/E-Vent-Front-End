import './CatalogosStyle.scss'

export default function Catalogo(){
    return(
        <>
            <div className="cont1">
                <h2>Catálogo</h2>

                <div className="cont">
                    <div className="card">
                        <h3>KFC</h3>
                        <img src="/imagenes/KFC.JPG" alt=""/>
                        <p>Kentucky Fried Chicken, más conocido por sus siglas KFC, 
                            es la cadena de restaurantes de pollo más importante del mundo, 
                            iniciada por Harland D. Sanders en los años 30 en los Estados Unidos, 
                            actualmente cuentacon más de 18.000 restaurantes y presencia en más de 120 países.
                        </p>
                        <a href="#!" className="button">
                            Agregar
                        </a>
                    </div>

                    <div className="card" id="card2">
                        <h3>Santa Teresa</h3>
                        <img src="/imagenes/rones.JPG" alt=""/>
                        <p>Santa Teresa 1796 se posicionó entre los tres mejores 
                            rones con añejamiento superior a tres años y entre los diez mejores rones en 2019, 
                            en una lista que abarca 36 productos que superaron el estándar mínimo establecido por Beverage Tasting 
                            Institute para recibir alguna de las distinciones.
                        </p>
                        <a href="#!" className="button">
                            Agregar
                        </a>
                    </div>

                    <div className="card">
                       <h3>Pizpa</h3>
                       <img src="/imagenes/pizpa.JPG" alt=""/>
                        <p>Las mejores pizzas del mercado para los mejores eventos, trabajamos las 24 horas del dia
                            tenemos pizzas de todos los estilos, para los amantes del dulce, salado y hasta pizzas picantes
                            todo lo puedes conseguir en un solo lugar llama ya a pizpa yaaa
                        </p>
                        <a href="#!" className="button">
                            Agregar
                        </a>
                    </div>
                </div>
               
            </div>
            
       
        </>
    )
}