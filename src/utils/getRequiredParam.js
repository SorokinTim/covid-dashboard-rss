import { SWITCHERS_PARAMS } from '../constants';
import getFigurePerPartOfPopulation from './getFigurePerPartOfPopulation';

export default function getRequiredParam(countryData, switchersState) {
  const {
    cases,
    todayCases,
    deaths,
    todayDeaths,
    recovered,
    todayRecovered,
    population,
  } = countryData;

  const { ABSOLUTE_CASES } = SWITCHERS_PARAMS.PART_OF_POPULATION;
  const { CASES_PER_HUNDRED } = SWITCHERS_PARAMS.PART_OF_POPULATION;
  const { ALL_TIME } = SWITCHERS_PARAMS.TYPE_OF_TIME;
  const { LAST_DAY } = SWITCHERS_PARAMS.TYPE_OF_TIME;
  const { CONFIRMED } = SWITCHERS_PARAMS.STAGE_OF_DISEASE;
  const { DEATHS } = SWITCHERS_PARAMS.STAGE_OF_DISEASE;
  const { RECOVERED } = SWITCHERS_PARAMS.STAGE_OF_DISEASE;

  const { partOfPopulation, typeOfTime, stageOfDisease } = switchersState;

  const isAbsoluteCases = partOfPopulation === ABSOLUTE_CASES;
  const isCasesPerHundred = partOfPopulation === CASES_PER_HUNDRED;
  const isAllTime = typeOfTime === ALL_TIME;
  const isLastDay = typeOfTime === LAST_DAY;
  const isConfirmed = stageOfDisease === CONFIRMED;
  const isDeaths = stageOfDisease === DEATHS;
  const isRecovered = stageOfDisease === RECOVERED;

  if (isConfirmed) {
    if (isAbsoluteCases && isAllTime) {
      return cases;
    }
    if (isAbsoluteCases && isLastDay) {
      return todayCases;
    }
    if (isCasesPerHundred && isAllTime) {
      return getFigurePerPartOfPopulation(cases, population);
    }
    if (isCasesPerHundred && isLastDay) {
      return getFigurePerPartOfPopulation(todayCases, population);
    }
  }

  if (isDeaths) {
    if (isAbsoluteCases && isAllTime) {
      return deaths;
    }
    if (isAbsoluteCases && isLastDay) {
      return todayDeaths;
    }
    if (isCasesPerHundred && isAllTime) {
      return getFigurePerPartOfPopulation(deaths, population);
    }
    if (isCasesPerHundred && isLastDay) {
      return getFigurePerPartOfPopulation(todayDeaths, population);
    }
  }

  if (isRecovered) {
    if (isAbsoluteCases && isAllTime) {
      return recovered;
    }
    if (isAbsoluteCases && isLastDay) {
      return todayRecovered;
    }
    if (isCasesPerHundred && isAllTime) {
      return getFigurePerPartOfPopulation(recovered, population);
    }
    if (isCasesPerHundred && isLastDay) {
      return getFigurePerPartOfPopulation(todayRecovered, population);
    }
  }

  return undefined;
}
