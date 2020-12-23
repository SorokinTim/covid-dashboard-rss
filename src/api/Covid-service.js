export default class CovidService {
  covidApiUrl = 'https://disease.sh/v3/covid-19';

  static async getResource(url) {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Network response from ${url} was not ok. Response status is ${response.status}`);
    }

    return response.json();
  }

  getTotalsForAllCountries() {
    return CovidService.getResource(`${this.covidApiUrl}/countries`);
  }

  getAllDaysGlobal = () => CovidService
    .getResource(`${this.covidApiUrl}/historical/all?lastdays=all`);

  getAllDaysByCountry = (country) => CovidService
    .getResource(`${this.covidApiUrl}/historical/${country}?lastdays=all`);
}
