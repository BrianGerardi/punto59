import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Inicio from './components/inicio';
import Nosotros from './components/nosotros';
import Contacto from './components/contacto';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './temaConfig';
import Navbar from './components/navbar';
import { Provider } from 'react-redux';
import { eventosReducer } from './components/calendario/reducers/eventos'
import { createStore, combineReducers} from 'redux' 

const reducer = combineReducers ({
    eventosReducer
})

const store = createStore (reducer) 

function App() {
    return (
        <Provider store={store}> 
        <ThemeProvider theme={theme}>
            <Navbar></Navbar>
            <Router>
                <Route path="/punto59/nosotros">
                    <Nosotros />
                </Route>
                <Route path="/punto59/contacto">
                    <Contacto />
                </Route>
                <Route path="/punto59" exact>
                    <Inicio />
                </Route>
            </Router>
        </ThemeProvider>
        </Provider>
    );
}
export default App;
