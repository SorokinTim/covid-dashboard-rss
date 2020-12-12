import React from 'react';
import Switcher from './components/Switcher/Switcher';
import switchers from './components/switchers';
import s from './App.module.css';

export default function App() {
  return (
    <div className={s.container}>
      <div className={s['cases-container']} />
      <div className={s['details-container']} />
      <div className={s['map-container']} />
      <div className={s['statistic-container']} />
      <div className={s['chart-container']}>
        <Switcher switchData={switchers.timeSwitcher} />
      </div>
      <div className={s['footer-container']}>
        <Switcher switchData={switchers.casesSwitcher} />
      </div>
    </div>
  );
}
