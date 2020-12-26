const CONFIRMED_INDEX = 0;
const DEATHS_INDEX = 1;
const RECOVERED_INDEX = 2;
const DECIMAL_RADIX = 10;
const DECIMAL_PLACES = 1;
const CONFIRMED_STAT_TITLE = 'cases';
const DEATH_STAT_TITLE = 'deaths';
const RECOVERED_STAT_TITLE = 'recovered';
const TODAY_CONFIRMED_STAT_TITLE = 'todayCases';
const TODAY_DEATH_STAT_TITLE = 'todayDeaths';
const TODAY_RECOVERED_STAT_TITLE = 'todayRecovered';
const SWITCHERS_PARAMS = {
  PART_OF_POPULATION: {
    ABSOLUTE_CASES: 'absoluteCases',
    CASES_PER_HUNDRED: 'casesPerHundred',
  },
  TYPE_OF_TIME: {
    ALL_TIME: 'allTime',
    LAST_DAY: 'lastDay',
  },
  STAGE_OF_DISEASE: {
    CONFIRMED: 'confirmed',
    DEATHS: 'deaths',
    RECOVERED: 'recovered',
  },
};

const LEGEND_MARKS_SIZES = {
  xl: 25,
  l: 10,
  m: 5,
  s: 3,
};

const LEGEND = {
  allAbsoluteConfirmed: {
    xl: {
      string: '>5,000,000',
      size: LEGEND_MARKS_SIZES.xl,
    },
    l: {
      string: '>100,000 - 5,000,000',
      size: LEGEND_MARKS_SIZES.l,
    },
    m: {
      string: '>5,000 - 100,000',
      size: LEGEND_MARKS_SIZES.m,
    },
    s: {
      string: '1 - 5,000',
      size: LEGEND_MARKS_SIZES.s,
    },
  },
  allAbsoluteDeaths: {
    xl: {
      string: '>100,000',
      size: LEGEND_MARKS_SIZES.xl,
    },
    l: {
      string: '>5,000 - 100,000',
      size: LEGEND_MARKS_SIZES.l,
    },
    m: {
      string: '>500 - 5,000',
      size: LEGEND_MARKS_SIZES.m,
    },
    s: {
      string: '1 - 500',
      size: LEGEND_MARKS_SIZES.s,
    },
  },
  allAbsoluteRecovered: {
    xl: {
      string: '>5,000,000',
      size: LEGEND_MARKS_SIZES.xl,
    },
    l: {
      string: '>100,000 - 5,000,000',
      size: LEGEND_MARKS_SIZES.l,
    },
    m: {
      string: '>5,000 - 100,000',
      size: LEGEND_MARKS_SIZES.m,
    },
    s: {
      string: '1 - 5,000',
      size: LEGEND_MARKS_SIZES.s,
    },
  },
  allPer100kConfirmed: {
    xl: {
      string: '>6,000',
      size: LEGEND_MARKS_SIZES.xl,
    },
    l: {
      string: '>2,000 - 6,000',
      size: LEGEND_MARKS_SIZES.l,
    },
    m: {
      string: '>500 - 2,000',
      size: LEGEND_MARKS_SIZES.m,
    },
    s: {
      string: '1 - 500',
      size: LEGEND_MARKS_SIZES.s,
    },
  },
  allPer100kDeaths: {
    xl: {
      string: '>100',
      size: LEGEND_MARKS_SIZES.xl,
    },
    l: {
      string: '>30 - 100',
      size: LEGEND_MARKS_SIZES.l,
    },
    m: {
      string: '>5 - 30',
      size: LEGEND_MARKS_SIZES.m,
    },
    s: {
      string: '1 - 5',
      size: LEGEND_MARKS_SIZES.s,
    },
  },
  allPer100kRecovered: {
    xl: {
      string: '>6,000',
      size: LEGEND_MARKS_SIZES.xl,
    },
    l: {
      string: '>2,000 - 6,000',
      size: LEGEND_MARKS_SIZES.l,
    },
    m: {
      string: '>500 - 2,000',
      size: LEGEND_MARKS_SIZES.m,
    },
    s: {
      string: '1 - 500',
      size: LEGEND_MARKS_SIZES.s,
    },
  },
  lastAbsoluteConfirmed: {
    xl: {
      string: '>15,000',
      size: LEGEND_MARKS_SIZES.xl,
    },
    l: {
      string: '>1,000 - 15,000',
      size: LEGEND_MARKS_SIZES.l,
    },
    m: {
      string: '>50 - 1,000',
      size: LEGEND_MARKS_SIZES.m,
    },
    s: {
      string: '1 - 50',
      size: LEGEND_MARKS_SIZES.s,
    },
  },
  lastAbsoluteDeaths: {
    xl: {
      string: '>500',
      size: LEGEND_MARKS_SIZES.xl,
    },
    l: {
      string: '>50 - 500',
      size: LEGEND_MARKS_SIZES.l,
    },
    m: {
      string: '>5 - 50',
      size: LEGEND_MARKS_SIZES.m,
    },
    s: {
      string: '1 - 5',
      size: LEGEND_MARKS_SIZES.s,
    },
  },
  lastAbsoluteRecovered: {
    xl: {
      string: '>15,000',
      size: LEGEND_MARKS_SIZES.xl,
    },
    l: {
      string: '>1,000 - 15,000',
      size: LEGEND_MARKS_SIZES.l,
    },
    m: {
      string: '>50 - 1,000',
      size: LEGEND_MARKS_SIZES.m,
    },
    s: {
      string: '1 - 50',
      size: LEGEND_MARKS_SIZES.s,
    },
  },
  lastPer100kConfirmed: {
    xl: {
      string: '>100',
      size: LEGEND_MARKS_SIZES.xl,
    },
    l: {
      string: '>30 - 100',
      size: LEGEND_MARKS_SIZES.l,
    },
    m: {
      string: '>3 - 30',
      size: LEGEND_MARKS_SIZES.m,
    },
    s: {
      string: '1 - 3',
      size: LEGEND_MARKS_SIZES.s,
    },
  },
  lastPer100kDeaths: {
    xl: {
      string: '>1.5',
      size: LEGEND_MARKS_SIZES.xl,
    },
    l: {
      string: '>1 - 1.5',
      size: LEGEND_MARKS_SIZES.l,
    },
    m: {
      string: '>0.5 - 1',
      size: LEGEND_MARKS_SIZES.m,
    },
    s: {
      string: '0.1 - 0.3',
      size: LEGEND_MARKS_SIZES.s,
    },
  },
  lastPer100kRecovered: {
    xl: {
      string: '>100',
      size: LEGEND_MARKS_SIZES.xl,
    },
    l: {
      string: '>30 - 100',
      size: LEGEND_MARKS_SIZES.l,
    },
    m: {
      string: '>3 - 30',
      size: LEGEND_MARKS_SIZES.m,
    },
    s: {
      string: '1 - 3',
      size: LEGEND_MARKS_SIZES.s,
    },
  },
};

export {
  CONFIRMED_INDEX,
  DEATHS_INDEX,
  RECOVERED_INDEX,
  DECIMAL_RADIX,
  DECIMAL_PLACES,
  CONFIRMED_STAT_TITLE,
  DEATH_STAT_TITLE,
  RECOVERED_STAT_TITLE,
  TODAY_CONFIRMED_STAT_TITLE,
  TODAY_DEATH_STAT_TITLE,
  TODAY_RECOVERED_STAT_TITLE,
  SWITCHERS_PARAMS,
  LEGEND_MARKS_SIZES,
  LEGEND,
};
