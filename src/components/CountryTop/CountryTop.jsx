import React from 'react';
import PropTypes from 'prop-types';
import style from './CountryTop.module.css';

export default function CountryTop(startData, getCountryData) {
  const countryData = getCountryData(startData);

  const {
    title,
    flag,
    country,
    value,
  } = countryData;

  return (
    <div className={style['country-top']}>
      <div className={style['country-top__title']}>{title}</div>
      <div className={style['country-top__info']}>
        <img
          src={flag}
          alt="flag"
          className={style['country-top__flag']}
        />
        <div className={style['country-top__name']}>{country}</div>
      </div>
      <div className={style['country-top__value']}>{value}</div>
    </div>
  );
}

/* CountryTop.propTypes = {
  title: PropTypes.string.isRequired,
}; */

// <CountryTop startData={startData} getCountryData={getMostCasesCountry} />
