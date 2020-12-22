/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import ChartJS from 'chart.js';
import style from './Chart.module.css';

export default class Chart extends React.Component {
  constructor() {
    super();
    this.chartRef = React.createRef();
  }

  componentDidMount() {
    this.initializeChart();
  }

  initializeChart() {
    const { chartData } = this.props;
    const data = (Object.values(chartData.cases));
    const labels = (Object.keys(chartData.cases));
    this.ctx = this.chartRef.getContext('2d');
    this.chart = new ChartJS(this.ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [{
          label: 'Cases',
          data,
          borderColor: '#FF3E58',
          borderWidth: 1,
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
      <canvas className={style['chart__graph-item']} ref={(el) => { this.chartRef = el; }} />
    );
  }
}

Chart.propTypes = {
  chartData: PropTypes.shape({
    cases: PropTypes.object,
    deaths: PropTypes.object,
    recovered: PropTypes.object,
  }).isRequired,
};
