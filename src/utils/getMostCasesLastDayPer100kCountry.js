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
    value: (resultCountryData.todayCases * 100000) / resultCountryData.population,
  };
}
