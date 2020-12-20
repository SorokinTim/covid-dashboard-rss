import React, { Component, Fragment } from 'react';
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
      isLoading: true,
      isError: false,
      filter: '',
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
      isError,
      isLoading,
    } = this.state;

    const error = isError ? 'error' : null;
    const loading = isLoading ? 'loading...' : null;
    const app = !(isError || isLoading)
      ? (
        <AppView
          startData={startData}
          filter={filter}
          country={country}
          onCountryItemSelected={this.onCountryItemSelected}
          onSearchChange={this.onSearchChange}
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
