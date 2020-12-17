const switchers = {
  timeSwitcher: [
    {
      id: 'all',
      label: 'All time',
      default: true,
    },
    {
      id: 'last',
      label: 'Last Day',
      default: false,
    },
  ],
  casesSwitcher: [
    {
      id: 'absolute',
      label: 'Absolute cases',
      default: true,
    },
    {
      id: 'perHundred',
      label: 'Cases per 100,000 population',
      default: false,
    },
  ],
};

export default switchers;
