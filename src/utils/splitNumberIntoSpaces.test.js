import splitNumberIntoSpaces from './splitNumberIntoSpaces';

test('12333 is splitted to 12,333', () => {
  expect(splitNumberIntoSpaces(12333)).toBe('12,333');
});

test('434 is splitted to 434', () => {
  expect(splitNumberIntoSpaces(434)).toBe('434');
});

test('43444.25 is splitted to 434', () => {
  expect(splitNumberIntoSpaces(43444.25)).toBe('43,444.25');
});
