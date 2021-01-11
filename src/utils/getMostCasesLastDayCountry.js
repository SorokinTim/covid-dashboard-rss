export default function getMostCasesLastDayCountry(countriesData) {
  const resultCountryData = countriesData.reduce((maxCountryData, currentCountryData) => {
    if (maxCountryData.todayCases > currentCountryData.todayCases) {
      return maxCountryData;
    }

    return currentCountryData;
  });

  return {
    title: 'Most Cases Last Day',
    flag: resultCountryData.countryInfo.flag,
    country: resultCountryData.country,
    value: resultCountryData.todayCases,
  };
}
