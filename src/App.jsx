import React from 'react';
import Button from "@material-ui/core/Button"

import { ThemeProvider } from "@material-ui/core/styles"
import theme from "./temaConfig"

import Navbar from "./components/Navbar"
import { Typography } from '@material-ui/core';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar></Navbar>
      <Typography variant="h1">texto de prueba</Typography>
    </ThemeProvider>

  )
}
export default App;
