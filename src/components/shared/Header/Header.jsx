import React from 'react';
import BackIcon from '../../../static/svg/back.svg';
import LogoIcon from '../../../static/svg/logo.svg';
import withResponse from '../../../HOC/withResponse';
import styles from './Header.module.scss';

const Header = ({ isMobileScreen }) => (
  <header className={styles.header}>
    {isMobileScreen ? (
      <button type="button" className={styles.back}>
        <img src={BackIcon} alt="back" />
      </button>
    ) : (
      <img className={styles.logo} src={LogoIcon} alt="logo" />
    )}
    <h3 className={styles.title}>Мой Офис</h3>
  </header>
);

export default withResponse(Header);
