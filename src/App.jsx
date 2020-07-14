import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link,
  NavLink,
} from "react-router-dom"
import Inicio from './Components/inicio';
import Nosotros from './Components/nosotros';
import Contacto from './Components/contacto';

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <div className= "btn-group">
          <NavLink to="/" exact className="btn-dark" activeClassName="active">Inicio</NavLink>
          <NavLink to="/Nosotros" exact className="btn-dark" activeClassName="active">Nosotros</NavLink>
          <NavLink to="/Contacto" exact className="btn-dark" activeClassName="active">Contacto</NavLink>
        </div>
        <hr />
        <Switch>
          <Route path="/Nosotros">
            <Nosotros />
          </Route>
          <Route path="/Contacto">
            <Contacto />
          </Route>
          <Route path="/" exact>
            <Inicio />
          </Route>
        </Switch>
      </div>
    </Router>

  )
}
export default App;
