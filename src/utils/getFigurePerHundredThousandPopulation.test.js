import getFigurePerHundredThousandPopulation from './getFigurePerHundredThousandPopulation';

test('15 per 1 million is 1.5 per 100k', () => {
  expect(getFigurePerHundredThousandPopulation(15, 1000000)).toBe(1.5);
});
