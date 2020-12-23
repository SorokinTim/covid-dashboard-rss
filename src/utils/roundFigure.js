import {
  DECIMAL_RADIX,
} from '../constants';

export default function roundFigure(figure, decimalPlaces) {
  const multiplier = DECIMAL_RADIX ** decimalPlaces;

  return Math.round(figure * multiplier) / multiplier;
}
// function from  https://stackoverflow.com/questions/2221167/javascript-formatting-a-rounded-number-to-n-decimals
