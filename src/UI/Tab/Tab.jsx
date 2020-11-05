import React from 'react';
import styles from './Tab.module.scss';
import cx from 'classnames';

const Tab = ({ className, eventKey, title, active = false, onClick = () => {}, style }) => {
  return (
    <li
      className={cx(styles.tab, className, {
        [styles.active]: active
      })}
      onClick={() => onClick(eventKey)}
      style={style}
    >
      {title}
    </li>
  );
};

export default Tab;
