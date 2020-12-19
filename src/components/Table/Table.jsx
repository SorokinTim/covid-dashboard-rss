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
  SWITCHERS_PARAMS,
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

function getTableData(countriesData, selectedCountry, switchersState) {
  const { partOfPopulation, typeOfTime } = switchersState;

  const { ABSOLUTE_CASES } = SWITCHERS_PARAMS.PART_OF_POPULATION;
  const { CASES_PER_HUNDRED } = SWITCHERS_PARAMS.PART_OF_POPULATION;
  const { ALL_TIME } = SWITCHERS_PARAMS.TYPE_OF_TIME;
  const { LAST_DAY } = SWITCHERS_PARAMS.TYPE_OF_TIME;

  const isAbsoluteCases = partOfPopulation === ABSOLUTE_CASES;
  const isCasesPerHundred = partOfPopulation === CASES_PER_HUNDRED;
  const isAllTime = typeOfTime === ALL_TIME;
  const isLastDay = typeOfTime === LAST_DAY;

  if (!selectedCountry) {
    if (isAbsoluteCases && isAllTime) {
      return getGlobalTableFigures(countriesData,
        [CONFIRMED_STAT_TITLE, DEATH_STAT_TITLE, RECOVERED_STAT_TITLE]);
    }

    if (isAbsoluteCases && isLastDay) {
      return getGlobalTableFigures(countriesData,
        [TODAY_CONFIRMED_STAT_TITLE, TODAY_DEATH_STAT_TITLE, TODAY_RECOVERED_STAT_TITLE]);
    }

    const totalPopulation = getTotalPopulation(countriesData);

    if (isCasesPerHundred && isAllTime) {
      return getGlobalTableFigures(countriesData,
        [CONFIRMED_STAT_TITLE, DEATH_STAT_TITLE, RECOVERED_STAT_TITLE])
        .map((figure) => getFigurePerHundredThousandPopulation(figure, totalPopulation));
    }

    if (isCasesPerHundred && isLastDay) {
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

  if (isAbsoluteCases && isLastDay) {
    return [
      todayCases,
      todayDeaths,
      todayRecovered,
    ];
  }

  if (isCasesPerHundred && isAllTime) {
    return [
      getFigurePerHundredThousandPopulation(cases, population),
      getFigurePerHundredThousandPopulation(deaths, population),
      getFigurePerHundredThousandPopulation(recovered, population),
    ];
  }

  if (isCasesPerHundred && isLastDay) {
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
  switchersState,
}) {
  const tableData = getTableData(startData, country, switchersState);
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
  switchersState: PropTypes.bool.isRequired,
};
