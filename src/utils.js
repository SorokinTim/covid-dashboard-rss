import {
  DECIMAL_RADIX,
  DECIMAL_PLACES,
} from './constants';

function roundFigure(figure, decimalPlaces) {
  return Math.round(figure * decimalPlaces * DECIMAL_RADIX) / (decimalPlaces * DECIMAL_RADIX);
}

function getFigurePerHundredThousandPopulation(totalFigure, population) {
  const figure = (totalFigure * 100000) / population;

  return roundFigure(figure, DECIMAL_PLACES);
}

function getRequiredParam(countryData, isAbsoluteCases, isAllTime, stageOfDisease) {
  if (stageOfDisease === 'confirmed') {
    if (isAbsoluteCases && isAllTime) {
      return countryData.cases;
    }
    if (isAbsoluteCases && !isAllTime) {
      return countryData.todayCases;
    }
    if (!isAbsoluteCases && isAllTime) {
      return getFigurePerHundredThousandPopulation(countryData.cases,
        countryData.population);
    }
    if (!isAbsoluteCases && !isAllTime) {
      return getFigurePerHundredThousandPopulation(countryData.todayCases,
        countryData.population);
    }
  }

  if (stageOfDisease === 'deaths') {
    if (isAbsoluteCases && isAllTime) {
      return countryData.deaths;
    }
    if (isAbsoluteCases && !isAllTime) {
      return countryData.todayDeaths;
    }
    if (!isAbsoluteCases && isAllTime) {
      return getFigurePerHundredThousandPopulation(countryData.deaths,
        countryData.population);
    }
    if (!isAbsoluteCases && !isAllTime) {
      return getFigurePerHundredThousandPopulation(countryData.todayDeaths,
        countryData.population);
    }
  }

  if (stageOfDisease === 'recovered') {
    if (isAbsoluteCases && isAllTime) {
      return countryData.recovered;
    }
    if (isAbsoluteCases && !isAllTime) {
      return countryData.todayRecovered;
    }
    if (!isAbsoluteCases && isAllTime) {
      return getFigurePerHundredThousandPopulation(countryData.recovered, countryData.population);
    }
    if (!isAbsoluteCases && !isAllTime) {
      return getFigurePerHundredThousandPopulation(countryData.todayRecovered,
        countryData.population);
    }
  }

  return undefined;
}

export {
  getFigurePerHundredThousandPopulation,
  getRequiredParam,
};
