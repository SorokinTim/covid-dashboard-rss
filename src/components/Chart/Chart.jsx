/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import ChartJS from 'chart.js';
import getTotalPopulation from '../../utils/getTotalPopulation';
import getFigurePerHundredThousandPopulation from '../../utils/getFigurePerHundredThousandPopulation';
import { SWITCHERS_PARAMS } from '../../constants';
import style from './Chart.module.css';

function getChartOptions(countriesData, startChartData, switchersState, selectedCountry) {
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
        .map((value) => getFigurePerHundredThousandPopulation(value, totalPopulation));
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
        .map((value) => getFigurePerHundredThousandPopulation(value, totalPopulation));
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
        .map((value) => getFigurePerHundredThousandPopulation(value, totalPopulation));
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
        .map((value) => getFigurePerHundredThousandPopulation(value, totalPopulation));
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
        .map((value) => getFigurePerHundredThousandPopulation(value, totalPopulation));
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
        .map((value) => getFigurePerHundredThousandPopulation(value, totalPopulation));
      result.labels = (Object.keys(chartData.recovered));
      result.type = 'bar';
    }
  }

  return {
    type: result.type,
    data: {
      labels: result.labels,
      datasets: [{
        label: 'Cases',
        data: result.data,
        backgroundColor: result.type === 'bar' ? '#FF3E58' : 'rgba(0, 0, 0, 0.1)',
        borderColor: result.type === 'line' ? '#FF3E58' : 'rgba(0, 0, 0, 0.1)',
        borderWidth: result.type === 'bar' ? 0 : 1,
      }],
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
          },
        }],
      },
    },
  };
}

export default class Chart extends React.Component {
  constructor() {
    super();
    this.chartRef = React.createRef();
  }

  componentDidMount() {
    this.initializeChart();
  }

  componentDidUpdate(prevProps) {
    const { switchersState: prevSwitchersState } = prevProps;
    const { switchersState } = this.props;

    if (!(prevSwitchersState.partOfPopulation === switchersState.partOfPopulation
      && prevSwitchersState.typeOfTime === switchersState.typeOfTime
      && prevSwitchersState.stageOfDisease === switchersState.stageOfDisease)) {
      this.initializeChart();
    }
  }

  initializeChart() {
    // console.log('Chart initializeChart()');
    const {
      startData,
      chartData,
      switchersState,
      country,
    } = this.props;
    // console.log('this.chartRef:', this.chartRef);
    this.ctx = this.chartRef.getContext('2d');
    this.chart = new ChartJS(this.ctx,
      getChartOptions(startData, chartData, switchersState, country));
  }

  render() {
    // console.log('Chart render()');
    return (
      <canvas className={`${style['chart__graph-item']} canvas-chart`} ref={(el) => { this.chartRef = el; }} />
    );
  }
}

Chart.defaultProps = {
  country: null,
};

Chart.propTypes = {
  startData: PropTypes.arrayOf(
    PropTypes.shape({
      population: PropTypes.number,
    }),
  ).isRequired,
  chartData: PropTypes.shape({
    cases: PropTypes.object,
    deaths: PropTypes.object,
    recovered: PropTypes.object,
  }).isRequired,
  switchersState: PropTypes.shape({
    partOfPopulation: PropTypes.string,
    typeOfTime: PropTypes.string,
    stageOfDisease: PropTypes.string,
  }).isRequired,
  country: PropTypes.string,
};
