import roundFigure from './roundFigure';
import { DECIMAL_PLACES } from '../constants';

export default function getMostCasesLastDayPer100kCountry(countriesData) {
  const resultCountryData = countriesData.reduce((maxCountryData, currentCountryData) => {
    if (maxCountryData.todayCases / maxCountryData.population
      > currentCountryData.todayCases / currentCountryData.population) {
      return maxCountryData;
    }

    return currentCountryData;
  });

  return {
    title: 'Most Cases Last Day Per 100K',
    flag: resultCountryData.countryInfo.flag,
    country: resultCountryData.country,
    value: roundFigure(((resultCountryData.todayCases * 100000)
      / resultCountryData.population), DECIMAL_PLACES),
  };
}
