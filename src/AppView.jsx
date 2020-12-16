import React from 'react';
import PropTypes from 'prop-types';
import Date from './components/Date/Date';
import Switcher from './components/Switcher/Switcher';
import switchers from './components/switchers';
import Search from './components/Search/Search';
import List from './components/List/List';
import Map from './components/Map/Map';
import Table from './components/Table/Table';
import s from './App.module.css';

export default function AppView({
  data,
  info,
  countryCode,
  filter,
  onSearchChange,
  onItemSelected,
}) {
  const dateData = data.Date;

  return (
    <div className={s.container}>
      <div className={s['date-container']}>
        <Date dateData={dateData} />
      </div>
      <div className={s['details-container']}>
        <div className={s['details-container__switchers']}>
          <Switcher switchData={switchers.casesSwitcher} />
          <Switcher switchData={switchers.timeSwitcher} />
        </div>
        <div className={s['details-container__search']}>
          <Search onSearchChange={onSearchChange} filter={filter} />
        </div>
        <div className={s['details-container__countries-list']}>
          <List data={data} info={info} filter={filter} onItemSelected={onItemSelected} />
        </div>
      </div>
      <div className={s['map-container']}>
        <div className={s['map-container__switchers']}>
          <Switcher switchData={switchers.casesSwitcher} />
          <Switcher switchData={switchers.timeSwitcher} />
        </div>
        <div className={s['map-container__map']}>
          <Map />
        </div>
      </div>
      <div className={s['statistic-container']}>
        <div className={s['statistic-container__switchers']}>
          <Switcher switchData={switchers.casesSwitcher} />
          <Switcher switchData={switchers.timeSwitcher} />
        </div>
        <div className={s['statistic-container__table']}>
          <Table data={data} countryCode={countryCode} />
        </div>
      </div>
      <div className={s['chart-container']} />
      <div className={s['footer-container']} />
    </div>
  );
}

AppView.defaultProps = {
  countryCode: null,
};

AppView.propTypes = {
  data: PropTypes.shape({
    confirmed: PropTypes.number,
    deaths: PropTypes.number,
    recovered: PropTypes.number,
    message: PropTypes.string,
    Date: PropTypes.string,
  }).isRequired,
  info: PropTypes.shape({
    confirmed: PropTypes.number,
    deaths: PropTypes.number,
    recovered: PropTypes.number,
    message: PropTypes.string,
  }).isRequired,
  countryCode: PropTypes.string,
  onItemSelected: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
