import React, { Component } from 'react';
import CovidService from './api/Covid-service';
import Date from './components/Date/Date';
import Switcher from './components/Switcher/Switcher';
import switchers from './components/switchers';
import Search from './components/Search/Search';
import List from './components/List/List';
import Map from './components/Map/Map';
import Table from './components/Table/Table';
import s from './App.module.css';

export default class App extends Component {
  covidService = new CovidService();

  constructor() {
    super();
    this.state = {
      summary: null,
    };
  }

  componentDidMount() {
    this.getSummary();
  }

  getSummary() {
    this.covidService
      .getSummary()
      .then((summary) => {
        this.setState({
          summary,
        });
      });
  }

  render() {
    const { summary } = this.state;
    const global = summary ? summary.Global : null;
    const tableData = global ? {
      confirmed: global.TotalConfirmed,
      deaths: global.TotalDeaths,
      recovered: global.TotalRecovered,
    } : null;

    return (
      <div className={s.container}>
        <div className={s['date-container']}>
          <Date />
        </div>
        <div className={s['details-container']}>
          <div className={s['details-container__switchers']}>
            <Switcher switchData={switchers.casesSwitcher} />
            <Switcher switchData={switchers.timeSwitcher} />
          </div>
          <div className={s['details-container__search']}>
            <Search />
          </div>
          <div className={s['details-container__countries-list']}>
            <List />
          </div>
        </div>
        <div className={s['map-container']}>
          <div className={s['map-container__switchers']}>
            <Switcher switchData={switchers.casesSwitcher} />
            <Switcher switchData={switchers.timeSwitcher} />
          </div>
          <div className={s['map-container__map']}>
            <Map />
          </div>
        </div>
        <div className={s['statistic-container']}>
          <div className={s['statistic-container__switchers']}>
            <Switcher switchData={switchers.casesSwitcher} />
            <Switcher switchData={switchers.timeSwitcher} />
          </div>
          <div className={s['statistic-container__table']}>
            <Table tableData={tableData} />
          </div>
        </div>
        <div className={s['chart-container']} />
        <div className={s['footer-container']} />
      </div>
    );
  }
}
