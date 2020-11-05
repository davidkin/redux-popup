import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Button, Input } from '../../../UI';
import LogoIcon from '../../../static/svg/logo.svg';
import cx from 'classnames';
import styles from './LoginForm.module.scss';
import { emailValidation, passwordValidation } from '../../../validate';

const LoginForm = ({ classNameWrapper}) => {
  const onSubmit = (formValues, { resetForm }) => {
    console.log(formValues);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ login: '', password: '' }}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form className={cx(styles.form, classNameWrapper)}>
          <h2 className={styles.title}><img src={LogoIcon} alt="logo" className={styles.logo} /> Вход</h2>
          <Field
            name="login"
            type="text"
            placeholder="Логин МойОфис"
            classNameWrapper={styles.field}
            validate={emailValidation}
            error={errors.login}
            isError={errors.login && touched.login}
            component={Input}
          />
          <Field
            name="password"
            type="password"
            placeholder="Пароль"
            classNameWrapper={styles.field}
            validate={passwordValidation}
            error={errors.password}
            isError={errors.password && touched.password}
            component={Input}
          />
          <Button type="submit" classNameWrapper={styles.enterButton}>Войти</Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
