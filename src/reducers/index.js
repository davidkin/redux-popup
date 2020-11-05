import { combineReducers } from 'redux';
import directoriesReducer from './directories';
import modalReducer from './modal';

const createRootReducer = () =>
  combineReducers({
    directoriesReducer,
    modalReducer,
  });

export default createRootReducer;
