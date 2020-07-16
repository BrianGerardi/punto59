import React from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';

const LAT_LNG = {lat: -38.548283, lng: -58.747728};

const Mapa = (props) => {
    return (
        <GoogleMap
            defaultZoom={17}
            defaultCenter={LAT_LNG}
        >
            {props.isMarkerShown && <Marker position={LAT_LNG}/>}
        </GoogleMap>
    );
};

export default withScriptjs(withGoogleMap(Mapa));