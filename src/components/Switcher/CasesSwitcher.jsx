import React from 'react';
import PropTypes from 'prop-types';
import { SWITCHERS_PARAMS } from '../../constants';
import style from './Switcher.module.css';

export default function CasesSwitcher({ groupName, switchersState, onSwitcherChange }) {
  const { partOfPopulation } = switchersState;
  const { ABSOLUTE_CASES } = SWITCHERS_PARAMS.PART_OF_POPULATION;
  const { CASES_PER_HUNDRED } = SWITCHERS_PARAMS.PART_OF_POPULATION;

  return (
    <div className={style.switcher}>
      <input
        type="radio"
        id={ABSOLUTE_CASES}
        name={groupName}
        value={ABSOLUTE_CASES}
        checked={partOfPopulation === ABSOLUTE_CASES}
        className={style['choice-1']}
        onChange={(e) => onSwitcherChange(e.target.value)}
      />
      <label htmlFor={ABSOLUTE_CASES} className={style.switcher__item} to="1">Absolute cases</label>

      <input
        type="radio"
        id={CASES_PER_HUNDRED}
        name={groupName}
        value={CASES_PER_HUNDRED}
        checked={partOfPopulation === CASES_PER_HUNDRED}
        className={style['choice-2']}
        onChange={(e) => onSwitcherChange(e.target.value)}
      />
      <label htmlFor={CASES_PER_HUNDRED} className={style.switcher__item} to="2">Per 100K</label>
    </div>
  );
}

CasesSwitcher.propTypes = {
  groupName: PropTypes.string.isRequired,
  switchersState: PropTypes.shape({
    partOfPopulation: PropTypes.string,
    typeOfTime: PropTypes.string,
    stageOfDisease: PropTypes.string,
  }).isRequired,
  onSwitcherChange: PropTypes.func.isRequired,
};
