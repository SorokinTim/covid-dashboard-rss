import roundFigure from './roundFigure';
import { DECIMAL_PLACES, PART_OF_POPULATION } from '../constants';

export default function getFigurePerPartOfPopulation(totalFigure, population) {
  const figure = (totalFigure * PART_OF_POPULATION) / population;

  return roundFigure(figure, DECIMAL_PLACES);
}
