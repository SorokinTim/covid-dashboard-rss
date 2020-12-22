import roundFigure from './roundFigure';
import { DECIMAL_PLACES } from '../constants';

export default function getFigurePerHundredThousandPopulation(totalFigure, population) {
  const figure = (totalFigure * 100000) / population;

  return roundFigure(figure, DECIMAL_PLACES);
}
