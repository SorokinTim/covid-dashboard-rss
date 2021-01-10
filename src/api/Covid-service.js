export default class CovidService {
  COVID_API_URL = 'https://disease.sh/v3/covid-19';

  static async getResource(url) {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Network response from ${url} was not ok. Response status is ${response.status}`);
    }

    return response.json();
  }

  getTotalsForAllCountries() {
    return CovidService.getResource(`${this.COVID_API_URL}/countries`);
  }

  getAllDaysGlobal = () => CovidService
    .getResource(`${this.covidApiUrl}/historical/all?lastdays=all`);

  getAllDaysByCountry = (country) => CovidService
    .getResource(`${this.COVID_API_URL}/historical/${country}?lastdays=all`);
}
