import React, { Component } from 'react'
import Map from './map'
import pepino from './entorno'

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${pepino.mapsKey}`
const ALTURA_MAPA = "400px"

class Mapa extends Component {
    render() {
        return (
            <div>
                <Map
                    isMarkerShown
                    googleMapURL={mapURL}
                    containerElement= {<div style={{ height: ALTURA_MAPA }}></div>}
                    mapElement={<div style={{ height: '100%' }}></div>}
                    loadingElement={<p>Cargando</p>}
                /> 
            </div>
        )
    }
};

export default Mapa