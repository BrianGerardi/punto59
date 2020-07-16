import React, { Component } from 'react';

import entorno from './entorno';
import Mapa from './map';

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${entorno.mapsKey}`;
const ALTURA_MAPA = '400px';

class MapaWrapper extends Component {
    render() {
        return (
            <div>
                <Mapa
                    isMarkerShown
                    googleMapURL={mapURL}
                    containerElement= {<div style={{ height: ALTURA_MAPA }}></div>}
                    mapElement={<div style={{ height: '100%' }}></div>}
                    loadingElement={<p>Cargando</p>}
                /> 
            </div>
        );
    }
}

export default MapaWrapper;