import React from 'react';
import banner59 from '../assets/customPng/banner59.png';
import Banner from './banner/banner';
import MapaWrapper from './mapData';
import TextoInicio from './text_inicio';
import ServiciosGrid from './bannerServicios/serviciosGrid';


const Inicio = () => {
    return (
        <div >
            <Banner></Banner>
            <TextoInicio></TextoInicio>
            <ServiciosGrid></ServiciosGrid>
            <MapaWrapper></MapaWrapper>
            <div style={{display:'flex'}}><img style={{position:'absolute', left:'calc((100% - 1920px)/2)'}} src={banner59} height='375' alt=''></img></div>
        </div>
    );
};

export default Inicio;