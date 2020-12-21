import roundFigure from './roundFigure';

test('adds 1 + 2 to equal 3', () => {
  expect(roundFigure(1.21, 1)).toBe(1.2);
});

test('adds 1 + 2 to equal 3', () => {
  expect(roundFigure(1.99, 1)).toBe(2);
});
