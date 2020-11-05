import React from 'react';
import cx from 'classnames';
import styles from './ControlMenu.module.scss';

const ControlMenu = ({ openEditForm, text, classNameWrapper }) => (
  <div className={cx(styles.controlMenu, classNameWrapper)}>
    <div className={styles.edit} onClick={openEditForm}>
      Редактировать
    </div>
    <div className={styles.delete}>Удалить {text}</div>
  </div>
);

export default ControlMenu;
