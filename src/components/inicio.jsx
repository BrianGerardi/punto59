import React from 'react';

import Banner from './banner/banner';
import MapaWrapper from './mapData';
import TextoInicio from './text_inicio';
import ServiciosGrid from './bannerServicios/serviciosGrid';


const Inicio = () => {
    return (
        <div>
            <Banner></Banner>
            <TextoInicio></TextoInicio>
            <ServiciosGrid></ServiciosGrid>
            <MapaWrapper></MapaWrapper>
        </div>
    );
};

export default Inicio;