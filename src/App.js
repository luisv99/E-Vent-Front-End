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
import Provedores from './Components/Provedores';
import Admin from './Components/Admin';
import Users from './Components/Users';
import ServiciosAdmin from './Components/ServiciosAdmin';
import Catalogo from './Components/Catalogo';
import Proveedores from './Components/Proveedores';
import Checkout from './Components/Checkout';
import TarjetaCredito from './Components/TarjetaCredito';
import React from "react";
import AddServices from './Components/AddServices';

//fernando
import InputDistribuidor from "./Components/InputDistribuidor";
import ListDistribuidores from "./Components/ListDistribuidores";
import ProveedorServicios from "./Components/ProveedorServicios";

import PagoPorZelle from './Components/PagoPorZelle';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import EditProveedores from './Components/EditProveedores';


function App() {
    
  return (
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
        <Route path="/register">
          <Login></Login>
        </Route>
        <Route path="/CrearEvento">
          <CrearEvento></CrearEvento>
        </Route>
        <Route path="/recomendations">
          <Recomendaciones></Recomendaciones>
        </Route>

        <Route path="/TarjetaCredito">
          <TarjetaCredito></TarjetaCredito>
        </Route>
        <Route path="/contact">
          <Contacto></Contacto>
        </Route>
        <Route path="/SignUp">
          <SignUp></SignUp>
        </Route>
        <Route path="/Services">
          <Services></Services>
        </Route>

        <Route path="/Checkout">
          <Checkout></Checkout>
        </Route>
        
        <Route path="/Provedores">
          <Provedores></Provedores>
        </Route>
      
        <Route path="/Catalogo">
          <Catalogo></Catalogo>
        </Route>

        <Route path="/Admin">
          <Admin/>
        </Route>
        <Route path="/Users">
          <Users/>
        </Route>
        
        
        <Route path="/ProveedoresAdmin">
          <Proveedores/>
        </Route>

        <Route path="/AddServices">
          <AddServices/>
          </Route>
        <Route path="/DistribuidoresAdmin">
          <ListDistribuidores/>
          <InputDistribuidor/> 
        </Route>
        <Route path="/ProveedorServicios">
          <ProveedorServicios/>
        </Route>

     
        
        
      
        <Route path="/ServicesAdmin">
          <ServiciosAdmin/>
        </Route>

        <Route path="/editProveedor">
          <EditProveedores/>
        </Route>
        
        <Route path="/PagoPorZelle">
          <PagoPorZelle/>
        </Route>

      
      </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
