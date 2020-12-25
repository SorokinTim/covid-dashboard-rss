import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CovidService from '../../api/Covid-service';
import ChartComponentView from './ChartComponentView';
import Spinner from '../Spinner/Spinner';

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
    this.getChartData(this.covidService.getAllDaysGlobal);
  }

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
      isError: false,
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
      isError: false,
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
    const error = isError ? 'No Data' : null;
    const loading = isLoading ? <Spinner /> : null;
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
        {error}
        {loading}
        {app}
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
