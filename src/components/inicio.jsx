import React from 'react';
import Banner from './banner';
import TextoInicio from './text_inicio';
import Mapa from './map';


const Inicio = () => {
    return (
        <div>
            <Banner></Banner>
            <TextoInicio></TextoInicio>
            <Mapa></Mapa>
        </div>

    );
};

export default Inicio;