import React, {useEffect, useState } from 'react'

export const RolesContext = React.createContext({});

export default function RolesContextProvider({ children }){
    const [role, setRole] = useState("");

    useEffect(()=>{
        setRole(localStorage.getItem('roles'))
    },[])

    return(
        <RolesContext.Provider value={{role,setRole}}>
            {children}
        </RolesContext.Provider>
    )
}
