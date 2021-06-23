import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Login from './Components/Login';
import CrearEvento from './Components/CrearEvento';
import Recomendaciones from './Components/Recomendaciones';
import Contacto from './Components/Contacto';
import SignUp from './Components/SignUp';
import Footer from './Components/Footer';
import Services from './Components/Services';
import EventServices from './Components/EventServices';
import UserEvents from './Components/UserEvents';
import Provedores from './Components/Provedores';
import Admin from './Components/Admin';
import Users from './Components/Users';
import ServiciosAdmin from './Components/ServiciosAdmin';
import Catalogo from './Components/Catalogo';
import Proveedores from './Components/Proveedores';
import AddServices from './Components/AddServices';
import ServiciosProveedor from './Components/ServiciosProveedor';
import EditProveedores from './Components/EditProveedores';
import EditServicios from './Components/EditServicios';
import UserProfile from './Components/UserProfile';
import Checkout from './Components/Checkout';
import PrivateRoutes from './Components/PrivateRoutes';
import Facturacion from './Components/Facturacion';
import PagoExitoso from './Components/PagoExitoso';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import React, { useContext } from 'react';
import RolesContextProvider, { RolesContext } from './Components/RolesContextProvider';



function App() {


console.log(localStorage.getItem('roles'));

  return (
    <RolesContextProvider>

    <Router>
      <div className="App">

      <NavBar/>
      <Switch>

        <Route path="/" exact>
          <Home></Home>
        </Route>

        <Route path="/login">
            <Login></Login> 
        </Route>

        <Route path="/CrearEvento">
          <CrearEvento></CrearEvento>
        </Route>

        <Route path="/recomendations">
          <Recomendaciones></Recomendaciones>
        </Route>

        <Route path="/contact">
          <Contacto></Contacto>
        </Route>

        <Route path="/SignUp">
          <SignUp></SignUp>
        </Route>


        <Route path="/Services/:proveedor_id">
          <Services></Services>
        </Route>
        
        <Route path="/EventServices/:event_id">
          <EventServices></EventServices>
        </Route>

        <Route path="/UserEvents">
          <UserEvents></UserEvents>
        </Route>
        
        {/*<Route path="/Provedores">
            <Provedores></Provedores>
        </Route>*/}

        <PrivateRoutes path="/Provedores" availableForRole={["ROLE_ADMIN"]} component={Provedores}/>

        <Route path="/Catalogo">
          <Catalogo></Catalogo>
        </Route>

      {/*<Route path="/Admin">
          <Admin/>
        </Route>*/}

        <PrivateRoutes path="/Admin" availableForRole={["ROLE_ADMIN"]} component={Admin}/>


        {/*<Route path="/Users">
          <Users/>
        </Route>*/}

        <PrivateRoutes path="/Users" availableForRole={["ROLE_ADMIN"]} component={Users}/>

        
        {/*<Route path="/ServiciosAdmin">
          <ServiciosAdmin/>
        </Route>*/}

        <PrivateRoutes path="/ServiciosAdmin" availableForRole={["ROLE_ADMIN"]} component={ServiciosAdmin}/>
        
        {/*<Route path="/ProveedoresAdmin">
          <Proveedores/>
        </Route>*/}

        <PrivateRoutes path="/ProveedoresAdmin" availableForRole={["ROLE_ADMIN"]} component={Proveedores}/>

        {/*<Route path="/AddServices">
          <AddServices/>
      </Route>*/}

        <PrivateRoutes path="/AddServices" availableForRole={["ROLE_PROVEEDOR"]} component={AddServices}/>

        {/*<Route path="/EditProveedores/:proveedor_id">
          <EditProveedores/>
    </Route>*/}

      <PrivateRoutes path="/EditProveedores/:proveedor_id" availableForRole={["ROLE_ADMIN"]} component={EditProveedores}/>

        {/*<Route path="/EditServicios/:servicio_id">
          <EditServicios/>
        </Route>*/}

        <PrivateRoutes path="/EditServicios/:servicio_id" availableForRole={["ROLE_PROVEEDOR"]} component={EditServicios}/>

        <Route path="/UserProfile/:user_id">
          <UserProfile/>
        </Route>

        <Route path="/Checkout">
          <Checkout/>
        </Route>

        <Route path="/ServiciosProveedor">
          <ServiciosProveedor/>
        </Route>

        <Route path="/Factura">
          <Facturacion/>
        </Route>

        <Route path="/PagoExitoso">
          <PagoExitoso/>
        </Route>
      
      </Switch>

      <Footer/>

    </div>

    </Router>

   </RolesContextProvider>
  );
}

export default App;
