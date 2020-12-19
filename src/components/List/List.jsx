import React from 'react';
import PropTypes from 'prop-types';
import { getRequiredParam } from '../../utils';
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
  switchersState,
  filter,
  onCountryItemSelected,
}) {
  const filteredCountriesData = filterCountriesData(startData, filter);

  const sortedCountriesData = filteredCountriesData
    .sort((countryXData, countryYData) => {
      const countryXDataParam = getRequiredParam(countryXData, switchersState);
      const countryYDataParam = getRequiredParam(countryYData, switchersState);

      return countryYDataParam - countryXDataParam;
    });

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
          <span className={s.list__value}>
            {getRequiredParam(countryData, switchersState)}
          </span>
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
  switchersState: PropTypes.shape({
    partOfPopulation: PropTypes.string,
    typeOfTime: PropTypes.string,
    stageOfDisease: PropTypes.string,
  }).isRequired,
  filter: PropTypes.string.isRequired,
  onCountryItemSelected: PropTypes.func.isRequired,
};
