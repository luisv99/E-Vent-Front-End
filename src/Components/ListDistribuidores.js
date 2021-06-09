import React, {Fragment, useEffect, useState} from "react";
import EditDistribuidores from "./EditDistribuidores";

const ListDistribuidores = () => {

    const [distribuidores, setDistribuidores]= useState([]);

    //eliminar fuction
    const deleteDistribuidor = async (id) => {
        try {
            const deleteDistribuidor = await fetch(`http://localhost:5000/distribuidores/${id}`,{
                method: "DELETE"

            });
        setDistribuidores(distribuidores.filter(distribuidor => distribuidor.id !== id))

            
        } catch (error) {
            console.error(error.message)
        }
    }


    const getDistribuidores = async () => {
        try {

            const response = await fetch("http://localhost:5000/distribuidores");
            const jsonData = await response.json();
            setDistribuidores(jsonData)
            
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        getDistribuidores();
    }, []);

    console.log(distribuidores);

    return <Fragment>
        <table class="table mt-5 text-center">
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Editar</th>
        <th>Eliminar</th>
      </tr>
    </thead>
    <tbody>
        {distribuidores.map(distribuidor => (
            <tr key={distribuidor.id}>
                <td>{distribuidor.nombre}</td>
                <td>
                    <EditDistribuidores distribuidor={distribuidor}/>
                    </td>
                <td><button className="btn btn-danger" onClick={() => deleteDistribuidor(distribuidor.id)}>Eliminar</button></td>
            </tr>
        ))}
      
    </tbody>
  </table>
    </Fragment>

};
export default ListDistribuidores;