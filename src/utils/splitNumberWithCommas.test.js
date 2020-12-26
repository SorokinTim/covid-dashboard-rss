import splitNumberWithCommas from './splitNumberWithCommas';

test('12333 is splitted to 12,333', () => {
  expect(splitNumberWithCommas(12333)).toBe('12,333');
});

test('434 is splitted to 434', () => {
  expect(splitNumberWithCommas(434)).toBe('434');
});

test('43444.25 is splitted to 434', () => {
  expect(splitNumberWithCommas(43444.25)).toBe('43,444.25');
});
