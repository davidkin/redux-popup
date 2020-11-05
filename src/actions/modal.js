import { SHOW_MODAL, HIDE_MODAL } from './types';

export const showPopup = (config) => (dispatch) => {
  dispatch({
    type: SHOW_MODAL,
    payload: config,
  })
};

export const hidePopup = () => ({
  type: HIDE_MODAL,
});
