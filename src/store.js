import { createStore, applyMiddleware, compose } from 'redux';
import { offline } from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import * as localforage from 'localforage';
import createRootReducer from './reducers';

offlineConfig.persistOptions = { storage: localforage };

export default createStore(
  createRootReducer(),
  {},
  compose(applyMiddleware(thunk, logger), offline(offlineConfig)),
);
