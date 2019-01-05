import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class ResMap extends Component {
  // static defaultProps = {
  //   center: {
  //     lng: 129.14,
  //     lat: 35.15
  //   },
  //   zoom: 11
  // };
  // 129.1485450604 35.1581353515
 
  render() {
    let center = {
      lng: 129.14,
      lat: 35.15
    }
    let zoom = 13
    return (
      <div className="res_map">
      {console.log(this.props.mapx, this.props.mapy)}
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAyHDaRKzUIbOZn93HONKTKi_ES6ZSrMBc' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default ResMap;
