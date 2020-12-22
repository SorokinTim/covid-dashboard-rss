import React from 'react';
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
    this.ctx = this.chartRef.getContext('2d');
    this.chart = new ChartJS(this.ctx, {
      type: 'bar',
      data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'],
        datasets: [{
          label: 'Cases',
          data: [12, 19, 3, 5, 2, 3, 1, 6, 7, 4, 7, 7, 8, 9, 12, 11],
          backgroundColor: [
            '#59363E',
            '#59363E',
            '#59363E',
            '#59363E',
            '#59363E',
            '#59363E',
            '#59363E',
            '#59363E',
            '#59363E',
            '#59363E',
            '#59363E',
            '#59363E',
            '#59363E',
            '#59363E',
            '#59363E',
            '#59363E',
          ],
          borderColor: [
            '#FF3E58',
            '#FF3E58',
            '#FF3E58',
            '#FF3E58',
            '#FF3E58',
            '#FF3E58',
            '#FF3E58',
            '#FF3E58',
            '#FF3E58',
            '#FF3E58',
            '#FF3E58',
            '#FF3E58',
            '#FF3E58',
            '#FF3E58',
            '#FF3E58',
            '#FF3E58',
          ],
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
