import React from 'react';
import styles from './FolderForm.module.scss';
import { Field, Form, Formik } from 'formik';
import cx from 'classnames';
import { required } from '../../../validate';
import { Button, Input } from '../../../UI';
import ModalWrapper from '../../shared/ModalWrapper/ModalWrapper';

const FolderForm = ({ classNameWrapper, content }) => {
  const onSubmit = (folderForm) => {
    console.log('Folder Form:', folderForm);
  };

  return (
    <Formik
      initialValues={{ name: content.name || '' }}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form className={cx(styles.folderForm, classNameWrapper)}>
          <Field
            name="name"
            type="text"
            placeholder="Введите название"
            classNameWrapper={styles.field}
            validate={required}
            error={errors.name}
            isError={errors.name && touched.name}
            component={Input}
          />
          <div className={styles.buttonBlock}>
            <Button
              type="submit"
              classNameWrapper={styles.enterButton}
              viewType="link"
            >Сохранить</Button>
          </div>
        </Form>
      )}
    </Formik>
  )
};

export default FolderForm;
