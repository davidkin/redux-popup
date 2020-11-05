import React from 'react';
import styles from './Button.module.scss';
import cx from 'classnames';

const Button = ({ type = 'button', disabled, icon, classNameWrapper, children, viewType, onClick }) => {
  const buttonClassNames = {
    icon: [styles.iconButton],
    link: [styles.linkButton],
  };

  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={cx(styles.button, buttonClassNames[viewType], classNameWrapper)}
    >
      {icon && <img src={icon} className={styles.icon} alt="icon" />}
      {children}
    </button>
  );
};

export default Button;
