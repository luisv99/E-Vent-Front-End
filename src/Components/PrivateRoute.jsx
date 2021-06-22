import { Route } from "react-router";
import { Redirect } from "react-router-dom";
import React, { useEffect, useState } from 'react';



const PrivateRoute = ({component: Component, ...rest}) => {
    
    const [rol, setRol] = useState("");
    
    let isProveedor;
    const role = (localStorage.getItem('roles'));
    
    useEffect(()=>{
        //userType();
    });
    
    console.log('Role: ' + role);
    if (role == 'ROLE_PROVEEDOR'){
        isProveedor = true;  
        //console.log("isProveedor " + isProveedor);  
    }else{
        isProveedor = false;
        console.log("isProveedor " + isProveedor);
    };

      return <Route {...rest}>{!isProveedor ? <Component/>:<Redirect to="/ServiciosProveedor"/>}</Route>
      
};


export default PrivateRoute;