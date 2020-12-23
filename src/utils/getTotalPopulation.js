export default function getTotalPopulation(countriesData) {
  return countriesData
    .reduce((population, currentCountryData) => population + currentCountryData.population, 0);
}
