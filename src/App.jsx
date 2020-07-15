import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Inicio from './components/inicio';
import Nosotros from './components/nosotros';
import Contacto from './components/contacto';
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "./temaConfig"
import Navbar from './components/navbar';


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
