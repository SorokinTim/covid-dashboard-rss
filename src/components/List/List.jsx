import React from 'react';
import PropTypes from 'prop-types';
import s from './List.module.css';

function filterCountriesData(countriesData, filter) {
  if (filter === '') {
    return countriesData;
  }

  return countriesData.filter((countryData) => {
    const countryNameInLowerCase = countryData.country.toLowerCase();
    const filterInLowerCase = filter.toLowerCase();

    return countryNameInLowerCase.includes(filterInLowerCase);
  });
}
export default function List({
  startData,
  filter,
  onCountryItemSelected,
}) {
  const filteredCountriesData = filterCountriesData(startData, filter);
  const sortedCountriesData = filteredCountriesData
    .sort((countryXData, countryYData) => countryYData.cases - countryXData.cases);
  const countriesListItems = [];

  sortedCountriesData.forEach((countryData) => {
    const countryListItem = (
      <li key={countryData.country} className={s.list__item}>
        <button
          type="button"
          onClick={() => onCountryItemSelected(countryData.country)}
        >
          <img className={s.list__img} src={countryData.countryInfo.flag} alt="flag" />
          <span className={s.list__country}>{countryData.country}</span>
          <span className={s.list__value}>{countryData.cases}</span>
        </button>
      </li>
    );

    countriesListItems.push(countryListItem);
  });

  return (
    <ul className={s.list}>
      {countriesListItems}
    </ul>
  );
}

List.propTypes = {
  startData: PropTypes.arrayOf(
    PropTypes.shape({
      country: PropTypes.string,
      cases: PropTypes.number,
      countryInfo: PropTypes.shape({
        flag: PropTypes.string,
      }),
    }),
  ).isRequired,
  filter: PropTypes.string.isRequired,
  onCountryItemSelected: PropTypes.func.isRequired,
};
