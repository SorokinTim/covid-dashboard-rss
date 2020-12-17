import React from 'react';
import PropTypes from 'prop-types';
import s from './Table.module.css';

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
    <table className={s.table}>
      <thead className={s.table__head}>
        <tr className={s.table__row}>
          <th className={s['table__head-cell']}>Confirmed</th>
          <th className={s['table__head-cell']}>Deaths</th>
          <th className={s['table__head-cell']}>Recovered</th>
        </tr>
      </thead>
      <tbody>
        <tr className={s.table__row}>
          <td className={s.table__cell}>{cases}</td>
          <td className={s.table__cell}>{deaths}</td>
          <td className={s.table__cell}>{recovered}</td>
        </tr>
      </tbody>
    </table>

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
