import {
  DECIMAL_RADIX,
  DECIMAL_PLACES,
  SWITCHERS_PARAMS,
} from './constants';

function roundFigure(figure, decimalPlaces) {
  return Math.round(figure * decimalPlaces * DECIMAL_RADIX) / (decimalPlaces * DECIMAL_RADIX);
}

function getFigurePerHundredThousandPopulation(totalFigure, population) {
  const figure = (totalFigure * 100000) / population;

  return roundFigure(figure, DECIMAL_PLACES);
}

function getRequiredParam(countryData, switchersState) {
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

  if (stageOfDisease === CONFIRMED) {
    if (isAbsoluteCases && isAllTime) {
      return cases;
    }
    if (isAbsoluteCases && isLastDay) {
      return todayCases;
    }
    if (isCasesPerHundred && isAllTime) {
      return getFigurePerHundredThousandPopulation(cases, population);
    }
    if (isCasesPerHundred && isLastDay) {
      return getFigurePerHundredThousandPopulation(todayCases, population);
    }
  }

  if (stageOfDisease === DEATHS) {
    if (isAbsoluteCases && isAllTime) {
      return deaths;
    }
    if (isAbsoluteCases && isLastDay) {
      return todayDeaths;
    }
    if (isCasesPerHundred && isAllTime) {
      return getFigurePerHundredThousandPopulation(deaths, population);
    }
    if (isCasesPerHundred && isLastDay) {
      return getFigurePerHundredThousandPopulation(todayDeaths, population);
    }
  }

  if (stageOfDisease === RECOVERED) {
    if (isAbsoluteCases && isAllTime) {
      return recovered;
    }
    if (isAbsoluteCases && isLastDay) {
      return todayRecovered;
    }
    if (isCasesPerHundred && isAllTime) {
      return getFigurePerHundredThousandPopulation(recovered, population);
    }
    if (isCasesPerHundred && isLastDay) {
      return getFigurePerHundredThousandPopulation(todayRecovered, population);
    }
  }

  return undefined;
}

export {
  getFigurePerHundredThousandPopulation,
  getRequiredParam,
};
