import React from 'react';
import PropTypes from 'prop-types';
import s from './Switcher.module.css';

export default function CasesSwitcher({ name, isAbsoluteCases, onSwitcherChange }) {
  return (
    <ul className={s.switcher}>
      <label htmlFor="absoluteCases">
        <input
          type="radio"
          id="absoluteCases"
          name={name}
          value="absoluteCases"
          checked={isAbsoluteCases}
          className={s.switcher__radio}
          onChange={(e) => onSwitcherChange(e.target.value)}
        />
        Absolute cases
      </label>
      <label htmlFor="casesPerHundred">
        <input
          type="radio"
          id="casesPerHundred"
          name={name}
          value="casesPerHundred"
          checked={!isAbsoluteCases}
          className={s.switcher__radio}
          onChange={(e) => onSwitcherChange(e.target.value)}
        />
        Cases per 100,000 population
      </label>
    </ul>
  );
}

CasesSwitcher.propTypes = {
  name: PropTypes.string.isRequired,
  isAbsoluteCases: PropTypes.bool.isRequired,
  onSwitcherChange: PropTypes.func.isRequired,
};
