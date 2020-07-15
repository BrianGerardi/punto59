import React, { Component } from 'react'
import Map from './map'
import entorno from './entorno'

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${entorno.mapsKey}`

class Mapa extends Component {
    constructor() {
        super()
        this.state = {
            name: 'react'
        }
    }

    render() {
        return (
            <div>
                <Map
                    isMarkerShown
                    googleMapURL={mapURL}
                    containerElement= {<div style={{ height: '400px' }}></div>}
                    mapElement={<div style={{ height: '100%' }}></div>}
                    loadingElement={<p>Cargando</p>}
                />
            </div>
        )
    }
};

export default Mapa