import { SHOW_MODAL, HIDE_MODAL } from '../actions/types';

const initState = {
  config: {}
};

const modalReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SHOW_MODAL:
      return {
        config: payload
      };
    case HIDE_MODAL: {
      return {
        config: null
      }
    }
    default:
      return state;
  }
};

export default modalReducer;
