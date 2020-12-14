import React from 'react';
import s from './List.module.css';

export default function List() {
  const items = [];

  for (let i = 0; i < 130; i += 1) {
    const li = (
      <li key={i} className={s.list__item}>
        <img className={s.list__img} src="https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2017/06/brazili-flaf.png" alt="flag" />
        <span className={s.list__country}>Brasil</span>
        <span className={s.list__value}>15,277,114</span>
      </li>
    );

    items.push(li);
  }

  return (
    <ul className={s.list}>
      {items}
    </ul>
  );
}
