import { createSelector } from 'reselect';

export const directoriesSelect = createSelector(
  (state) => state.directoriesReducer.directories,
  (directories) => directories,
);

export const modalSelector = createSelector(
  (state) => state.modalReducer.config,
  (config) => config,
);
