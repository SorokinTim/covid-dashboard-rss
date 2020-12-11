import React from 'react';
import s from './App.module.css';

export default function App() {
  return (
    <div className={s.container}>
      <div className={s['global-cases']} />
      <div className={s['detailed-cases']} />
      <div className={s.map} />
      <div className={s.stats} />
      <div className={s.chart} />
      <div className={s.footer} />
    </div>
  );
}
