import React from 'react';
import PropTypes from 'prop-types';
import { getFigurePerHundredThousandPopulation } from '../../utils';
import s from './Table.module.css';
import {
  CONFIRMED_INDEX,
  DEATHS_INDEX,
  RECOVERED_INDEX,
  CONFIRMED_STAT_TITLE,
  DEATH_STAT_TITLE,
  RECOVERED_STAT_TITLE,
  TODAY_CONFIRMED_STAT_TITLE,
  TODAY_DEATH_STAT_TITLE,
  TODAY_RECOVERED_STAT_TITLE,
} from '../../constants';

function getTotalPopulation(countriesData) {
  return countriesData
    .reduce((population, currentCountryData) => population + currentCountryData.population, 0);
}

function getGlobalTableFigures(countriesData, [confirmedStat, deathsStat, recoveredStat]) {
  return countriesData.reduce((totalCountryData, currentCountryData) => ([
    totalCountryData[CONFIRMED_INDEX] + currentCountryData[confirmedStat],
    totalCountryData[DEATHS_INDEX] + currentCountryData[deathsStat],
    totalCountryData[RECOVERED_INDEX] + currentCountryData[recoveredStat],
  ]), [0, 0, 0]);
}

function getTableData(countriesData, selectedCountry, isAbsoluteCases, isAllTime) {
  if (!selectedCountry) {
    if (isAbsoluteCases && isAllTime) {
      return getGlobalTableFigures(countriesData,
        [CONFIRMED_STAT_TITLE, DEATH_STAT_TITLE, RECOVERED_STAT_TITLE]);
    }

    if (isAbsoluteCases && !isAllTime) {
      return getGlobalTableFigures(countriesData,
        [TODAY_CONFIRMED_STAT_TITLE, TODAY_DEATH_STAT_TITLE, TODAY_RECOVERED_STAT_TITLE]);
    }

    const totalPopulation = getTotalPopulation(countriesData);

    if (!isAbsoluteCases && isAllTime) {
      return getGlobalTableFigures(countriesData,
        [CONFIRMED_STAT_TITLE, DEATH_STAT_TITLE, RECOVERED_STAT_TITLE])
        .map((figure) => getFigurePerHundredThousandPopulation(figure, totalPopulation));
    }

    if (!isAbsoluteCases && !isAllTime) {
      return getGlobalTableFigures(countriesData,
        [TODAY_CONFIRMED_STAT_TITLE, TODAY_DEATH_STAT_TITLE, TODAY_RECOVERED_STAT_TITLE])
        .map((figure) => getFigurePerHundredThousandPopulation(figure, totalPopulation));
    }
  }

  const dataOfSelectedCountry = countriesData
    .find((countryData) => countryData.country === selectedCountry);

  const {
    cases,
    deaths,
    recovered,
    todayCases,
    todayDeaths,
    todayRecovered,
    population,
  } = dataOfSelectedCountry;

  if (isAbsoluteCases && isAllTime) {
    return [
      cases,
      deaths,
      recovered,
    ];
  }

  if (isAbsoluteCases && !isAllTime) {
    return [
      todayCases,
      todayDeaths,
      todayRecovered,
    ];
  }

  if (!isAbsoluteCases && isAllTime) {
    return [
      getFigurePerHundredThousandPopulation(cases, population),
      getFigurePerHundredThousandPopulation(deaths, population),
      getFigurePerHundredThousandPopulation(recovered, population),
    ];
  }

  if (!isAbsoluteCases && !isAllTime) {
    return [
      getFigurePerHundredThousandPopulation(todayCases, population),
      getFigurePerHundredThousandPopulation(todayDeaths, population),
      getFigurePerHundredThousandPopulation(todayRecovered, population),
    ];
  }

  return undefined;
}

export default function Table({
  startData,
  country,
  isAbsoluteCases,
  isAllTime,
}) {
  const tableData = getTableData(startData, country, isAbsoluteCases, isAllTime);
  const [confirmed, deaths, recovered] = tableData;

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
  isAbsoluteCases: PropTypes.bool.isRequired,
  isAllTime: PropTypes.bool.isRequired,
};
