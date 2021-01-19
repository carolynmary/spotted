import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from './dove-solid.png';
import './MapCom.scss'

let DefaultIcon = L.icon({
    iconUrl: icon,
    iconSize: 20
});

L.Marker.prototype.options.icon = DefaultIcon;

class MapCom extends Component {

    state = {
        position: [
            { id: 1, location: [40.79, -73.96] },
            { id: 2, location: [40.78, -73.99] },
            { id: 3, location: [40.77, -73.94] },
            { id: 4, location: [40.76, -73.93] },
            { id: 5, location: [40.75, -73.95] },
            { id: 6, location: [40.74, -73.92] },
            { id: 7, location: [40.72, -73.97] },
            { id: 8, location: [40.73, -74.00] },
            { id: 9, location: [40.70, -74.01] },
            { id: 10, location: [40.765383, -73.972909] },
        ]
    };

    render () {

        // const location = [this.state.position.map()]

        const center = [40.757874, -73.977663];

        return (
        <>
        <div id="mapComponent">
            <MapContainer className="map" center={ center } zoom={ 12 } style={{ height:800, width:800 }}>

                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    { this.state.position.map((loc) => (
                        <Marker position={ loc.location }>
                            <Popup>
                                Hello <br /> World~~
                            </Popup>
                        </Marker>
                    )) }
            </MapContainer>
        </div>
        </>

        )
    }
}

export default MapCom;

