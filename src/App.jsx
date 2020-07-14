import { Router, Route } from 'react-router-dom';
import React from 'react';

import Inicio from './Components/inicio';
import Nosotros from './Components/nosotros';
import Contacto from './Components/contacto';

import { ThemeProvider } from "@material-ui/core/styles"
import theme from "./temaConfig"

import Navbar from "./components/Navbar"
import { Typography, Switch } from '@material-ui/core';


function App() {
  return (

    

    <ThemeProvider theme={theme}>
      <Navbar></Navbar>
      <Router>
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
    </Router>
    </ThemeProvider>


  )
}
export default App;
