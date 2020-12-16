import React, { Component } from 'react';
import CovidService from './api/Covid-service';
import AppView from './AppView';
import s from './App.module.css';

export default class App extends Component {
  covidService = new CovidService();

  constructor() {
    super();
    this.state = {
      data: null,
      info: null,
      countryCode: null,
      isLoading: true,
      isError: false,
      filter: '',
    };
  }

  componentDidMount() {
    this.getData();
  }

  onDataLoaded = (data) => {
    this.setState({
      data,
    });
    this.covidService
      .getFlagAndPopulationInfo()
      .then(this.onFlagAndPopulationInfo)
      .catch(this.onError);
  }

  onFlagAndPopulationInfo = (info) => {
    this.setState({
      info,
      isLoading: false,
    });
  }

  onError = () => {
    this.setState({
      isError: true,
      isLoading: false,
    });
  }

  onItemSelected = (code) => {
    this.setState({
      countryCode: code,
      filter: '',
    });
  }

  onSearchChange = (filter) => {
    this.setState({
      filter,
    });
  }

  getData() {
    this.covidService
      .getStartData()
      .then(this.onDataLoaded)
      .catch(this.onError);
  }

  render() {
    const {
      data,
      info,
      countryCode,
      filter,
      isError,
      isLoading,
    } = this.state;

    const error = isError ? 'error' : null;
    const loading = isLoading ? 'loading...' : null;
    const table = !(isError || isLoading)
      ? (
        <AppView
          data={data}
          info={info}
          filter={filter}
          countryCode={countryCode}
          onItemSelected={this.onItemSelected}
          onSearchChange={this.onSearchChange}
        />
      ) : null;

    return (
      <div className={s.container}>
        {error}
        {loading}
        {table}
      </div>
    );
  }
}
