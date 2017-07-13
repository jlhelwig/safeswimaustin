import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import './Map.css';


class Austinmap extends React.Component {
  constructor() {
    super();

  }


    


  render() {
    const position = [30.2671500, -97.7430600]
    const zoom = 13
    return (
      <Map center={position} zoom={zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <span>A pretty CSS3 popup. <br /> Easily customizable.</span>
          </Popup>
        </Marker>
      </Map>
    )
  }
}

export default Austinmap;
