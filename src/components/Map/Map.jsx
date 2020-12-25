import React from 'react';
import PropTypes from 'prop-types';
import mapboxgl from '../../api/api-mapbox';
import style from './Map.module.css';
import getRequiredParam from '../../utils/getRequiredParam';
import getMarkSize from '../../utils/getMarkSize';

function findCountryCoords(startData, country) {
  if (!country) return undefined;

  const currentCountry = startData.find((el) => el.country === country);
  const { long, lat } = currentCountry.countryInfo;
  return [long, lat];
}

function getMarkerLabelHTML(props) {
  return (`
    <h3>${props.title}</h3>
    <br>
    <p>Value: ${props.cases}</p>
  `);
}

function getMarkerLabel(props) {
  const popup = new mapboxgl.Popup({ offset: 25, className: style.map__popup, closeButton: false })
    .setHTML(getMarkerLabelHTML(props));

  return popup;
}

function getMapMarker(props) {
  const el = document.createElement('div');
  el.className = style.map__marker;

  el.style.width = `${props.size}px`;
  el.style.height = `${props.size}px`;

  el.onmouseenter = () => el.click();
  el.onmouseleave = () => el.click();

  new mapboxgl.Marker(el).setLngLat(props.coords)
    .setPopup(getMarkerLabel(props))
    .addTo(props.map);
}

export default class Map extends React.Component {
  constructor() {
    super();
    this.mapRef = React.createRef();
  }

  componentDidMount() {
    this.initializeMap();
  }

  componentDidUpdate() {
    const { startData, country } = this.props;
    const coords = findCountryCoords(startData, country);
    this.initializeMap(coords);
  }

  initializeMap(coords = undefined) {
    this.map = new mapboxgl.Map({
      container: this.mapRef,
      style: 'mapbox://styles/mapbox/dark-v9',
      center: coords !== undefined ? coords : [29.632, 54.257],
      zoom: 3.5,
    });

    this.map.on('mouseup', () => {
      setTimeout(() => this.map.resize(), 0);
    });

    const { startData, switchersState } = this.props;

    startData.forEach((el) => {
      const value = getRequiredParam(el, switchersState);

      getMapMarker({
        map: this.map,
        coords: [el.countryInfo.long, el.countryInfo.lat],
        title: el.country,
        cases: value,
        size: getMarkSize(value, switchersState),
      });
    });

    return this.map;
  }

  render() {
    return (
      <div className={style.container}>
        <div ref={(el) => { this.mapRef = el; }} className={style.map} />
      </div>
    );
  }
}

Map.defaultProps = {
  country: null,
};

Map.propTypes = {
  startData: PropTypes.arrayOf(
    PropTypes.shape({
      updated: PropTypes.number,
      country: PropTypes.string,
      cases: PropTypes.number,
      deaths: PropTypes.number,
      recovered: PropTypes.number,
      countryInfo: PropTypes.shape({
        flag: PropTypes.string,
      }),
    }),
  ).isRequired,
  country: PropTypes.string,
  switchersState: PropTypes.shape({
    partOfPopulation: PropTypes.string,
    typeOfTime: PropTypes.string,
    stageOfDisease: PropTypes.string,
  }).isRequired,
};
