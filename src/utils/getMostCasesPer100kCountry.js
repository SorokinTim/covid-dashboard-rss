import roundFigure from './roundFigure';
import { DECIMAL_PLACES } from '../constants';

export default function getMostCasesPer100kCountry(countriesData) {
  const resultCountryData = countriesData.reduce((maxCountryData, currentCountryData) => {
    if (maxCountryData.casesPerOneMillion > currentCountryData.casesPerOneMillion) {
      return maxCountryData;
    }

    return currentCountryData;
  });

  return {
    title: 'Most Cases Per 100K',
    flag: resultCountryData.countryInfo.flag,
    country: resultCountryData.country,
    value: roundFigure(((resultCountryData.cases * 100000)
      / resultCountryData.population), DECIMAL_PLACES),
  };
}
