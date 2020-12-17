import React from 'react';
import PropTypes from 'prop-types';
import Time from './components/Date/Date';
import Switcher from './components/Switcher/Switcher';
import switchers from './components/switchers';
import Search from './components/Search/Search';
import List from './components/List/List';
import Map from './components/Map/Map';
import Table from './components/Table/Table';
import s from './App.module.css';

export default function AppView({
  startData,
  country,
  filter,
  onSearchChange,
  onCountryItemSelected,
}) {
  return (
    <div className={s.container}>
      <div className={s['date-container']}>
        <Time startData={startData} />
      </div>
      <div className={s['details-container']}>
        <div className={s['details-container__switchers']}>
          <Switcher switchData={switchers.casesSwitcher} name="detailsCases" />
          <Switcher switchData={switchers.timeSwitcher} name="detailsTime" />
        </div>
        <div className={s['details-container__search']}>
          <Search onSearchChange={onSearchChange} filter={filter} />
        </div>
        <div className={s['details-container__countries-list']}>
          <List
            startData={startData}
            filter={filter}
            onCountryItemSelected={onCountryItemSelected}
          />
        </div>
      </div>
      <div className={s['map-container']}>
        <div className={s['map-container__switchers']}>
          <Switcher switchData={switchers.casesSwitcher} name="mapCases" />
          <Switcher switchData={switchers.timeSwitcher} name="mapTime" />
        </div>
        <div className={s['map-container__map']}>
          <Map />
        </div>
      </div>
      <div className={s['statistic-container']}>
        <div className={s['statistic-container__switchers']}>
          <Switcher switchData={switchers.casesSwitcher} name="statisticCases" />
          <Switcher switchData={switchers.timeSwitcher} name="statisticTime" />
        </div>
        <div className={s['statistic-container__table']}>
          <Table startData={startData} country={country} />
        </div>
      </div>
      <div className={s['chart-container']} />
      <div className={s['footer-container']} />
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
};
