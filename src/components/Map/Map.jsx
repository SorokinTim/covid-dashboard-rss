import React from 'react';
import mapboxgl from '../../api/api-mapbox';
import s from './Map.module.css';

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
      style: 'mapbox://styles/timsorokin/ckimzd75j0ebt17s1ru57hvr1',
      center: [29.632, 54.257],
      zoom: 4,
    });
  }

  render() {
    return <div ref={(el) => { this.mapRef = el; }} className={s.map} />;
  }
}
