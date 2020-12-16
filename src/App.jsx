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
    console.log('code this.state:', this.state);
    console.log('code:', code);
    this.setState({
      countryCode: code,
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
      isError,
      isLoading,
    } = this.state;

    console.log('render data: ', data);
    console.log('render info: ', info);
    const error = isError ? 'error' : null;
    const loading = isLoading ? 'loading...' : null;
    const table = !(isError || isLoading)
      ? (
        <AppView
          data={data}
          info={info}
          countryCode={countryCode}
          onItemSelected={this.onItemSelected}
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
