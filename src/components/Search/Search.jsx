import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Search.module.css';

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
  };

  render() {
    const { filter } = this.state;

    return (
      <div className={style['list__input-container']}>
        <input
          className={style.list__input}
          id="search"
          placeholder="Insert country"
          value={filter}
          onChange={this.onFilterChange}
        />
        <label htmlFor="search">
          <span className={`material-icons ${style['list__search-icon']}`}>search</span>
          <span className={`material-icons ${style['list__keyboard-icon']}`}>keyboard</span>
        </label>
      </div>
    );
  }
}

Search.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
