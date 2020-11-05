import React from 'react';
import { Button } from '../../../UI';
import ModalWrapper from '../../shared/ModalWrapper/ModalWrapper'
import { useDispatch } from 'react-redux';
import { showPopup } from '../../../actions/modal';
import FolderForm from '../FolderForm/FolderForm';
import styles from './Layout.module.scss';

const MODAL_MAP = {
  folderForm: FolderForm,
};

const Layout = () => {
  const dispatch = useDispatch();

  const openPopup = () => {
    dispatch(showPopup({
      name: 'folderForm',
      title: 'Переименовать',
      content: { name: 'Design' }
    }));
  };

  return (
    <div className={styles.mainContent}>
      <Button
        type="button"
        classNameWrapper={styles.popupButton}
        onClick={openPopup}
      >Open popup</Button>

      <ModalWrapper MODAL_MAP={MODAL_MAP} />
    </div>
  )
};

export default Layout;
