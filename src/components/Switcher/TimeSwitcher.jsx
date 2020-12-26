import React from 'react';
import PropTypes from 'prop-types';
import { SWITCHERS_PARAMS } from '../../constants';
import style from './Switcher.module.css';

export default function TimeSwitcher({ groupName, switchersState, onSwitcherChange }) {
  const { typeOfTime } = switchersState;
  const { ALL_TIME } = SWITCHERS_PARAMS.TYPE_OF_TIME;
  const { LAST_DAY } = SWITCHERS_PARAMS.TYPE_OF_TIME;

  return (
    <div className={style.switcher}>
      <input
        type="radio"
        id={ALL_TIME}
        name={groupName}
        value={ALL_TIME}
        checked={typeOfTime === ALL_TIME}
        className={style['choice-1']}
        onChange={(e) => onSwitcherChange(e.target.value)}
      />
      <label htmlFor={ALL_TIME} className={style.switcher__item} to="1">All time</label>

      <input
        type="radio"
        id={LAST_DAY}
        name={groupName}
        value={LAST_DAY}
        checked={typeOfTime === LAST_DAY}
        className={style['choice-2']}
        onChange={(e) => onSwitcherChange(e.target.value)}
      />
      <label htmlFor={LAST_DAY} className={style.switcher__item} to="2">Last Day</label>
    </div>
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
