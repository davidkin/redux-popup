import React, { useState } from 'react';
import { Popup } from '../UI';

const withPopup = (Component, { isOpen = false } = {}) => (props) => {
  const [isOpenPopup, setIsOpenPopup] = useState(isOpen);
  const [popupContent, setPopupContent] = useState(null);

  const closePopup = () => setIsOpenPopup(false);
  const openPopup = (popupProps) => {
    if (popupProps) {
      const { PopupComponent, content } = popupProps;
      setPopupContent(<PopupComponent content={content} closePopup={closePopup} />);
    }
    setIsOpenPopup(true);
  };

  return (
    <>
      <Component {...props} openPopup={openPopup} closePopup={closePopup} />
      {isOpenPopup && <Popup closePopup={closePopup}>{popupContent}</Popup>}
    </>
  );
};

export default withPopup;
