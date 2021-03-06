import React from 'react';
import PropTypes from 'prop-types';
import splitNumberWithCommas from '../../utils/splitNumberWithCommas';
import styles from './Cases.module.css';
import Time from '../Time/Time';

function getGlobalCases(countriesData, country) {
  if (!country) {
    return countriesData.reduce((totalCountryData, currentCountryData) => ({
      cases: totalCountryData.cases + currentCountryData.cases,
    }));
  }

  return null;
}

export default function Cases({ startData, country }) {
  const { cases } = getGlobalCases(startData, country);

  return (
    <div className={styles['global-cases']}>
      <div className={styles['global-cases__title']}>Global cases</div>
      <div className={styles['global-cases__count']}>{splitNumberWithCommas(cases)}</div>
      <Time startData={startData} />
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
