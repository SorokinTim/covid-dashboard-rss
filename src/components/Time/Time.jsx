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

  const month = getMonthName(lastUpdateDate.getMonth());
  const date = lastUpdateDate.getDate();
  const time = `${padZero(lastUpdateDate.getHours())}:${padZero(lastUpdateDate.getMinutes())}`;

  return (
    <div className={style.header__date}>
      <span title="Last update time">
        {`Updated at ${month}, ${date} ${time}`}
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
