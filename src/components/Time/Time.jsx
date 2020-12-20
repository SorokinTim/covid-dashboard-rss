import React from 'react';
import PropTypes from 'prop-types';
import style from './Time.module.css';

function getMonthName(month) {
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  return monthNames[month];
}

function padZero(timeUnit) {
  return timeUnit < 10 ? `0${timeUnit}` : timeUnit;
}

export default function Time({ startData }) {
  const mostRecentUpdateTime = startData
    .reduce((max, currentCountryData) => Math.max(max, currentCountryData.updated), 0);
  const lastUpdateDate = new Date(mostRecentUpdateTime);

  return (
    <div className={style.header__date}>
      <span className={style['header__date-number']} title="Last Update Time">
        {lastUpdateDate.getDate()}
      </span>
      <span className={style['header__date-month']} title="Last Update Time">
        {getMonthName(lastUpdateDate.getMonth())}
        <span className={style['header__date-comma']}>,</span>
      </span>
      <span className={style['header__date-time']} title="Last Update Time">
        {`${padZero(lastUpdateDate.getHours())}:${padZero(lastUpdateDate.getMinutes())}`}
      </span>
    </div>
  );
}

Time.propTypes = {
  startData: PropTypes.arrayOf(
    PropTypes.shape({
      updated: PropTypes.number,
    }),
  ).isRequired,
};