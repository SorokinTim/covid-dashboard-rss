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
    this.getChartData();
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

  getChartData() {
    this.covidService
      .getAllDaysGlobal()
      .then(this.onChartDataLoaded)
      .catch(this.onError);
  }

  render() {
    const { switchersState, onSwitcherChange } = this.props;
    const { chartData, isLoading, isError } = this.state;

    const error = isError ? 'error' : null;
    const loading = isLoading ? 'loading...' : null;
    const app = !(isError || isLoading)
      ? (
        <ChartComponentView
          switchersState={switchersState}
          onSwitcherChange={onSwitcherChange}
          chartData={chartData}
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

ChartComponent.propTypes = {
  switchersState: PropTypes.shape({
    partOfPopulation: PropTypes.string,
    typeOfTime: PropTypes.string,
    stageOfDisease: PropTypes.string,
  }).isRequired,
  onSwitcherChange: PropTypes.func.isRequired,
};
