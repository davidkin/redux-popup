import React from 'react';
import cx from "classnames";
import styles from './Badge.module.scss';

const Badge = ({ value, className, style }) => {
  return (
    <span className={cx(styles.badge, className)} style={style}>{value}</span>
  );
};

export default Badge;
