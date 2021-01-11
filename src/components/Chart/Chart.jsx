import React from 'react';
import PropTypes from 'prop-types';
import ChartJS from 'chart.js';
import getChartOptions from '../../utils/getChartOptions';
import style from './Chart.module.css';

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
    const {
      startData,
      chartData,
      switchersState,
      country,
    } = this.props;

    if (!(prevSwitchersState.partOfPopulation === switchersState.partOfPopulation
      && prevSwitchersState.typeOfTime === switchersState.typeOfTime
      && prevSwitchersState.stageOfDisease === switchersState.stageOfDisease)) {
      const chartOptions = getChartOptions(startData, chartData, switchersState, country);

      this.chart.config.type = chartOptions.type;
      this.chart.config.data = {
        labels: chartOptions.labels,
        datasets: [{
          label: 'Cases',
          data: chartOptions.data,
          backgroundColor: chartOptions.type === 'bar' ? '#FF3E58' : 'rgba(0, 0, 0, 0.1)',
          borderColor: chartOptions.type === 'line' ? '#FF3E58' : 'rgba(0, 0, 0, 0.1)',
          borderWidth: chartOptions.type === 'bar' ? 0 : 1,
        }],
      };
      this.chart.update();
    }
  }

  initializeChart() {
    const {
      startData,
      chartData,
      switchersState,
      country,
    } = this.props;
    const chartOptions = getChartOptions(startData, chartData, switchersState, country);

    this.ctx = this.chartRef.getContext('2d');
    this.chart = new ChartJS(this.ctx, {
      type: chartOptions.type,
      data: {
        labels: chartOptions.labels,
        datasets: [{
          label: 'Cases',
          data: chartOptions.data,
          backgroundColor: chartOptions.type === 'bar' ? '#FF3E58' : 'rgba(0, 0, 0, 0.1)',
          borderColor: chartOptions.type === 'line' ? '#FF3E58' : 'rgba(0, 0, 0, 0.1)',
          borderWidth: chartOptions.type === 'bar' ? 0 : 1,
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
    });
  }

  render() {
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
