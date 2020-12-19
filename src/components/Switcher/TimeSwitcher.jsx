import React from 'react';
import PropTypes from 'prop-types';
import { SWITCHERS_PARAMS } from '../../constants';
import s from './Switcher.module.css';

export default function TimeSwitcher({ groupName, switchersState, onSwitcherChange }) {
  const { typeOfTime } = switchersState;
  const { ALL_TIME } = SWITCHERS_PARAMS.TYPE_OF_TIME;
  const { LAST_DAY } = SWITCHERS_PARAMS.TYPE_OF_TIME;

  return (
    <ul className={s.switcher}>
      <label htmlFor={ALL_TIME}>
        <input
          type="radio"
          id={ALL_TIME}
          name={groupName}
          value={ALL_TIME}
          checked={typeOfTime === ALL_TIME}
          className={s.switcher__radio}
          onChange={(e) => onSwitcherChange(e.target.value)}
        />
        All time
      </label>
      <label htmlFor={LAST_DAY}>
        <input
          type="radio"
          id={LAST_DAY}
          name={groupName}
          value={LAST_DAY}
          checked={typeOfTime === LAST_DAY}
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
  switchersState: PropTypes.shape({
    partOfPopulation: PropTypes.string,
    typeOfTime: PropTypes.string,
    stageOfDisease: PropTypes.string,
  }).isRequired,
  onSwitcherChange: PropTypes.func.isRequired,
};
