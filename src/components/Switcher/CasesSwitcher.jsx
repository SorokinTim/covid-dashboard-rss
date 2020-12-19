import React from 'react';
import PropTypes from 'prop-types';
import { SWITCHERS_PARAMS } from '../../constants';
import s from './Switcher.module.css';

export default function CasesSwitcher({ groupName, switchersState, onSwitcherChange }) {
  const { partOfPopulation } = switchersState;
  const { ABSOLUTE_CASES } = SWITCHERS_PARAMS.PART_OF_POPULATION;
  const { CASES_PER_HUNDRED } = SWITCHERS_PARAMS.PART_OF_POPULATION;

  return (
    <ul className={s.switcher}>
      <label htmlFor={ABSOLUTE_CASES}>
        <input
          type="radio"
          id={ABSOLUTE_CASES}
          name={groupName}
          value={ABSOLUTE_CASES}
          checked={partOfPopulation === ABSOLUTE_CASES}
          className={s.switcher__radio}
          onChange={(e) => onSwitcherChange(e.target.value)}
        />
        Absolute cases
      </label>
      <label htmlFor={CASES_PER_HUNDRED}>
        <input
          type="radio"
          id={CASES_PER_HUNDRED}
          name={groupName}
          value={CASES_PER_HUNDRED}
          checked={partOfPopulation === CASES_PER_HUNDRED}
          className={s.switcher__radio}
          onChange={(e) => onSwitcherChange(e.target.value)}
        />
        Cases per 100,000 population
      </label>
    </ul>
  );
}

CasesSwitcher.propTypes = {
  groupName: PropTypes.string.isRequired,
  switchersState: PropTypes.bool.isRequired,
  onSwitcherChange: PropTypes.func.isRequired,
};
