import React from 'react';
import { Popup } from '../../../UI';
import { useDispatch, useSelector } from 'react-redux';
import { modalSelector } from '../../../selectors';
import { hidePopup } from '../../../actions/modal';

const ModalWrapper = ({ MODAL_MAP }) => {
  const config = useSelector(modalSelector);
  const ModalComponent = config ? MODAL_MAP[config.name] : null;
  const dispatch = useDispatch();

  if (!config || !ModalComponent ) {
    return null
  }

  const closePopup = () => {
    dispatch(hidePopup());
  };

  return (
    <Popup
      closePopup={closePopup}
      title={config.title}
    >
      <ModalComponent {...config} />
    </Popup>
  )
};

export default ModalWrapper;
