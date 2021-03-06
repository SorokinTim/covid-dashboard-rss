import React, { Component } from 'react';
import CovidService from './api/Covid-service';
import AppView from './AppView';
import { SWITCHERS_PARAMS } from './constants';

export default class App extends Component {
  covidService = new CovidService();

  constructor() {
    super();
    this.state = {
      startData: null,
      country: null,
      filter: '',
      switchersState: {
        partOfPopulation: SWITCHERS_PARAMS.PART_OF_POPULATION.ABSOLUTE_CASES,
        typeOfTime: SWITCHERS_PARAMS.TYPE_OF_TIME.ALL_TIME,
        stageOfDisease: SWITCHERS_PARAMS.STAGE_OF_DISEASE.CONFIRMED,
      },
      isLoading: true,
      isError: false,
    };
  }

  componentDidMount() {
    this.getStartData();
  }

  onStartDataLoaded = (startData) => {
    this.setState({
      startData: startData.filter((countryData) => countryData.population > 0),
      isLoading: false,
    });
  }

  onError = () => {
    this.setState({
      isError: true,
      isLoading: false,
    });
  }

  onCountryItemSelected = (country) => {
    this.setState({
      country,
      filter: '',
    });
  }

  onSearchChange = (filter) => {
    this.setState({
      filter,
    });
  }

  onCountryTabCancel = (value) => {
    this.setState({
      country: value,
    });
  }

  onSwitcherChange = (id) => {
    const { ABSOLUTE_CASES } = SWITCHERS_PARAMS.PART_OF_POPULATION;
    const { CASES_PER_HUNDRED } = SWITCHERS_PARAMS.PART_OF_POPULATION;
    const { ALL_TIME } = SWITCHERS_PARAMS.TYPE_OF_TIME;
    const { LAST_DAY } = SWITCHERS_PARAMS.TYPE_OF_TIME;
    const { CONFIRMED } = SWITCHERS_PARAMS.STAGE_OF_DISEASE;
    const { DEATHS } = SWITCHERS_PARAMS.STAGE_OF_DISEASE;
    const { RECOVERED } = SWITCHERS_PARAMS.STAGE_OF_DISEASE;

    switch (id) {
      case ABSOLUTE_CASES:
        this.setState((state) => {
          const partOfPopulation = ABSOLUTE_CASES;

          return {
            switchersState: { ...state.switchersState, partOfPopulation },
          };
        });
        break;
      case CASES_PER_HUNDRED:
        this.setState((state) => {
          const partOfPopulation = CASES_PER_HUNDRED;

          return {
            switchersState: { ...state.switchersState, partOfPopulation },
          };
        });
        break;
      case ALL_TIME:
        this.setState((state) => {
          const typeOfTime = ALL_TIME;

          return {
            switchersState: { ...state.switchersState, typeOfTime },
          };
        });
        break;
      case LAST_DAY:
        this.setState((state) => {
          const typeOfTime = LAST_DAY;
          return {
            switchersState: { ...state.switchersState, typeOfTime },
          };
        });
        break;
      case CONFIRMED:
        this.setState((state) => {
          const stageOfDisease = CONFIRMED;

          return {
            switchersState: { ...state.switchersState, stageOfDisease },
          };
        });
        break;
      case DEATHS:
        this.setState((state) => {
          const stageOfDisease = DEATHS;

          return {
            switchersState: { ...state.switchersState, stageOfDisease },
          };
        });
        break;
      case RECOVERED:
        this.setState((state) => {
          const stageOfDisease = RECOVERED;

          return {
            switchersState: { ...state.switchersState, stageOfDisease },
          };
        });
        break;
      default:
        break;
    }
  }

  getStartData() {
    this.covidService
      .getTotalsForAllCountries()
      .then(this.onStartDataLoaded)
      .catch(this.onError);
  }

  render() {
    const {
      startData,
      country,
      filter,
      switchersState,
      isError,
      isLoading,
    } = this.state;

    const error = isError ? 'error' : null;
    const loading = isLoading ? 'loading...' : null;
    const app = !(isError || isLoading)
      ? (
        <AppView
          startData={startData}
          country={country}
          filter={filter}
          switchersState={switchersState}
          onCountryItemSelected={this.onCountryItemSelected}
          onSearchChange={this.onSearchChange}
          onSwitcherChange={this.onSwitcherChange}
          onCountryTabCancel={this.onCountryTabCancel}
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
