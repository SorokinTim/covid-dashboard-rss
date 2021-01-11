import { SWITCHERS_PARAMS, LEGEND_MARKS_SIZES, LEGEND } from '../constants';

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
      if (value > LEGEND.allAbsoluteConfirmed.xl.minValue) return LEGEND_MARKS_SIZES.xl;
      if (value > LEGEND.allAbsoluteConfirmed.l.minValue) return LEGEND_MARKS_SIZES.l;
      if (value > LEGEND.allAbsoluteConfirmed.m.minValue) return LEGEND_MARKS_SIZES.m;
      return LEGEND_MARKS_SIZES.s;
    }
    if (isAbsoluteCases && isLastDay) {
      if (value > LEGEND.lastAbsoluteConfirmed.xl.minValue) return LEGEND_MARKS_SIZES.xl;
      if (value > LEGEND.lastAbsoluteConfirmed.l.minValue) return LEGEND_MARKS_SIZES.l;
      if (value > LEGEND.lastAbsoluteConfirmed.m.minValue) return LEGEND_MARKS_SIZES.m;
      return LEGEND_MARKS_SIZES.s;
    }
    if (isCasesPerHundred && isAllTime) {
      if (value > LEGEND.allPer100kConfirmed.xl.minValue) return LEGEND_MARKS_SIZES.xl;
      if (value > LEGEND.allPer100kConfirmed.l.minValue) return LEGEND_MARKS_SIZES.l;
      if (value > LEGEND.allPer100kConfirmed.m.minValue) return LEGEND_MARKS_SIZES.m;
      return LEGEND_MARKS_SIZES.s;
    }
    if (isCasesPerHundred && isLastDay) {
      if (value > LEGEND.lastPer100kConfirmed.xl.minValue) return LEGEND_MARKS_SIZES.xl;
      if (value > LEGEND.lastPer100kConfirmed.l.minValue) return LEGEND_MARKS_SIZES.l;
      if (value > LEGEND.lastPer100kConfirmed.m.minValue) return LEGEND_MARKS_SIZES.m;
      return LEGEND_MARKS_SIZES.s;
    }
  }

  if (isDeaths) {
    if (isAbsoluteCases && isAllTime) {
      if (value > LEGEND.allAbsoluteDeaths.xl.minValue) return LEGEND_MARKS_SIZES.xl;
      if (value > LEGEND.allAbsoluteDeaths.l.minValue) return LEGEND_MARKS_SIZES.l;
      if (value > LEGEND.allAbsoluteDeaths.m.minValue) return LEGEND_MARKS_SIZES.m;
      return LEGEND_MARKS_SIZES.s;
    }
    if (isAbsoluteCases && isLastDay) {
      if (value > LEGEND.lastAbsoluteDeaths.xl.minValue) return LEGEND_MARKS_SIZES.xl;
      if (value > LEGEND.lastAbsoluteDeaths.l.minValue) return LEGEND_MARKS_SIZES.l;
      if (value > LEGEND.lastAbsoluteDeaths.m.minValue) return LEGEND_MARKS_SIZES.m;
      return LEGEND_MARKS_SIZES.s;
    }
    if (isCasesPerHundred && isAllTime) {
      if (value > LEGEND.allPer100kDeaths.xl.minValue) return LEGEND_MARKS_SIZES.xl;
      if (value > LEGEND.allPer100kDeaths.l.minValue) return LEGEND_MARKS_SIZES.l;
      if (value > LEGEND.allPer100kDeaths.m.minValue) return LEGEND_MARKS_SIZES.m;
      return LEGEND_MARKS_SIZES.s;
    }
    if (isCasesPerHundred && isLastDay) {
      if (value > LEGEND.lastPer100kDeaths.xl.minValue) return LEGEND_MARKS_SIZES.xl;
      if (value > LEGEND.lastPer100kDeaths.l.minValue) return LEGEND_MARKS_SIZES.l;
      if (value > LEGEND.lastPer100kDeaths.m.minValue) return LEGEND_MARKS_SIZES.m;
      return LEGEND_MARKS_SIZES.s;
    }
  }

  return undefined;
}
