import { SWITCHERS_PARAMS, LEGEND } from '../constants';

export default function getLegendData(switchersState) {
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

  if (isConfirmed) {
    if (isAbsoluteCases && isAllTime) {
      return LEGEND.allAbsoluteConfirmed;
    }
    if (isAbsoluteCases && isLastDay) {
      return LEGEND.lastAbsoluteConfirmed;
    }
    if (isCasesPerHundred && isAllTime) {
      return LEGEND.allPer100kConfirmed;
    }
    if (isCasesPerHundred && isLastDay) {
      return LEGEND.lastPer100kConfirmed;
    }
  }

  if (isDeaths) {
    if (isAbsoluteCases && isAllTime) {
      return LEGEND.allAbsoluteDeaths;
    }
    if (isAbsoluteCases && isLastDay) {
      return LEGEND.lastAbsoluteDeaths;
    }
    if (isCasesPerHundred && isAllTime) {
      return LEGEND.allPer100kDeaths;
    }
    if (isCasesPerHundred && isLastDay) {
      return LEGEND.lastPer100kDeaths;
    }
  }

  if (isRecovered) {
    if (isAbsoluteCases && isAllTime) {
      return LEGEND.allAbsoluteRecovered;
    }
    if (isAbsoluteCases && isLastDay) {
      return LEGEND.lastAbsoluteRecovered;
    }
    if (isCasesPerHundred && isAllTime) {
      return LEGEND.allPer100kRecovered;
    }
    if (isCasesPerHundred && isLastDay) {
      return LEGEND.lastPer100kRecovered;
    }
  }

  return undefined;
}
