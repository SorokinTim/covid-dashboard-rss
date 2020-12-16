import React from 'react';
import PropTypes from 'prop-types';
import s from './Table.module.css';

function getTableData(data, countryCode) {
  if (!countryCode) {
    return {
      confirmed: data.Global.TotalConfirmed,
      deaths: data.Global.TotalDeaths,
      recovered: data.Global.TotalRecovered,
    };
  }

  const countries = data.Countries;
  const countryData = countries.find((country) => country.CountryCode === countryCode);

  return {
    confirmed: countryData.TotalConfirmed,
    deaths: countryData.TotalDeaths,
    recovered: countryData.TotalRecovered,
  };
}
export default function Table({ data, countryCode }) {
  const tableData = getTableData(data, countryCode);
  const { confirmed, deaths, recovered } = tableData;

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
          <td className={s.table__cell}>{confirmed}</td>
          <td className={s.table__cell}>{deaths}</td>
          <td className={s.table__cell}>{recovered}</td>
        </tr>
      </tbody>
    </table>

  );
}

Table.defaultProps = {
  countryCode: null,
};

Table.propTypes = {
  data: PropTypes.shape({
    confirmed: PropTypes.number,
    deaths: PropTypes.number,
    recovered: PropTypes.number,
    message: PropTypes.string,
    Global: PropTypes.string,
  }).isRequired,
  countryCode: PropTypes.string,
};
