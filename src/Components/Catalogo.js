import React from 'react';
import './Catalogos.js'

function Catalogo () {
       
    return(
        <div className="Catalogo">
            <img src="imagenes/party2.png" alt="" />
            <div className="cat-body">
                <h4 className="cat-title"> mi titulo</h4>
                <p className="cat-text text-secondary">"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia,
                 voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam."</p>

            </div>
            
        </div>
       
    )
}

export default Catalogo