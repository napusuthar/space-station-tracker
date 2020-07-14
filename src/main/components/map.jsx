import React, { Component } from 'react';
import MapGL from 'react-map-gl';
import { MAP_CONFIG } from '../../util/config';

class Map extends Component{
    state = {
        viewport: {
          latitude: 19,
          longitude: 72,
          zoom: 8
        }
      };

    render(){
        return <MapGL
            {...MAP_CONFIG}
            {...this.state.viewport}
            width='100%'
            height='100vh'
            onViewportChange={(viewport) => this.setState({viewport})}
        />
    }
}

export default Map;