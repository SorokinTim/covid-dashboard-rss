import { SWITCHERS_PARAMS, LEGEND_MARKS_SIZES } from '../constants';

export default function getMarkSize(value, switchersState) {
  const { ABSOLUTE_CASES } = SWITCHERS_PARAMS.PART_OF_POPULATION;
  const { CASES_PER_HUNDRED } = SWITCHERS_PARAMS.PART_OF_POPULATION;
  const { ALL_TIME } = SWITCHERS_PARAMS.TYPE_OF_TIME;
  const { LAST_DAY } = SWITCHERS_PARAMS.TYPE_OF_TIME;
  const { CONFIRMED } = SWITCHERS_PARAMS.STAGE_OF_DISEASE;
  const { DEATHS } = SWITCHERS_PARAMS.STAGE_OF_DISEASE;
  const { RECOVERED } = SWITCHERS_PARAMS.STAGE_OF_DISEASE;

  const { partOfPopulation, typeOfTime, stageOfDisease } = switchersState;

  const isAbsoluteCases = partOfPopulation === ABSOLUTE_CASES;
  const isCasesPerHundred = partOfPopulation === CASES_PER_HUNDRED;
  const isAllTime = typeOfTime === ALL_TIME;
  const isLastDay = typeOfTime === LAST_DAY;
  const isConfirmed = stageOfDisease === CONFIRMED;
  const isDeaths = stageOfDisease === DEATHS;
  const isRecovered = stageOfDisease === RECOVERED;

  if (isConfirmed || isRecovered) {
    if (isAbsoluteCases && isAllTime) {
      if (value > 5000000) return LEGEND_MARKS_SIZES.xl;
      if (value > 100000) return LEGEND_MARKS_SIZES.l;
      if (value > 5000) return LEGEND_MARKS_SIZES.m;
      return LEGEND_MARKS_SIZES.s;
    }
    if (isAbsoluteCases && isLastDay) {
      if (value > 15000) return LEGEND_MARKS_SIZES.xl;
      if (value > 1000) return LEGEND_MARKS_SIZES.l;
      if (value > 50) return LEGEND_MARKS_SIZES.m;
      return LEGEND_MARKS_SIZES.s;
    }
    if (isCasesPerHundred && isAllTime) {
      if (value > 6000) return LEGEND_MARKS_SIZES.xl;
      if (value > 2000) return LEGEND_MARKS_SIZES.l;
      if (value > 500) return LEGEND_MARKS_SIZES.m;
      return LEGEND_MARKS_SIZES.s;
    }
    if (isCasesPerHundred && isLastDay) {
      if (value > 100) return LEGEND_MARKS_SIZES.xl;
      if (value > 30) return LEGEND_MARKS_SIZES.l;
      if (value > 3) return LEGEND_MARKS_SIZES.m;
      return LEGEND_MARKS_SIZES.s;
    }
  }

  if (isDeaths) {
    if (isAbsoluteCases && isAllTime) {
      if (value > 100000) return LEGEND_MARKS_SIZES.xl;
      if (value > 5000) return LEGEND_MARKS_SIZES.l;
      if (value > 500) return LEGEND_MARKS_SIZES.m;
      return LEGEND_MARKS_SIZES.s;
    }
    if (isAbsoluteCases && isLastDay) {
      if (value > 500) return LEGEND_MARKS_SIZES.xl;
      if (value > 50) return LEGEND_MARKS_SIZES.l;
      if (value > 5) return LEGEND_MARKS_SIZES.m;
      return LEGEND_MARKS_SIZES.s;
    }
    if (isCasesPerHundred && isAllTime) {
      if (value > 100) return LEGEND_MARKS_SIZES.xl;
      if (value > 30) return LEGEND_MARKS_SIZES.l;
      if (value > 5) return LEGEND_MARKS_SIZES.m;
      return LEGEND_MARKS_SIZES.s;
    }
    if (isCasesPerHundred && isLastDay) {
      if (value > 1.5) return LEGEND_MARKS_SIZES.xl;
      if (value > 1) return LEGEND_MARKS_SIZES.l;
      if (value > 0.5) return LEGEND_MARKS_SIZES.m;
      return LEGEND_MARKS_SIZES.s;
    }
  }

  return undefined;
}
