import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Table.module.css';

export default class Table extends Component {
  constructor() {
    super();
    this.state = {
      confirmed: null,
      deaths: null,
      recovered: null,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { tableData } = this.props;

    if (tableData.confirmed !== prevState.confirmed) {
      this.onComponentUpdate();
    }
  }

  onComponentUpdate() {
    const { tableData } = this.props;

    this.setState({
      confirmed: tableData.confirmed,
      deaths: tableData.deaths,
      recovered: tableData.recovered,
    });
  }

  render() {
    const { confirmed, deaths, recovered } = this.state;

    return (
      <table className={s.table}>
        <thead className={s.table__head}>
          <tr className={s.table__row}>
            <th className={s['table__head-cell']}>Confirmed</th>
            <th className={s['table__head-cell']}>Deaths</th>
            <th className={s['table__head-cell']}>Recovered</th>
          </tr>
        </thead>
        <tbody>
          <tr className={s.table__row}>
            <td className={s.table__cell}>{confirmed}</td>
            <td className={s.table__cell}>{deaths}</td>
            <td className={s.table__cell}>{recovered}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

Table.defaultProps = {
  tableData: null,
};

Table.propTypes = {
  tableData: PropTypes.shape({
    confirmed: PropTypes.number,
    deaths: PropTypes.number,
    recovered: PropTypes.number,
  }),
};
