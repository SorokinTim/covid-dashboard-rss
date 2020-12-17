import React from 'react';
import PropTypes from 'prop-types';
import s from './Date.module.css';

function padZero(timeUnit) {
  return timeUnit < 10 ? `0${timeUnit}` : timeUnit;
}

function transformDateInMillisecondsToDateString(milliseconds) {
  const dateObject = new Date(milliseconds);
  const year = dateObject.getFullYear();
  const month = dateObject.getMonth();
  const date = dateObject.getDate();

  return `${padZero(month + 1)}/${padZero(date)}/${year}`;
}

function transformDateInMillisecondsToTimeString(milliseconds) {
  const dateObject = new Date(milliseconds);
  const hours = dateObject.getHours();
  const minutes = dateObject.getMinutes();

  return `${padZero(hours)}:${(padZero(minutes))}`;
}

export default function Time({ startData }) {
  const mostRecentUpdateTime = startData
    .reduce((max, currentCountryData) => Math.max(max, currentCountryData.updated), 0);
  const dateString = transformDateInMillisecondsToDateString(mostRecentUpdateTime);
  const timeString = transformDateInMillisecondsToTimeString(mostRecentUpdateTime);

  return (
    <div className={s.date}>
      <p className={s.date__text}>Last Update at</p>
      <time
        className={s.date__value}
        dateTime={`${dateString} ${timeString}`}
      >
        {`${dateString} ${timeString}`}
      </time>
    </div>
  );
}

Time.propTypes = {
  startData: PropTypes.string.isRequired,
};
