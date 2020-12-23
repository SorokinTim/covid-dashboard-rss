import roundFigure from './roundFigure';

test('round 1.21 to to first decimal place is equal 1.2', () => {
  expect(roundFigure(1.21, 1)).toBe(1.2);
});

test('round 1.21 to to second decimal place is equal 1.2', () => {
  expect(roundFigure(1.256, 2)).toBe(1.26);
});
