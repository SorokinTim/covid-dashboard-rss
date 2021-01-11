import React from 'react';
import PropTypes from 'prop-types';
import Cases from './components/Cases/Cases';
import List from './components/List/List';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import CountryTab from './components/CountryTab/CountryTab';
import StageSwitcher from './components/Switcher/StageSwitcher';
import MapLegend from './components/MapLegend/MapLegend';
import Map from './components/Map/Map';
import Table from './components/Table/Table';
import ChartComponent from './components/ChartComponent/ChartComponent';
import style from './App.module.css';

import changeScreenState from './utils/changeScreenState';
import CountryTop from './components/CountryTop/CountryTop';
import getMostCasesCountry from './utils/getMostCasesCountry';
import getMostCasesPer100kCountry from './utils/getMostCasesPer100kCountry';

export default function AppView({
  startData,
  country,
  filter,
  switchersState,
  onSearchChange,
  onCountryItemSelected,
  onSwitcherChange,
  onCountryTabCancel,
}) {
  const map = React.createRef();

  let mapRef = React.createRef();
  let listRef = React.createRef();
  let casesRef = React.createRef();
  let boardRef = React.createRef();
  let chartRef = React.createRef();

  return (
    <div className={style['grid-container']}>
      <div className={style.header}>
        <Header />
      </div>
      <div className={style.country}>
        {country
          ? (
            <CountryTab
              countryName={country}
              startData={startData}
              onCountryTabCancel={onCountryTabCancel}
            />
          )
          : null}
      </div>
      <div className={`${style.map}`} ref={(el) => { mapRef = el; }}>
        <span
          className={`${style.map__fullscreen} material-icons notranslate`}
          onClick={(e) => {
            changeScreenState({
              e,
              map,
              el: mapRef,
            });
          }}
        >
          fullscreen
        </span>
        <Map
          startData={startData}
          switchersState={switchersState}
          onSwitcherChange={onSwitcherChange}
          country={country}
          map={map}
        />
        <div className={style['map__bottom-switcher']}>
          <StageSwitcher
            groupName="mapStage"
            switchersState={switchersState}
            onSwitcherChange={onSwitcherChange}
          />
        </div>
        <div className={style.map__label}>
          <MapLegend switchersState={switchersState} />
        </div>
        <div className={style.map__top}>
          <CountryTop startData={startData} getCountryData={getMostCasesCountry} />
          <CountryTop startData={startData} getCountryData={getMostCasesPer100kCountry} />
        </div>
      </div>
      <div className={style.details}>
        <div className={style.cases} ref={(el) => { casesRef = el; }}>
          {/* eslint-disable-next-line max-len */}
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <span
            className={`${style.map__fullscreen} material-icons notranslate`}
            onClick={(e) => {
              changeScreenState({
                e,
                el: casesRef,
              });
            }}
          >
            fullscreen
          </span>
          <Cases startData={startData} />
        </div>
        <div className={style.list} ref={(el) => { listRef = el; }}>
          {/* eslint-disable-next-line max-len */}
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <span
            className={`${style.map__fullscreen} material-icons`}
            onClick={(e) => {
              changeScreenState({
                e,
                el: listRef,
              });
            }}
          >
            fullscreen
          </span>
          <List
            startData={startData}
            filter={filter}
            onCountryItemSelected={onCountryItemSelected}
            onSearchChange={onSearchChange}
            switchersState={switchersState}
            onSwitcherChange={onSwitcherChange}
          />
        </div>
      </div>
      <div className={style.data}>
        <div className={style.broad} ref={(el) => { boardRef = el; }}>
          {/* eslint-disable-next-line max-len */}
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <span
            className={`${style.map__fullscreen} material-icons`}
            onClick={(e) => {
              changeScreenState({
                e,
                el: boardRef,
              });
            }}
          >
            fullscreen
          </span>
          <Table
            startData={startData}
            country={country}
            switchersState={switchersState}
            onSwitcherChange={onSwitcherChange}
          />
        </div>
        <div className={style.chart} ref={(el) => { chartRef = el; }}>
          {/* eslint-disable-next-line max-len */}
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <span
            className={`${style.map__fullscreen} material-icons`}
            onClick={(e) => {
              changeScreenState({
                e,
                el: chartRef,
              });
            }}
          >
            fullscreen
          </span>
          <ChartComponent
            startData={startData}
            country={country}
            switchersState={switchersState}
            onSwitcherChange={onSwitcherChange}
          />
        </div>
      </div>
      <div className={style.footer}>
        <Footer />
      </div>
    </div>
  );
}

AppView.defaultProps = {
  country: null,
};

AppView.propTypes = {
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
  onCountryItemSelected: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  switchersState: PropTypes.shape({
    partOfPopulation: PropTypes.string,
    typeOfTime: PropTypes.string,
    stageOfDisease: PropTypes.string,
  }).isRequired,
  onSwitcherChange: PropTypes.func.isRequired,
  onCountryTabCancel: PropTypes.func.isRequired,
};
