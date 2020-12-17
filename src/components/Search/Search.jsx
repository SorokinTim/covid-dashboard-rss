import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Search.module.css';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      filter: '',
    };
  }

  componentDidUpdate() {
    this.onComponentUpdate();
  }

  onComponentUpdate() {
    const { filter: stateFilter } = this.state;
    const { filter: propsFilter } = this.props;

    if (stateFilter !== propsFilter) {
      this.setState({
        filter: propsFilter,
      });
    }
  }

  onFilterChange = (e) => {
    const filter = e.target.value;
    const { onSearchChange } = this.props;

    this.setState({
      filter,
    });

    onSearchChange(filter);
  }

  render() {
    const { filter } = this.state;

    return (
      <input
        className={s.search}
        placeholder="Find a country"
        value={filter}
        onChange={this.onFilterChange}
      />
    );
  }
}

Search.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
