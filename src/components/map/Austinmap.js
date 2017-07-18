import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Map, TileLayer, Marker, Circle, CircleMarker, Popup, PropTypes as MapPropTypes} from 'react-leaflet';
// import L from 'leaflet';
import './Map.css';
// import MarkerLayer from 'react-leaflet-marker-layer';


const MyPopupMarker = ({ children, position }) => (
  <Marker position={position} >
    <Popup>
      <span>{children}</span>
    </Popup>
  </Marker>
)
MyPopupMarker.propTypes = {
  children: MapPropTypes.children,
  position: MapPropTypes.latlng,
}

const MyMarkersList = ({ markers }) => {
  const items = markers.map(({ key, ...props }) => (
    <MyPopupMarker key={key} {...props} />
  ))
  return <div style={{ display: 'none' }}>{items}</div>
}

MyMarkersList.propTypes = {
  markers: PropTypes.array.isRequired,
}

//////////////////////////////////////////////////////////////////////////////
class Austinmap extends React.Component {
  constructor() {
    super();

    this.state = {markers:[ { key: 'marker1', position: [30.267122, -97.7430600], children: 'Austin!' }]}
  }


  render() {

    let points = this.props.mapData
    points = JSON.parse(points)


    var myArray = [1,2,3,4];


  if (points.key) {
  this.state.markers = points.key.map(function(eobj){
   return {key:`marker${eobj.sample_ref_no}`, position: [parseFloat(eobj.lat_dd_wgs84) , parseFloat(eobj.lon_dd_wgs84)], children:`e. coli level is: ${eobj.result}cfu per 100ml -- anything over 100 cfu/100ml is not considered safe!` }
    })
    console.log(this.state.markers);
    // console.log(this.state.markers.key)
  }


    const home = [30.2671500, -97.7430600]
    const zoom = 12


    return (

      <Map className="damnMap" zoomControl={true} dragging = {false} scrollWheelZoom= {false} center={home} zoom={zoom} >
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
         <MyMarkersList markers={this.state.markers}/>
         {/* <CircleMarker center={home} color="red" radius={11}>
          <Popup>
            <span>Popup in CircleMarker</span>
          </Popup>
        </CircleMarker> */}

      </Map>
    )
  }
}

export default Austinmap;

// pointToLayer(feature, latlng) {
//     // renders our GeoJSON points as circle markers, rather than Leaflet's default image markers
//     // parameters to style the GeoJSON markers
//     var markerParams = {
//       radius: 4,
//       fillColor: 'orange',
//       color: '#fff',
//       weight: 1,
//       opacity: 0.5,
//       fillOpacity: 0.8
//     };
//
//     return L.circleMarker(latlng, markerParams);
//   }
//


{/* <Marker position={home}>
  <Popup>
    <span>A pretty CSS3 popup. <br /> Easily customizable.</span>
  </Popup>
</Marker> */}
