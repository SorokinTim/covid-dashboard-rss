import React from 'react';
import PropTypes from 'prop-types';
import s from './List.module.css';

export default function List({ data, info }) {
  const countries = [...data.Countries];
  const sortedCountries = countries.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed);
  const items = [];

  sortedCountries.forEach((country) => {
    // eslint-disable-next-line react/prop-types
    const countryInfo = info.find((item) => item.alpha2Code === country.CountryCode);

    const li = (
      <li key={country.CountryCode} className={s.list__item}>
        <img className={s.list__img} src={countryInfo.flag} alt="flag" />
        <span className={s.list__country}>{country.Country}</span>
        <span className={s.list__value}>{country.TotalConfirmed}</span>
      </li>
    );

    items.push(li);
  });

  return (
    <ul className={s.list}>
      {items}
    </ul>
  );
}

List.propTypes = {
  data: PropTypes.shape({
    confirmed: PropTypes.number,
    deaths: PropTypes.number,
    recovered: PropTypes.number,
    message: PropTypes.string,
    Countries: PropTypes.string,
  }).isRequired,
  info: PropTypes.shape({
    confirmed: PropTypes.number,
    deaths: PropTypes.number,
    recovered: PropTypes.number,
    message: PropTypes.string,
  }).isRequired,
};
