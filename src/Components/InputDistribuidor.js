/*import React, {Fragment, useState} from "react";

const InputDistribuidor = () => {

const [nombre, setNombre] = useState("");
const onSubmitForm = async e => {
    e.preventDefault();
    try {
        const body = {nombre};
        const response = await fetch("https://dry-shelf-94984.herokuapp.com/distribuidores",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        })
        console.log(response)
        window.location = "/";
    } catch (error) {
        console.error(error.message)
    }
}


    return <Fragment><h1 className="text-center mt-5">LISTA DISTRIBUIDORES</h1> 
    <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input type="text" className="form-control" value={nombre} onChange={e => setNombre(e.target.value)}/>
        <button className="btn btn-success">Agregar</button>
    </form>
    
    
    </Fragment>
};

export default InputDistribuidor;*/