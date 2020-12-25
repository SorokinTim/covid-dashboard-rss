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
    value: (resultCountryData.cases * 100000) / resultCountryData.population,
  };
}
