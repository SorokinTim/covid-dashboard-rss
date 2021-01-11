import React from 'react';
import style from './Header.module.css';

export default function Header() {
  return (
    <div className={style.header}>
      <div className={style.header__brand}>
        <span className={`${style.header__logo} material-icons notranslate`}>coronavirus</span>
        <div className={style['header__brand-name']}>
          <div className={style.header__title}>COVID - 19</div>
          <div className={style.header__subtitle}>
            <span className={style.header__hash}>#</span>
            stayhome
          </div>
        </div>
      </div>
    </div>
  );
}
