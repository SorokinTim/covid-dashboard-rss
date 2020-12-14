import React from 'react';
import s from './Search.module.css';

export default function Search() {
  return (
    <input className={s.search} placeholder="Find a country" />
  );
}
