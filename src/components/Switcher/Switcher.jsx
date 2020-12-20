import React from 'react';
import style from './Switcher.module.css';
import { SWITCHERS_PARAMS } from '../../constants';

export default function Switcher() {
  const { ALL_TIME } = SWITCHERS_PARAMS.TYPE_OF_TIME;
  const { LAST_DAY } = SWITCHERS_PARAMS.TYPE_OF_TIME;

  return (
    <div className={style.switcher}>
      <input
        type="radio"
        name="choice"
        value={ALL_TIME}
        id={ALL_TIME}
        className={style['choice-1']}
        defaultChecked
      />
      <label htmlFor={ALL_TIME} className={style.switcher__item} to="1">
        All Time
      </label>

      <input
        type="radio"
        name="choice"
        value={LAST_DAY}
        id={LAST_DAY}
        className={style['choice-2']}
      />
      <label htmlFor={LAST_DAY} className={style.switcher__item} to="2">
        Last Day
      </label>
    </div>
  );
}
