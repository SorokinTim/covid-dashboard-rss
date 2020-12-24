/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import style from './CountryTab.module.css';

function getFlag(data, country) {
  let result = null;

  data.forEach((el) => {
    if (el.country === country) result = el.countryInfo.flag;
  });

  return result;
}

export default function CountryTab({ countryName, startData, onCountryTabCancel }) {
  return (
    <div className={style.country}>
      <div className={style.country__flag}>
        <img src={getFlag(startData, countryName)} alt="" className={style['country__flag-img']} />
      </div>

      <span className={style.country__title}>{countryName}</span>

      <span className={`material-icons ${style['country__cancel-icon']}`} onClick={() => onCountryTabCancel(null)}>cancel</span>
    </div>
  );
}

CountryTab.propTypes = {
  startData: PropTypes.arrayOf(
    PropTypes.shape({
      updated: PropTypes.number,
      country: PropTypes.string,
      cases: PropTypes.number,
      deaths: PropTypes.number,
      recovered: PropTypes.number,
      countryInfo: PropTypes.shape({
        flag: PropTypes.string,
      }),
    }),
  ).isRequired,
  countryName: PropTypes.string.isRequired,
  onCountryTabCancel: PropTypes.func.isRequired,
};
