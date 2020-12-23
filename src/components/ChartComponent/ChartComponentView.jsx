/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Chart from '../Chart/Chart';
import TimeSwitcher from '../Switcher/TimeSwitcher';
import CasesSwitcher from '../Switcher/CasesSwitcher';
import StageSwitcher from '../Switcher/StageSwitcher';
import style from './ChartComponent.module.css';

export default function ChartComponentView({
  switchersState,
  onSwitcherChange,
  startData,
  chartData,
  country,
}) {
  return (
    <div className={style.chart}>
      <div className={style['chart__switcher-top']}>
        <TimeSwitcher
          groupName="chartTime"
          switchersState={switchersState}
          onSwitcherChange={onSwitcherChange}
        />
      </div>
      <div className={style['chart__switcher-top']}>
        <CasesSwitcher
          groupName="chartCases"
          switchersState={switchersState}
          onSwitcherChange={onSwitcherChange}
        />
      </div>
      <div className={style.chart__graph}>
        {/* <canvas className={style['chart__graph-item']} ref={(el) => { chartRef = el; }} /> */}
        <Chart
          startData={startData}
          chartData={chartData}
          country={country}
          switchersState={switchersState}
        />
      </div>
      <div className={style['chart__switcher-bottom']}>
        <StageSwitcher
          groupName="chartStage"
          switchersState={switchersState}
          onSwitcherChange={onSwitcherChange}
        />
      </div>
    </div>
  );
}

ChartComponentView.defaultProps = {
  country: null,
};

ChartComponentView.propTypes = {
  startData: PropTypes.arrayOf(
    PropTypes.shape({
      population: PropTypes.number,
    }),
  ).isRequired,
  switchersState: PropTypes.shape({
    partOfPopulation: PropTypes.string,
    typeOfTime: PropTypes.string,
    stageOfDisease: PropTypes.string,
  }).isRequired,
  chartData: PropTypes.shape({
    cases: PropTypes.object,
    deaths: PropTypes.object,
    recovered: PropTypes.object,
  }).isRequired,
  onSwitcherChange: PropTypes.func.isRequired,
  country: PropTypes.string,
};
