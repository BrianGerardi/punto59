import React from 'react';
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker
    
} from 'react-google-maps';

const Map = (props) => {
    return (
        <GoogleMap
            defaultZoom={17}
            defaultCenter={{ lat: -38.548283, lng: -58.747728 }}
        >
            {props.isMarkerShown && <Marker position={{lat: -38.548283, lng: -58.747728}}/>}

        </GoogleMap>


    );
};

export default withScriptjs(
    withGoogleMap(
        Map
    )
)