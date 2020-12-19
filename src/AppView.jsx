import React from 'react';
import PropTypes from 'prop-types';
// import Time from './components/Date/Date';
// import Switcher from './components/Switcher/Switcher';
// import switchers from './components/switchers';
// import Search from './components/Search/Search';
// import List from './components/List/List';
import Cases from './components/Cases/Cases';
import List from './components/List/List';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Time from './components/Time/Time';
import Map from './components/Map/Map';
import Broad from './components/Broad/Broad';
import style from './App.module.css';

export default function AppView({
  startData,
  country,
  filter,
  onSearchChange,
  onCountryItemSelected,
}) {
  return (
    <div className={style['grid-container']}>
      <div className={style.header}>
        <Header />
      </div>
      <div className={style.date}>
        <Time startData={startData} />
      </div>
      <div className={style.map}>
        <Map />
      </div>
      <div className={style.details}>
        <div className={style.cases}>
          <Cases startData={startData} />
        </div>
        <div className={style.list}>
          {/* <div className={style.item} /> */}
          <List
            startData={startData}
            filter={filter}
            onCountryItemSelected={onCountryItemSelected}
            onSearchChange={onSearchChange}
          />
        </div>
      </div>
      <div className={style.data}>
        <div className={style.broad}>
          <Broad startData={startData} country={country} />
        </div>
        <div className={style.chart}>
          <div className={style.item} />
        </div>
      </div>
      <div className={style.footer}>
        <Footer />
      </div>
    </div>
  );
}

AppView.defaultProps = {
  country: null,
};

AppView.propTypes = {
  startData: PropTypes.arrayOf(
    PropTypes.shape({
      updated: PropTypes.number,
      country: PropTypes.string,
      cases: PropTypes.number,
      deaths: PropTypes.number,
      recovered: PropTypes.number,
      countryInfo: PropTypes.shape({
        flag: PropTypes.string,
      }),
    }),
  ).isRequired,
  country: PropTypes.string,
  onCountryItemSelected: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
