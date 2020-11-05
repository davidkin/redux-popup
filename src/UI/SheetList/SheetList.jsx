import React from 'react';
import { ListItem } from '../../UI';
import PlusGreenIcon from '../../static/svg/plus-green.svg';
import cx from 'classnames';
import styles from './SheetList.module.scss';

const SheetList = ({ lists, classNameWrapper, closeSheetList, onChange }) => {
  const handleListName = (name) => {
    onChange(name);
    closeSheetList();
  };

  return (
    <div className={cx(styles.sheetListWrapper, classNameWrapper)}>
      <ul className={styles.sheetList}>
        <li className={cx(styles.list, styles.all)} onClick={() => handleListName('Все')}>
          <ListItem name="Все" classNameColor={styles.listMarker} />
          <span className={styles.count}>4</span>
        </li>

        <div className={styles.separate} />

        <li className={styles.list} onClick={() => handleListName('Миниаппы')}>
          <ListItem name="Миниаппы" classNameColor={styles.listMarker} />
          <span className={styles.count}>3</span>
        </li>
        <li className={styles.list} onClick={() => handleListName('Звонки')}>
          <ListItem name="Звонки" classNameColor={styles.listMarker} />
          <span className={styles.count}>1</span>
        </li>
      </ul>

      <div className={styles.btnBlock}>
        <button type="button" className={styles.btn}>
          <img src={PlusGreenIcon} alt="plus" className={styles.plusIcon} />
          Добавить список
        </button>
      </div>
    </div>
  );
};

export default SheetList;
