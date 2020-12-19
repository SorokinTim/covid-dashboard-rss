import React from 'react';
import PropTypes from 'prop-types';
import { SWITCHERS_PARAMS } from '../../constants';
import s from './Switcher.module.css';

export default function StageSwitcher({ groupName, switchersState, onSwitcherChange }) {
  const { stageOfDisease } = switchersState;
  const { CONFIRMED } = SWITCHERS_PARAMS.STAGE_OF_DISEASE;
  const { DEATHS } = SWITCHERS_PARAMS.STAGE_OF_DISEASE;
  const { RECOVERED } = SWITCHERS_PARAMS.STAGE_OF_DISEASE;

  return (
    <ul className={s.switcher}>
      <label htmlFor={CONFIRMED}>
        <input
          type="radio"
          id={CONFIRMED}
          name={groupName}
          value={CONFIRMED}
          checked={stageOfDisease === CONFIRMED}
          className={s.switcher__radio}
          onChange={(e) => onSwitcherChange(e.target.value)}
        />
        Confirmed
      </label>
      <label htmlFor={DEATHS}>
        <input
          type="radio"
          id={DEATHS}
          name={groupName}
          value={DEATHS}
          checked={stageOfDisease === DEATHS}
          className={s.switcher__radio}
          onChange={(e) => onSwitcherChange(e.target.value)}
        />
        Deaths
      </label>
      <label htmlFor={RECOVERED}>
        <input
          type="radio"
          id={RECOVERED}
          name={groupName}
          value={RECOVERED}
          checked={stageOfDisease === RECOVERED}
          className={s.switcher__radio}
          onChange={(e) => onSwitcherChange(e.target.value)}
        />
        Recovered
      </label>
    </ul>
  );
}

StageSwitcher.propTypes = {
  groupName: PropTypes.string.isRequired,
  switchersState: PropTypes.shape({
    partOfPopulation: PropTypes.string,
    typeOfTime: PropTypes.string,
    stageOfDisease: PropTypes.string,
  }).isRequired,
  onSwitcherChange: PropTypes.func.isRequired,
};
