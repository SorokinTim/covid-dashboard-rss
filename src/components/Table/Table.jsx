import React from 'react';
import PropTypes from 'prop-types';
import TimeSwitcher from '../Switcher/TimeSwitcher';
import CasesSwitcher from '../Switcher/CasesSwitcher';
import getFigurePerHundredThousandPopulation from '../../utils/getFigurePerHundredThousandPopulation';
import getTotalPopulation from '../../utils/getTotalPopulation';
import splitNumberWithCommas from '../../utils/splitNumberWithCommas';
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
import style from './Table.module.css';

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
  onSwitcherChange,
}) {
  const tableData = getTableData(startData, country, switchersState);
  const [cases, deaths, recovered] = tableData;

  return (
    <div className={style.board}>
      <div className={style.board__switcher}>
        <TimeSwitcher
          groupName="tableTime"
          switchersState={switchersState}
          onSwitcherChange={onSwitcherChange}
        />
      </div>
      <div className={style.board__switcher}>
        <CasesSwitcher
          groupName="tableCases"
          switchersState={switchersState}
          onSwitcherChange={onSwitcherChange}
        />
      </div>
      <div className={style.board__container}>
        <div className={style.board__items}>
          <div className={style.board__item}>
            <div className={style['board__icon-container']}>
              <span className={`${style.board__icon} material-icons notranslate`}>new_releases</span>
            </div>
            <div className={style.board__info}>
              <div className={style.board__title}>Confirmed</div>
              <div className={style.board__statistic}>{splitNumberWithCommas(cases)}</div>
            </div>
          </div>

          <div className={style.board__item}>
            <div className={style['board__icon-container']}>
              <span className={`${style.board__icon} material-icons notranslate`}>person_remove</span>
            </div>
            <div className={style.board__info}>
              <div className={style.board__title}>Deaths</div>
              <div className={style.board__statistic}>{splitNumberWithCommas(deaths)}</div>
            </div>
          </div>

          <div className={style.board__item}>
            <div className={style['board__icon-container']}>
              <span className={`${style.board__icon} material-icons notranslate`}>favorite</span>
            </div>
            <div className={style.board__info}>
              <div className={style.board__title}>Recovered</div>
              <div className={style.board__statistic}>{splitNumberWithCommas(recovered)}</div>
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
  switchersState: PropTypes.shape({
    partOfPopulation: PropTypes.string,
    typeOfTime: PropTypes.string,
    stageOfDisease: PropTypes.string,
  }).isRequired,
  onSwitcherChange: PropTypes.func.isRequired,
};
