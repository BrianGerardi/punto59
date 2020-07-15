import React from 'react';
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker
    
} from 'react-google-maps';
const LAT_LNG = {lat: -38.548283, lng: -58.747728}

const Map = (props) => {
    return (
        <GoogleMap
            defaultZoom={17}
            defaultCenter={LAT_LNG}
        >
            {props.isMarkerShown && <Marker position={LAT_LNG}/>}
        </GoogleMap>
    );
};

export default withScriptjs(withGoogleMap(Map))