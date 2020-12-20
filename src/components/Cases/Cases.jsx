import React from 'react';
import PropTypes from 'prop-types';
import styles from './Cases.module.css';

function getGlobalCases(countriesData, country) {
  if (!country) {
    return countriesData.reduce((totalCountryData, currentCountryData) => ({
      cases: totalCountryData.cases + currentCountryData.cases,
    }));
  }

  return null;
}

function splitNumberIntoSpaces(num) {
  return String(num).split('').reverse().join('')
    .match(/.{1,3}/g)
    .map((el) => String(el).split('').reverse().join(''))
    .reverse()
    .join(' ');
}

export default function Cases({ startData, country }) {
  const { cases } = getGlobalCases(startData, country);

  return (
    <div className={styles['global-cases']}>
      <div className={styles['global-cases__title']}>Global cases:</div>
      <div className={styles['global-cases__count']}>{splitNumberIntoSpaces(cases)}</div>
    </div>
  );
}

Cases.defaultProps = {
  country: null,
};

Cases.propTypes = {
  startData: PropTypes.arrayOf(
    PropTypes.shape({
      country: PropTypes.string,
      cases: PropTypes.number,
      deaths: PropTypes.number,
      recovered: PropTypes.number,
    }),
  ).isRequired,
  country: PropTypes.string,
};
