import React from 'react';

import Banner from './banner';
import MapaWrapper from './mapData';
import TextoInicio from './text_inicio';
import ServiciosGrid from './ServiciosGrid'


const Inicio = () => {
    return (
        <div>
            <Banner></Banner>
            <TextoInicio></TextoInicio>
            <MapaWrapper></MapaWrapper>
            <ServiciosGrid></ServiciosGrid>
        </div>
    );
};

export default Inicio;