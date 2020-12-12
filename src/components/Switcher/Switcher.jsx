import React from 'react';
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

Switcher.defaultProps = {
  switchData: [],
};

Switcher.propTypes = {
  switchData: (props, propName, componentName) => {
    const value = props[propName];

    if (Array.isArray(value)) {
      return null;
    }

    return new TypeError(`${componentName}: ${propName} must be an array`);
  },
};
