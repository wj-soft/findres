import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
  
class ResMap extends Component {
  render() {
    
    // let mx = financial(this.props.mapx);
    // let my = financial(this.props.mapy);
    // function financial(target) {
    //   return Number.parseFloat(target).toFixed(2);
    // }
    let center = {
      lng: this.props.mapx,// lng: 129.15,
      lat: this.props.mapy// lat: 35.16
    }
    
    let zoom = 13
    return (
      <div className="res_map">
      {
        // console.log(mx,my)
      }
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAyHDaRKzUIbOZn93HONKTKi_ES6ZSrMBc' }}
          center={center}
          defaultZoom={zoom}
        >
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default ResMap;
