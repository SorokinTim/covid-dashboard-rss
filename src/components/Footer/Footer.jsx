import React from 'react';
import styles from './Footer.module.css';
import logo from '../../assets/icons/rs_school.svg';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <a href="https://rs.school/js/" target="_blank" rel="noreferrer">
        <img src={logo} alt="" className={styles.footer__brand} />
      </a>
      <div className={`${styles.footer__license} notranslate`}>© 2020 The Rolling Scopes</div>
      <div className={styles.footer__author}>
        <i className="fab fa-github" />
        <a href="https://github.com/SorokinTim" className={styles['footer__github-link']}>@SorokinTim</a>
        <a href="https://github.com/ashablyka" className={styles['footer__github-link']}>@ashablyka</a>
      </div>
    </div>
  );
}
