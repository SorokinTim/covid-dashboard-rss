import {
  DECIMAL_RADIX,
} from '../constants';

export default function roundFigure(figure, decimalPlaces) {
  return Math.round(figure * decimalPlaces * DECIMAL_RADIX) / (decimalPlaces * DECIMAL_RADIX);
}
