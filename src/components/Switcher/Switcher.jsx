import React from 'react';
import PropTypes from 'prop-types';
import s from './Switcher.module.css';

export default function Switcher({ switchData }) {
  const items = switchData.map((item) => (
    <li key={item.id} className={s.switcher__item}>
      <label htmlFor={item.id}>
        <input
          type="radio"
          id={item.id}
          name={item.name}
          value={item.id}
          defaultChecked={item.default}
          className={s.switcher__radio}
        />
        {item.label}
      </label>
    </li>
  ));

  return (
    <ul className={s.switcher}>
      {items}
    </ul>
  );
}

Switcher.propTypes = {
  switchData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      name: PropTypes.string,
      default: PropTypes.bool,
    }),
  ).isRequired,
};
