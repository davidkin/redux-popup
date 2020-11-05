import React from 'react';
import { LogIn, Main } from './pages';
import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.appContainer}>
      <LogIn />
    </div>
  );
};

export default App;
