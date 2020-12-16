export default class CovidService {
  covid19apiUrl = 'https://api.covid19api.com';

  static async getResource(url) {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Network response from ${url} was not ok. Response status is ${response.status}`);
    }

    return response.json();
  }

  async getStartData() {
    const summary = await CovidService.getResource(`${this.covid19apiUrl}/summary`);
    console.log('getStartData summary:', summary);
    return summary;
  }
}
