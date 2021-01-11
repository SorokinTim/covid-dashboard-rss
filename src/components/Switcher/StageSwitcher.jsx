import React from 'react';
import PropTypes from 'prop-types';
import { SWITCHERS_PARAMS } from '../../constants';
import style from './Switcher.module.css';

export default function StageSwitcher({ groupName, switchersState, onSwitcherChange }) {
  const { stageOfDisease } = switchersState;
  const { CONFIRMED } = SWITCHERS_PARAMS.STAGE_OF_DISEASE;
  const { DEATHS } = SWITCHERS_PARAMS.STAGE_OF_DISEASE;
  const { RECOVERED } = SWITCHERS_PARAMS.STAGE_OF_DISEASE;

  return (
    <div className={style.switcher}>
      <input
        type="radio"
        id={CONFIRMED}
        name={groupName}
        value={CONFIRMED}
        checked={stageOfDisease === CONFIRMED}
        className={style['choice-1']}
        onChange={(e) => onSwitcherChange(e.target.value)}
      />
      <label htmlFor={CONFIRMED} className={`${style.switcher__item} ${style.switcher__item_big}`} to="1">Confirmed</label>

      <input
        type="radio"
        id={DEATHS}
        name={groupName}
        value={DEATHS}
        checked={stageOfDisease === DEATHS}
        className={style['choice-2']}
        onChange={(e) => onSwitcherChange(e.target.value)}
      />
      <label htmlFor={DEATHS} className={`${style.switcher__item} ${style.switcher__item_big}`} to="2">Deaths</label>

      <input
        type="radio"
        id={RECOVERED}
        name={groupName}
        value={RECOVERED}
        checked={stageOfDisease === RECOVERED}
        className={style['choice-3']}
        onChange={(e) => onSwitcherChange(e.target.value)}
      />
      <label htmlFor={RECOVERED} className={`${style.switcher__item} ${style.switcher__item_big}`} to="3">Recovered</label>
    </div>
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
