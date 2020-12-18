import React from 'react';
import PropTypes from 'prop-types';
import s from './Switcher.module.css';

export default function TimeSwitcher({ name, isAllTime, onSwitcherChange }) {
  return (
    <ul className={s.switcher}>
      <label htmlFor="allTime">
        <input
          type="radio"
          id="allTime"
          name={name}
          value="allTime"
          checked={isAllTime}
          className={s.switcher__radio}
          onChange={(e) => onSwitcherChange(e.target.value)}
        />
        All time
      </label>
      <label htmlFor="lastDay">
        <input
          type="radio"
          id="lastDay"
          name={name}
          value="lastDay"
          checked={!isAllTime}
          className={s.switcher__radio}
          onChange={(e) => onSwitcherChange(e.target.value)}
        />
        Last Day
      </label>
    </ul>
  );
}

TimeSwitcher.propTypes = {
  name: PropTypes.string.isRequired,
  isAllTime: PropTypes.bool.isRequired,
  onSwitcherChange: PropTypes.func.isRequired,
};
