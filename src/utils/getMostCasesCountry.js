export default function getMostCasesCountry(countriesData) {
  const resultCountryData = countriesData.reduce((maxCountryData, currentCountryData) => {
    if (maxCountryData.cases > currentCountryData.cases) {
      return maxCountryData;
    }

    return currentCountryData;
  });

  return {
    title: 'Most Cases',
    flag: resultCountryData.countryInfo.flag,
    country: resultCountryData.country,
    value: resultCountryData.cases,
  };
}
