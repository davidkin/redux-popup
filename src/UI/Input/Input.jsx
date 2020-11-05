import React, {useState} from 'react';
import EyeHiddenIcon from '../../static/svg/eye-hidden.svg'
import styles from './Input.module.scss';
import cx from 'classnames';

const Input = ({
  field,
  type,
  error,
  isError,
  placeholder,
  classNameWrapper,
  classNameInput,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTypeToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={cx(styles.inputWrapper, classNameWrapper, {
      [styles.error]: isError
    })}>
      <input
        {...field}
        type={type === 'password' && !showPassword ? 'password' : 'text'}
        placeholder={placeholder}
        className={cx(styles.input, classNameInput)}
      />
      {type === 'password' && <img src={EyeHiddenIcon} alt="eye" className={styles.eye} onClick={handleTypeToggle} />}
      {
        isError && (
          <div className={styles.errorMessage}>
            {error}
          </div>
        )
      }
    </div>
  );
}

export default Input;
