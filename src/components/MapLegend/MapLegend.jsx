import React from 'react';
import PropTypes from 'prop-types';
import getLegendData from '../../utils/getLegendData';
import style from './MapLegend.module.css';

export default function MapLegend({ switchersState }) {
  function getLabels() {
    const labels = getLegendData(switchersState);
    const labelsArr = [];

    Object.keys(labels).forEach((label) => {
      labelsArr.push(labels[label]);
    });

    return labelsArr;
  }

  function renderLabels(labels) {
    return labels.map((el) => {
      const widthStyle = {
        width: `${Math.floor(el.size)}px`,
        height: `${Math.floor(el.size)}px`,
      };

      return (
        <div key={el.size} className={style.label__item}>
          <div className={style.label__circle} style={widthStyle} />
          <div className={style.label__title}>{el.string}</div>
        </div>
      );
    });
  }

  return (
    <div className={style.label}>
      <div className={style.label__items}>
        {renderLabels(getLabels())}
      </div>
    </div>
  );
}

MapLegend.propTypes = {
  switchersState: PropTypes.shape({
    partOfPopulation: PropTypes.string,
    typeOfTime: PropTypes.string,
    stageOfDisease: PropTypes.string,
  }).isRequired,
};
