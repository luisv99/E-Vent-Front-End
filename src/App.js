import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Login from './Components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Recomendaciones from './Components/Recomendaciones';
import Contacto from './Components/Contacto';
import SignUp from './Components/SignUp';

function App() {
  return (
    <Router>
    <>
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
        <Route path="/recomendations">
          <Recomendaciones></Recomendaciones>
        </Route>
        <Route path="/contact">
          <Contacto></Contacto>
        </Route>
        <Route path="/SignUp">
          <SignUp></SignUp>
        </Route>
      </Switch>
     
    </>
    </Router>
  );
}

export default App;
