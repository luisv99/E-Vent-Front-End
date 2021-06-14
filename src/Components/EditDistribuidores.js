/*import React, {Fragment, useState} from "react";

const EditDistribuidores = ({distribuidor}) => {
    const [nombre, setNombre]= useState(distribuidor.nombre);
    
    //editar funcion
    const updateNombre = async() =>{
        
        try {
            const body = {nombre};
            const response = await fetch(`http://localhost:5000/distribuidores/${distribuidor.id}`,
            {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })

            window.location = "/";
        } catch (error) {
            console.error(error.message)
        }

    }


    return <Fragment>

<button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#id${distribuidor.id}`}>
  Editar
</button>

<div class="modal" id={`id${distribuidor.id}`} 
 onClick={() => setNombre(distribuidor.nombre)}>
  <div class="modal-dialog">
    <div class="modal-content">

      <div class="modal-header">
        <h4 class="modal-title">Editar Distribuidor</h4>
        <button type="button" class="close" data-dismiss="modal" onClick={() => setNombre(distribuidor.nombre)}>&times;</button>
      </div>

      <div class="modal-body">
        <input type="text" className="form-control" value={nombre} onChange={e => setNombre(e.target.value)}/>
      </div>

     
      <div class="modal-footer">
      <button type="button" class="btn btn-warning" data-dismiss="modal" onClick={e => updateNombre(e)}>Edit</button>
        <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={() => setNombre(distribuidor.nombre)}>Close</button>
      </div>

    </div>
  </div>
</div>


    </Fragment>
}
export default EditDistribuidores;*/