import React from 'react';
import PropTypes from 'prop-types';
import s from './List.module.css';

export default function List({ data }) {
  const countries = [...data.Countries];
  const sortedCountries = countries.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed);
  const items = [];

  sortedCountries.forEach((country) => {
    const li = (
      <li key={country.CountryCode} className={s.list__item}>
        <img className={s.list__img} src="https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2017/06/brazili-flaf.png" alt="flag" />
        <span className={s.list__country}>{country.Country}</span>
        <span className={s.list__value}>{country.TotalConfirmed}</span>
      </li>
    );

    items.push(li);
  });

  items.forEach((item) => console.log(item));

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
};
