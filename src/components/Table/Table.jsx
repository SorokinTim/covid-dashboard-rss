import React from 'react';
import s from './Table.module.css';

export default function Table() {
  return (
    <table className={s.table}>
      <thead className={s.table__head}>
        <tr className={s.table__row}>
          <th className={s['table__head-cell']}>Confirmed</th>
          <th className={s['table__head-cell']}>Deaths</th>
          <th className={s['table__head-cell']}>Recovered</th>
        </tr>
      </thead>
      <tbody>
        <tr className={s.table__row}>
          <td className={s.table__cell}>69,546,321</td>
          <td className={s.table__cell}>44,546,321</td>
          <td className={s.table__cell}>1,546,321</td>
        </tr>
      </tbody>
    </table>
  );
}
