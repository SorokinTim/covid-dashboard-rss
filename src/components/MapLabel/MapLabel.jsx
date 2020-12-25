import React from 'react';
import PropTypes from 'prop-types';
import style from './MapLabel.module.css';
import getLegendData from '../../utils/getLegendData';

export default function MapLabel({ switchersState }) {
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
        width: `${Math.floor(el.size / 2)}px`,
        height: `${Math.floor(el.size / 2)}px`,
      };

      return (
        <div key={el.size} className={style.label__item}>
          <div className={style.label__circle} style={widthStyle} />
          <div className={style.label__title}>{el.string}</div>
        </div>
      );
    });
  }

  // console.log(getLabels());

  return (
    <div className={style.label}>
      <div className={style.label__items}>
        {/* <div className={style.label__item}> */}
        {/*  <div className={style.label__circle} /> */}
        {/*  <div className={style.label__title}>> 500,000,000</div> */}
        {/* </div> */}
        {renderLabels(getLabels())}
      </div>
    </div>
  );
}

MapLabel.propTypes = {
  switchersState: PropTypes.shape({
    partOfPopulation: PropTypes.string,
    typeOfTime: PropTypes.string,
    stageOfDisease: PropTypes.string,
  }).isRequired,
};
