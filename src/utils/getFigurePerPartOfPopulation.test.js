import getFigurePerPartOfPopulation from './getFigurePerPartOfPopulation';

test('15 people per 1 million population is 1.5 people per 100k population', () => {
  expect(getFigurePerPartOfPopulation(15, 1000000)).toBe(1.5);
});
