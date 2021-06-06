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
import Proveedores from './Components/Proveedores';
import Catalogo from './Components/Catalogo';
import Catalogos from './Components/Catalogos';
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


 

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
        <Route path="/contact">
          <Contacto></Contacto>
        </Route>
        <Route path="/SignUp">
          <SignUp></SignUp>
        </Route>
        <Route path="/Services">
          <Services></Services>
        </Route>
        <Route path="/Provedores">
          <Provedores></Provedores>
        </Route>
        <Route path="/Catalogo">
          <Catalogo></Catalogo>
        </Route>
        <Route path="/Catalogos">
          <Catalogos></Catalogos>
        </Route>
        <Route path="/Admin">
          <Admin/>
        </Route>
        <Route path="/Users">
          <Users/>
        </Route>
        <Route path="/ServiciosAdmin">
          <ServiciosAdmin/>
        </Route>
        
        <Route path="/ProveedoresAdmin">
          <Proveedores/>
        </Route>
        
      </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
