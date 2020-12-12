import React from 'react';
import s from './Date.module.css';

export default function Date() {
  return (
    <div className={s.date}>
      <p className={s.date__text}>Last Update at</p>
      <time className={s.date__value} dateTime="2020-12-11">12/11/2020</time>
    </div>
  );
}
