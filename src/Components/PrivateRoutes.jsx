import { useContext } from "react";
import { Route } from "react-router";
import { Redirect } from "react-router-dom";
import { RolesContext } from "./RolesContextProvider";

const PrivateRoutes = ({component: View, availableForRole=[] , ...args}) => {
    const {role} = useContext(RolesContext);
    console.log('Role en privateRoutes ' + role);

    return (
        <Route {...args}
        render = {({location}) => {
            if (availableForRole.indexOf(role)>-1) {
                return <View/>;
            } else {
                return (
                    <Redirect 
                    to= {{
                        pathname: "/",
                        state: {from: location},
                    }}
                />
            );
        };
    }}
/>
);
};

export default PrivateRoutes;
                    
                