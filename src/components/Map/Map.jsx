import React from 'react';
import mapboxgl from '../../api/api-mapbox';
import style from './Map.module.css';

export default class Map extends React.Component {
  constructor() {
    super();
    this.mapRef = React.createRef();
  }

  componentDidMount() {
    this.initializeMap();
  }

  initializeMap() {
    return new mapboxgl.Map({
      container: this.mapRef,
      style: 'mapbox://styles/mapbox/dark-v9',
      center: [29.632, 54.257],
      zoom: 3.5,
    });
  }

  render() {
    return (
      <div className={style.container}>
        <div ref={(el) => { this.mapRef = el; }} className={style.map} />
      </div>
    );
  }
}
