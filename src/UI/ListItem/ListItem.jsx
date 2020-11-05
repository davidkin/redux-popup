import React from 'react';
import cx from 'classnames';
import styles from './ListItem.module.scss';

const ListItem = ({ classNameColor, name, classNameWrapper }) => (
  <p className={cx(styles.listItem, classNameWrapper)}>
    <span className={cx(styles.mark, classNameColor)} />
    {name}
  </p>
);

export default ListItem;
