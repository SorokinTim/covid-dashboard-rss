import React from 'react';
import Chart from '../Chart/Chart';
import style from './ChartComponent.module.css';
import TimeSwitcher from '../Switcher/TimeSwitcher';
import CasesSwitcher from '../Switcher/CasesSwitcher';
import StageSwitcher from '../Switcher/StageSwitcher';

export default function ChartComponent({ switchersState, onSwitcherChange }) {
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
        <Chart />
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
