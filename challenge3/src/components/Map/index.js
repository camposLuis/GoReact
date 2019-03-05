import React, { Component } from 'react';
import MapGL, { Marker } from 'react-map-gl';

import './styles.css';

export default class Map extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -18.574775,
      longitude: -46.516793,
      zoom: 14,
    },
  };

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize = () => {
    const { viewport } = this.state;
    this.setState({
      viewport: {
        ...viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  handleMapClick = async (e) => {
    const [latitude, longitude] = e.lngLat;

    alert(`Latitude: ${latitude} \nLongitude: ${longitude}`);
  };

  render() {
    const { viewport: viewportState } = this.state;

    return (
      <MapGL
        {...viewportState}
        onClick={this.handleMapClick}
        mapStyle="mapbox://styles/mapbox/basic-v9"
        mapboxApiAccessToken="pk.eyJ1IjoibHVpc2NhbXBvc2hlbnJpcXVlIiwiYSI6ImNqc3YyamFjajAybWYzeXBycHRsMTZvYmkifQ.FNV5KwGF-Y0rB-LNbBQoIw"
        onViewportChange={viewport => this.setState({ viewport })}
      >
        <Marker
          latitude={-18.574775}
          longitude={-46.516793}
          onClick={this.handleMapClick}
          captureClick
        >
          <img className="avatar" src="https://avatars3.githubusercontent.com/u/5728954?v=4" />
        </Marker>
      </MapGL>
    );
  }
}
