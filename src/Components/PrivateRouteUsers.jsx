import { Route } from "react-router";
import { Redirect } from "react-router-dom";
import React, { useEffect, useState } from 'react';



const PrivateRouteUsers = ({component: Component, ...rest}) => {
        
    let isUser;
    const role = (localStorage.getItem('roles'));
    
    console.log('Role: ' + role);

    if (role == 'ROLE_USER'){
        isUser = true;  
        return <Route {...rest}>{isUser ? <Redirect to="/"/>: <Component/>}</Route>
};

}

export default PrivateRouteUsers;