export default class CovidService {
  covid19apiUrl = 'https://api.covid19api.com';

  flagsAndPopulationUrl = 'https://restcountries.eu/rest/v2/all?fields=name;alpha2Code;population;flag';

  static async getResource(url) {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Network response from ${url} was not ok. Response status is ${response.status}`);
    }

    return response.json();
  }

  async getStartData() {
    const summary = await CovidService.getResource(`${this.covid19apiUrl}/summary`);
    return summary;
  }

  async getFlagAndPopulationInfo() {
    const info = await CovidService.getResource(this.flagsAndPopulationUrl);
    return info;
  }
}
