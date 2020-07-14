import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Inicio from './Components/inicio';
import Nosotros from './Components/nosotros';
import Contacto from './Components/contacto';
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "./temaConfig"
import { Typography, Switch } from '@material-ui/core';
import Navbar from './Components/navbar';


function App() {
  return (

    

    <ThemeProvider theme={theme}>
      <Navbar></Navbar>
      <Router>
          <Route path="/nosotros">
            <Nosotros />
          </Route>
          <Route path="/contacto">
            <Contacto />
          </Route>
          <Route path="/" exact>
            <Inicio />
          </Route>
    </Router>
    </ThemeProvider>


  )
}
export default App;
