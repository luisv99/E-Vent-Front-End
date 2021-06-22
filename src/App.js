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
import React from "react";
import AddServices from './Components/AddServices';
import PagoPorZelle from './Components/PagoPorZelle';
import ServiciosProveedor from './Components/ServiciosProveedor';
import EditProveedores from './Components/EditProveedores';
import EditServicios from './Components/EditServicios';
import UserProfile from './Components/UserProfile';
import Checkout from './Components/Checkout';
import PrivateRoute from './Components/PrivateRoute';
import PrivateRouteUsers from './Components/PrivateRouteUsers';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {

  let rol = localStorage.getItem('roles');
  console.log(rol);
  let isUser;
  let isProveedor;
  let isAdmin = false;
  
  if (rol == 'ROLE_USER'){
    isUser = true;  
    console.log('isUser: ' + isUser);
  }else{
    isUser = false;
    console.log('isUser: ' + isUser);
  };

  if (rol == 'ROLE_PROVEEDOR'){
    isProveedor = true;  
    console.log('proveedor: ' + isProveedor);
  }else{
    isProveedor = false;
    console.log('proveedor: ' + isProveedor);
  };
    
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

        {(isUser || isAdmin) && <Route path="/CrearEvento">
          <CrearEvento></CrearEvento>
        </Route>}

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

      
        <Route path="/Catalogo">
          <Catalogo></Catalogo>
        </Route>

        {/*<Route path="/Admin">
          <Admin/>
        </Route>*/}


        {isUser && <PrivateRouteUsers exact path="/Admin" component={Admin}/>}
        {!isUser && <PrivateRoute exact path="/Admin" component={Admin}/>}
        
        {!isUser && <PrivateRoute exact path="/Provedores" component={Provedores}/>}
        {isUser && <PrivateRouteUsers exact path="/Provedores" component={Provedores}/>}

        {!isUser && <PrivateRoute exact path="/CrearEvento" component={CrearEvento}/>}

        {!isUser && <PrivateRoute exact path="/Users" component={Users}/>}
        {isUser && <PrivateRouteUsers exact path="/Users" component={Users}/>}

        {!isUser && <PrivateRoute exact path="/ServiciosAdmin" component={ServiciosAdmin}/>}
        {isUser && <PrivateRouteUsers exact path="/ServiciosAdmin" component={ServiciosAdmin}/>}

        {!isUser && <PrivateRoute exact path="/ProveedoresAdmin" component={Proveedores}/>}
        {isUser && <PrivateRouteUsers exact path="/ProveedoresAdmin" component={Proveedores}/>}

        {isUser && <PrivateRouteUsers exact path="/AddServices" component={AddServices}/>}
        {isUser && <PrivateRouteUsers exact path="/EditProveedores/:proveedor_id" component={EditProveedores}/>}
        {isUser && <PrivateRouteUsers exact path="/EditServicios/:servicio_id" component={EditServicios}/>}
        
        {!isUser && <PrivateRoute exact path="/PagoPorZelle" component={PagoPorZelle}/>}
        {!isUser && <PrivateRoute exact path="/UserProfile/:user_id" component={PagoPorZelle}/>}

        {isUser && <PrivateRouteUsers exact path="/ServiciosProveedor" component={EditServicios}/>}

        {isAdmin && <Route path="/Users">
          <Users/>
        </Route>}
        
       {isAdmin && <Route path="/ServiciosAdmin">
          <ServiciosAdmin/>
        </Route>}
        
       {isAdmin && <Route path="/ProveedoresAdmin">
          <Proveedores/>
        </Route>}

        {(isAdmin || isProveedor) && <Route path="/AddServices">
          <AddServices/>
        </Route>}

        {(isAdmin || isProveedor) && <Route path="/EditProveedores/:proveedor_id">
          <EditProveedores/>
        </Route>}

        {(isAdmin || isProveedor) && <Route path="/EditServicios/:servicio_id">
          <EditServicios/>
        </Route>}
        
        {(isAdmin || isUser) && <Route path="/PagoPorZelle">
          <PagoPorZelle/>
        </Route>}

        {(isUser) && <Route path="/UserProfile/:user_id">
          <UserProfile/>
        </Route>}

        {(isAdmin || isUser) && <Route path="/Checkout">
          <Checkout/>
        </Route>}

        {(isAdmin || isProveedor) && <Route path="/ServiciosProveedor">
          <ServiciosProveedor/>
        </Route>}

      
      </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
