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
      countryCode: null,
      isLoading: true,
      isError: false,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    this.covidService
      .getStartData()
      .then(this.onDataLoaded)
      .catch(this.onError);
  }

  onDataLoaded = (data) => {
    this.setState({
      data,
      isLoading: false,
    });
  }

  onError = () => {
    this.setState({
      isError: true,
      isLoading: false,
    });
  }

  render() {
    const {
      data,
      countryCode,
      isError,
      isLoading,
    } = this.state;

    console.log('render data: ', data);
    const error = isError ? 'error' : null;
    const loading = isLoading ? 'loading...' : null;
    const table = !(isError || isLoading)
      ? <AppView data={data} countryCode={countryCode} /> : null;

    return (
      <div className={s.container}>
        {error}
        {loading}
        {table}
      </div>
    );
  }
}
