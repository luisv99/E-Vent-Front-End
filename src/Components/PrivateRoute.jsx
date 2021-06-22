import { Route } from "react-router";
import { Redirect } from "react-router-dom";
import React, { useEffect, useState } from 'react';

const PrivateRoute = ({component: Component, ...rest}) => {
    const role = (localStorage.getItem('roles'));
    let isProveedor;

    if (role == 'ROLE_PROVEEDOR'){
        isProveedor = true;  
        console.log("isProveedor " + isProveedor); 
        return <Route {...rest}>{isProveedor ? <Redirect to="/ServiciosProveedor"/>: <Component/>}</Route> 
    }


      
};


export default PrivateRoute;