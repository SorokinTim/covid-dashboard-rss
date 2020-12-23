import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CovidService from '../../api/Covid-service';
import ChartComponentView from './ChartComponentView';

export default class ChartComponent extends Component {
  covidService = new CovidService();

  constructor() {
    super();
    this.state = {
      chartData: null,
      isLoading: true,
      isError: false,
    };
  }

  componentDidMount() {
    // const { country } = this.props;
    // console.log('country', country);
    this.getChartData(this.covidService.getAllDaysGlobal);
  }

  /* shouldComponentUpdate(nextProps) {
    const { switchersState: prevSwitchersState } = nextProps;
    const { switchersState } = this.props;
    const { isLoading } = this.state;

    if (isLoading) {
      console.log('true(isLoading)');
      return true;
    }

    if (prevSwitchersState.partOfPopulation === switchersState.partOfPopulation
      && prevSwitchersState.typeOfTime === switchersState.typeOfTime
      && prevSwitchersState.stageOfDisease === switchersState.stageOfDisease) {
      console.log('false');
      return false;
    }

    const canvas = document.querySelector('.canvas-chart');
    if (canvas) {
      console.log('canvas', canvas);
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      canvas.remove();
      console.log('canvas.remove()');
      console.log('true');

      return true;
    }

    return true;
  } */

  componentDidUpdate(prevProps) {
    this.onComponentUpdate(prevProps);
  }

  onComponentUpdate(prevProps) {
    const { country } = this.props;

    if (prevProps.country === country) {
      return;
    }

    this.setState({
      isLoading: true,
    });

    if (country) {
      this.getChartData(this.covidService.getAllDaysByCountry);
    } else {
      this.getChartData(this.covidService.getAllDaysGlobal);
    }
  }

  onChartDataLoaded = (chartData) => {
    this.setState({
      chartData,
      isLoading: false,
    });
  }

  onError = () => {
    this.setState({
      isError: true,
      isLoading: false,
    });
  }

  getChartData(fn) {
    const { country } = this.props;
    fn(country)
      .then(this.onChartDataLoaded)
      .catch(this.onError);
  }

  render() {
    const {
      switchersState,
      onSwitcherChange,
      startData,
      country,
    } = this.props;
    const { chartData, isLoading, isError } = this.state;
    const error = isError ? 'error' : null;
    const loading = isLoading ? 'loading...' : null;
    const app = !(isError || isLoading)
      ? (
        <ChartComponentView
          startData={startData}
          chartData={chartData}
          country={country}
          switchersState={switchersState}
          onSwitcherChange={onSwitcherChange}
        />
      ) : null;

    return (
      <>
        { error}
        { loading}
        { app}
      </>
    );
  }
}

ChartComponent.defaultProps = {
  country: null,
};

ChartComponent.propTypes = {
  startData: PropTypes.arrayOf(
    PropTypes.shape({
      population: PropTypes.number,
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
