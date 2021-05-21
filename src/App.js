import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Login from './Components/Login';
import Recomendaciones from './Components/Recomendaciones';
import Contacto from './Components/Contacto';
import SignUp from './Components/SignUp';
import Footer from './Components/Footer';
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
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
