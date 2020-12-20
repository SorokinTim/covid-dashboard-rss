import React from 'react';
import PropTypes from 'prop-types';
import style from './Table.module.css';

function splitNumberIntoSpaces(num) {
  return String(num).split('').reverse().join('')
    .match(/.{1,3}/g)
    .map((el) => String(el).split('').reverse().join(''))
    .reverse()
    .join(' ');
}

function getTableData(countriesData, country) {
  if (!country) {
    return countriesData.reduce((totalCountryData, currentCountryData) => ({
      cases: totalCountryData.cases + currentCountryData.cases,
      deaths: totalCountryData.deaths + currentCountryData.deaths,
      recovered: totalCountryData.recovered + currentCountryData.recovered,
    }));
  }

  const dataOfSelectedCountry = countriesData
    .find((countryData) => countryData.country === country);

  return {
    cases: dataOfSelectedCountry.cases,
    deaths: dataOfSelectedCountry.deaths,
    recovered: dataOfSelectedCountry.recovered,
  };
}
export default function Table({ startData, country }) {
  const tableData = getTableData(startData, country);
  const { cases, deaths, recovered } = tableData;

  return (
    <div className={style.board}>
      <div className={style.board__switcher}>
        {/* TODO: Switcher */}
      </div>
      <div className={style.board__switcher}>
        {/* TODO: Switcher */}
      </div>
      <div className={style.board__container}>
        <div className={style.board__items}>
          <div className={style.board__item}>
            <div className={style['board__icon-container']}>
              <span className={`${style.board__icon} material-icons`}>new_releases</span>
            </div>
            <div className={style.board__info}>
              <div className={style.board__title}>Confirmed:</div>
              <div className={style.board__statistic}>{splitNumberIntoSpaces(cases)}</div>
            </div>
          </div>

          <div className={style.board__item}>
            <div className={style['board__icon-container']}>
              <span className={`${style.board__icon} material-icons`}>person_remove</span>
            </div>
            <div className={style.board__info}>
              <div className={style.board__title}>Deaths:</div>
              <div className={style.board__statistic}>{splitNumberIntoSpaces(deaths)}</div>
            </div>
          </div>

          <div className={style.board__item}>
            <div className={style['board__icon-container']}>
              <span className={`${style.board__icon} material-icons`}>favorite</span>
            </div>
            <div className={style.board__info}>
              <div className={style.board__title}>Recovered:</div>
              <div className={style.board__statistic}>{splitNumberIntoSpaces(recovered)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

Table.defaultProps = {
  country: null,
};

Table.propTypes = {
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
