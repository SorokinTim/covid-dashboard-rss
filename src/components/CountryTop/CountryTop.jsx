import React from 'react';
import PropTypes from 'prop-types';
import style from './CountryTop.module.css';

export default function CountryTop({ startData, getCountryData }) {
  const countryData = getCountryData(startData);

  const {
    title,
    flag,
    country,
    value,
  } = countryData;

  return (
    <div className={style.country}>
      <div className={style.country__info}>{`${title}:`}</div>
      <div className={style.country__container}>
        <div className={style.country__flag}>
          <img
            src={flag}
            alt="flag"
          />
        </div>
        <div className={style.country__title}>{country}</div>
        <div className={style.country__cases}>{value}</div>
      </div>
    </div>
  );
}

CountryTop.propTypes = {
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
  getCountryData: PropTypes.func.isRequired,
};

// <CountryTop startData={startData} getCountryData={getMostCasesCountry} />
