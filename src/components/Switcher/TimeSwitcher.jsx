import React from 'react';
import PropTypes from 'prop-types';
import s from './Switcher.module.css';

export default function TimeSwitcher({ groupName, isAllTime, onSwitcherChange }) {
  return (
    <ul className={s.switcher}>
      <label htmlFor="allTime">
        <input
          type="radio"
          id="allTime"
          name={groupName}
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
          name={groupName}
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
  groupName: PropTypes.string.isRequired,
  isAllTime: PropTypes.bool.isRequired,
  onSwitcherChange: PropTypes.func.isRequired,
};
