import React from 'react';
import PropTypes from 'prop-types';
import s from './Date.module.css';

function transformDate(dataString) {
  return dataString.split('T').join(' ');
}

export default function Date({ dateData }) {
  const dateString = transformDate(dateData);

  return (
    <div className={s.date}>
      <p className={s.date__text}>Last Update at</p>
      <time className={s.date__value} dateTime="2020-12-11">{dateString}</time>
    </div>
  );
}

Date.propTypes = {
  dateData: PropTypes.string.isRequired,
};
