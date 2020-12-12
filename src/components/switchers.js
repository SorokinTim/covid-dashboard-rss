const switchers = {
  timeSwitcher: [
    {
      id: 'all',
      label: 'All time',
      name: 'time',
      default: true,
    },
    {
      id: 'last',
      label: 'Last Day',
      name: 'time',
      default: false,
    },
  ],
  casesSwitcher: [
    {
      id: 'absolute',
      label: 'Absolute cases',
      name: 'cases',
      default: true,
    },
    {
      id: 'perHundred',
      label: 'Cases per 100,000 population',
      name: 'cases',
      default: false,
    },
  ],
};

export default switchers;
