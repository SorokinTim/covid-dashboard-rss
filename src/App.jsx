import React from 'react';
import Switcher from './components/Switcher/Switcher';
import switchers from './components/switchers';
import Map from './components/Map/Map';
import s from './App.module.css';

export default function App() {
  return (
    <div className={s.container}>
      <div className={s['cases-container']} />
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
      <div className={s['statistic-container']} />
      <div className={s['chart-container']} />
      <div className={s['footer-container']} />
    </div>
  );
}
