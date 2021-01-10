import getTotalPopulation from './getTotalPopulation';
import getFigurePerPartOfPopulation from './getFigurePerPartOfPopulation';
import { SWITCHERS_PARAMS } from '../constants';

export default function getChartOptions(countriesData, startChartData,
  switchersState, selectedCountry) {
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

  const totalPopulation = getTotalPopulation(countriesData);
  const result = {};

  const chartData = selectedCountry ? startChartData.timeline : startChartData;

  if (isConfirmed) {
    if (isAbsoluteCases && isAllTime) {
      result.data = Object.values((chartData.cases));
      result.labels = (Object.keys(chartData.cases));
      result.type = 'line';
    }

    if (isAbsoluteCases && isLastDay) {
      result.data = Object.values(chartData.cases).map((el, i, arr) => {
        if (i === 0) {
          return el;
        }

        return el - arr[i - 1];
      });
      result.labels = (Object.keys(chartData.cases));
      result.type = 'bar';
    }

    if (isCasesPerHundred && isAllTime) {
      result.data = Object.values((chartData.cases))
        .map((value) => getFigurePerPartOfPopulation(value, totalPopulation));
      result.labels = (Object.keys(chartData.cases));
      result.type = 'line';
    }

    if (isCasesPerHundred && isLastDay) {
      result.data = Object.values(chartData.cases).map((el, i, arr) => {
        if (i === 0) {
          return el;
        }

        return el - arr[i - 1];
      })
        .map((value) => getFigurePerPartOfPopulation(value, totalPopulation));
      result.labels = (Object.keys(chartData.cases));
      result.type = 'bar';
    }
  }

  if (isDeaths) {
    if (isAbsoluteCases && isAllTime) {
      result.data = Object.values((chartData.deaths));
      result.labels = (Object.keys(chartData.deaths));
      result.type = 'line';
    }

    if (isAbsoluteCases && isLastDay) {
      result.data = Object.values(chartData.deaths).map((el, i, arr) => {
        if (i === 0) {
          return el;
        }

        return el - arr[i - 1];
      });
      result.labels = (Object.keys(chartData.deaths));
      result.type = 'bar';
    }

    if (isCasesPerHundred && isAllTime) {
      result.data = Object.values((chartData.deaths))
        .map((value) => getFigurePerPartOfPopulation(value, totalPopulation));
      result.labels = (Object.keys(chartData.deaths));
      result.type = 'line';
    }

    if (isCasesPerHundred && isLastDay) {
      result.data = Object.values(chartData.deaths).map((el, i, arr) => {
        if (i === 0) {
          return el;
        }

        return el - arr[i - 1];
      })
        .map((value) => getFigurePerPartOfPopulation(value, totalPopulation));
      result.labels = (Object.keys(chartData.deaths));
      result.type = 'bar';
    }
  }

  if (isRecovered) {
    if (isAbsoluteCases && isAllTime) {
      result.data = Object.values((chartData.recovered));
      result.labels = (Object.keys(chartData.recovered));
      result.type = 'line';
    }

    if (isAbsoluteCases && isLastDay) {
      result.data = Object.values(chartData.recovered).map((el, i, arr) => {
        if (i === 0) {
          return el;
        }

        return el - arr[i - 1];
      });
      result.labels = (Object.keys(chartData.recovered));
      result.type = 'bar';
    }

    if (isCasesPerHundred && isAllTime) {
      result.data = Object.values((chartData.recovered))
        .map((value) => getFigurePerPartOfPopulation(value, totalPopulation));
      result.labels = (Object.keys(chartData.recovered));
      result.type = 'line';
    }

    if (isCasesPerHundred && isLastDay) {
      result.data = Object.values(chartData.recovered).map((el, i, arr) => {
        if (i === 0) {
          return el;
        }

        return el - arr[i - 1];
      })
        .map((value) => getFigurePerPartOfPopulation(value, totalPopulation));
      result.labels = (Object.keys(chartData.recovered));
      result.type = 'bar';
    }
  }

  return {
    type: result.type,
    labels: result.labels,
    data: result.data,
  };
}
