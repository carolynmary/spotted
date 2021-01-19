import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from './dove-solid.png';
import birdDb from './db';
import './MapCom.scss';
import './mapAnchor'

let DefaultIcon = L.icon({
    iconUrl: icon,
    iconSize: 20
});

L.Marker.prototype.options.icon = DefaultIcon;

class MapCom extends Component {

    handleClick = (e) => {
        alert("Clicked")
    }

    render () {

        const center = [40.732213, -73.813499];

        return (
        <>
        <div id="mapComponent">
            <MapContainer className="map" center={ center } zoom={ 10 } style={{ height:800, width:800 }}>

                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    { birdDb.map((dat) => (
                        <Marker position={[ dat.lat, dat.lng ]}>
                            <Popup>
                                {dat.comName} <br /> {dat.locName} <br /> {dat.obsDt} <br /> 
                                <button onClick={this.handleClick} style={{ backgroundColor:"lightgreen" }}>More Info</button>
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

