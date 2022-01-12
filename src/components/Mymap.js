import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';


function Mymap() {
    const [viewport, setViewport] = useState({
        latitude: 23.2599,
        longitude: 77.4126,
        zoom: 10
      });
    
      return (
        <ReactMapGL
          mapStyle={'mapbox://styles/dev-sahil-88/ckx4f8fwd43rp15p5p6pxndqu'}
          mapboxApiAccessToken='pk.eyJ1IjoiZGV2LXNhaGlsLTg4IiwiYSI6ImNreDRjNjRjMTI4aWoybnA4MjFuODUyMjkifQ.Z5qY3ZfuqZmlZeRWC-Zeig'
          {...viewport}
          width="100%"
          height="100%"
          onViewportChange={(viewport) => setViewport(viewport)}
        />
      );
}

export default Mymap
