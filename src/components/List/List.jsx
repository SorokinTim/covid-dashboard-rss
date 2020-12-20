/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import Search from '../Search/Search';
import TimeSwitcher from '../Switcher/TimeSwitcher';
import CasesSwitcher from '../Switcher/CasesSwitcher';
import StageSwitcher from '../Switcher/StageSwitcher';
import { getRequiredParam } from '../../utils';
import style from './List.module.css';

function splitNumberIntoSpaces(num) {
  return String(num).split('').reverse().join('')
    .match(/.{1,3}/g)
    .map((el) => String(el).split('').reverse().join(''))
    .reverse()
    .join(' ');
}

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
  onSearchChange,
  switchersState,
  onSwitcherChange,

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
      <li
        key={countryData.country}
        className={style.list__item}
        onClick={() => onCountryItemSelected(countryData.country)}
      >
        <div className={style['list__flag-container']}>
          <img
            src={countryData.countryInfo.flag}
            alt="flag"
            className={style.list__flag}
          />
        </div>
        <div className={style.list__country}>{countryData.country}</div>
        <div className={style.list__confirmed}>
          {splitNumberIntoSpaces(getRequiredParam(countryData, switchersState))}
        </div>
      </li>
    );

    countriesListItems.push(countryListItem);
  });

  return (
    <div className={style.list}>
      <div className={style.list__switcher}>
        <TimeSwitcher
          groupName="listTime"
          switchersState={switchersState}
          onSwitcherChange={onSwitcherChange}
        />
      </div>
      <div className={style.list__switcher}>
        <CasesSwitcher
          groupName="listCases"
          switchersState={switchersState}
          onSwitcherChange={onSwitcherChange}
        />
      </div>
      <Search filter={filter} onSearchChange={onSearchChange} />
      <div className={style['list__items-list']}>
        {countriesListItems}
      </div>
      <div className={style.list__switcher}>
        <StageSwitcher
          groupName="listStage"
          switchersState={switchersState}
          onSwitcherChange={onSwitcherChange}
        />
      </div>
    </div>
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
  onSearchChange: PropTypes.func.isRequired,
  switchersState: PropTypes.shape({
    partOfPopulation: PropTypes.string,
    typeOfTime: PropTypes.string,
    stageOfDisease: PropTypes.string,
  }).isRequired,
  onSwitcherChange: PropTypes.func.isRequired,
};
