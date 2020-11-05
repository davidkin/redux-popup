import React from 'react';
import styles from './Layout.module.scss';
import LoginForm from '../LoginForm/LoginForm';

const Layout = () => {
  return (
    <div className={styles.loginContent}>
      <LoginForm classNameWrapper={styles.loginForm} />
    </div>
  )
}

export default Layout;
