import React from 'react';
import mapboxgl from '../../api/api-mapbox';
import style from './Map.module.css';
import getRequiredParam from '../../utils/getRequiredParam';

function findCountryCoords(startData, country) {
  if (!country) return undefined;

  const currentCountry = startData.find((el) => el.country === country);
  const { long, lat } = currentCountry.countryInfo;
  return [long, lat];
}

export default class Map extends React.Component {
  constructor() {
    super();
    this.mapRef = React.createRef();
  }

  componentDidUpdate() {
    const coord = findCountryCoords(this.props.startData, this.props.country);
    this.initializeMap(coord);
  }

  componentDidMount() {
    this.initializeMap();
  }

  initializeMap(coord = undefined) {
    this.map = new mapboxgl.Map({
      container: this.mapRef,
      style: 'mapbox://styles/mapbox/dark-v9',
      center: coord !== undefined ? coord : [29.632, 54.257],
      zoom: 3.5,
    });
    // const globalCases = fn();
    this.props.startData.forEach((el) => {
      this.getMapMarker({
        map: this.map,
        coord: [el.countryInfo.long, el.countryInfo.lat],
        title: el.country,
        cases: getRequiredParam(el, this.props.switchersState),
      //  size: country.cases / globalCases * 100
      });
    });

    return this.map;
  }

  getMapMarker(props) {
    const el = document.createElement('div');
    el.className = style.map__marker;

    // TODO: change size
    // const size = TODO: your variable value;
    // el.style.width = `${size}px`;
    // el.style.height = `${size}px`;

    new mapboxgl.Marker(el).setLngLat(props.coord).setPopup(this.getMarkerLabel(props)).addTo(props.map);
  }

  getMarkerLabel(props) {
    const popup = new mapboxgl.Popup({ offset: 25, className: style.map__popup })
      .setHTML(this.getMarkerLabelHTML(props));

    return popup;
  }

  getMarkerLabelHTML(props) {
    return (`
      <h3>${props.title}</h3>
      <br>
      <p>Cases: ${props.cases}</p>
    `);
  }

  render() {
    return (
      <div className={style.container}>
        <div ref={(el) => { this.mapRef = el; }} className={style.map} />
      </div>
    );
  }
}
