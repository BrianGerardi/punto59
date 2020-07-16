import React from 'react';

import Banner from './banner';
import MapaWrapper from './mapData';
import TextoInicio from './text_inicio';


const Inicio = () => {
    return (
        <div>
            <Banner></Banner>
            <TextoInicio></TextoInicio>
            <MapaWrapper></MapaWrapper>
        </div>

    );
};

export default Inicio;