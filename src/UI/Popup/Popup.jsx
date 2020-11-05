import React from 'react';
import CloseIcon from '../../static/svg/cross.svg';
import cx from 'classnames';
import styles from './Popup.module.scss';

const Popup = ({ children, classNameWrapper, title, closePopup }) => (
  <>
      <div
        className={styles.popupBackground}
        onClick={closePopup}
        role="button"
        onKeyPress={closePopup}
        tabIndex="0"
      />
      <div className={cx(styles.popup, classNameWrapper)}>
        <div className={styles.popupHeader}>
          <h2 className={styles.title}>{title}</h2>
          <button type="button" className={styles.close} onClick={closePopup}>
            <img src={CloseIcon} alt="close" />
          </button>
        </div>

        {children}
      </div>
  </>
);

export default Popup;
