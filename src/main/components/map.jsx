import React, { Component } from 'react';
import MapGL, {Marker} from 'react-map-gl';
import { MAP_CONFIG } from '../../util/config';
import fetchLocation from '../../util/api';
import issIcoon from '../resources/space-station.png'

class Map extends Component{
    state = {
        // TODO: Make viewport more robust.
        viewport: { zoom:2 },
        slat:null,
        slng:null
      };

    setLocation(){
      fetchLocation()
          .then(res => this.setState({
            slat: parseInt(res.iss_position.latitude),
            slng: parseInt(res.iss_position.longitude)
        }))
    }

    componentDidMount(){
      this.setLocation()
      setInterval(() => {
        this.setLocation()
      }, 6000)
    }

    render(){

      let marker = this.state.slat && this.state.slng ?
        <Marker
          latitude={this.state.slat} 
          longitude={this.state.slng}>
            <img alt="station-ico" src={issIcoon}></img>
        </Marker> : null

      return <MapGL
          {...MAP_CONFIG}
          {...this.state.viewport}
          width='100%'
          height='100vh'
          onViewportChange={(viewport) => this.setState({viewport})}>
            {marker}
        </MapGL>
    }
}

export default Map;