import React from 'react';
import style from './MapLabel.module.css';
import getLegendData from '../../utils/getLegendData';

// eslint-disable-next-line react/prop-types
export default function MapLabel({ switchersState }) {
  function getLabels() {
    const label = getLegendData(switchersState);
    const labelArr = [];

    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const size in label) {
      labelArr.push(label[size]);
    }

    return labelArr;
  }

  function renderLabels(labels) {
    return labels.map((el) => {
      const widthStyle = {
        width: `${Math.floor(el.size / 2)}px`,
        height: `${Math.floor(el.size / 2)}px`,
      };

      return (
        <div className={style.label__item}>
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
