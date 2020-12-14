import React from 'react';
import Date from './components/Date/Date';
import Switcher from './components/Switcher/Switcher';
import switchers from './components/switchers';
import Map from './components/Map/Map';
import Table from './components/Table/Table';
import s from './App.module.css';

export default function App() {
  return (
    <div className={s.container}>
      <div className={s['date-container']}>
        <Date />
      </div>
      <div className={s['details-container']} />
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
          <Table />
        </div>
      </div>
      <div className={s['chart-container']} />
      <div className={s['footer-container']} />
    </div>
  );
}
