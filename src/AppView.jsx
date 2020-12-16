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

export default function AppView({ data, countryCode }) {
  console.log('AppView data,countryCode :', data, countryCode);

  return (
    <div className={s.container}>
      <div className={s['date-container']}>
        <Date />
      </div>
      <div className={s['details-container']}>
        <div className={s['details-container__switchers']}>
          <Switcher switchData={switchers.casesSwitcher} />
          <Switcher switchData={switchers.timeSwitcher} />
        </div>
        <div className={s['details-container__search']}>
          <Search />
        </div>
        <div className={s['details-container__countries-list']}>
          <List />
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
  }).isRequired,
  countryCode: PropTypes.string,
};
