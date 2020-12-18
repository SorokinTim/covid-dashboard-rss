import React, { Component } from 'react';
import CovidService from './api/Covid-service';
import AppView from './AppView';
import s from './App.module.css';

export default class App extends Component {
  covidService = new CovidService();

  constructor() {
    super();
    this.state = {
      startData: null,
      country: null,
      filter: '',
      isAbsoluteCases: true,
      isAllTime: true,
      isLoading: true,
      isError: false,
    };
  }

  componentDidMount() {
    this.getStartData();
  }

  onStartDataLoaded = (startData) => {
    this.setState({
      startData,
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

  onSwitcherChange = (id) => {
    switch (id) {
      case 'absoluteCases':
        this.setState({
          isAbsoluteCases: true,
        });
        break;
      case 'casesPerHundred':
        this.setState({
          isAbsoluteCases: false,
        });
        break;
      case 'allTime':
        this.setState({
          isAllTime: true,
        });
        break;
      case 'lastDay':
        this.setState({
          isAllTime: false,
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
      isAbsoluteCases,
      isAllTime,
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
          isAbsoluteCases={isAbsoluteCases}
          isAllTime={isAllTime}
          onCountryItemSelected={this.onCountryItemSelected}
          onSearchChange={this.onSearchChange}
          onSwitcherChange={this.onSwitcherChange}
        />
      ) : null;

    return (
      <div className={s.container}>
        {error}
        {loading}
        {app}
      </div>
    );
  }
}
