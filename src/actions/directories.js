import {
  DELETE_DIRECTORIES_COMMIT,
  DELETE_DIRECTORIES_REQUEST,
  DELETE_DIRECTORIES_ROLLBACK,
  GET_DIRECTORIES_COMMIT,
  GET_DIRECTORIES_REQUEST,
  GET_DIRECTORIES_ROLLBACK,
  UPDATE_DIRECTORIES_COMMIT,
  UPDATE_DIRECTORIES_REQUEST,
  UPDATE_DIRECTORIES_ROLLBACK,
} from './types';

export const getDirectories = (queryObj) => ({
  type: GET_DIRECTORIES_REQUEST,
  meta: {
    offline: {
      effect: {
        url: URL.tasks.get(queryObj),
        method: 'GET',
      },
      commit: { type: GET_DIRECTORIES_COMMIT },
      rollback: { type: GET_DIRECTORIES_ROLLBACK },
    },
  },
});

export const deleteDirectory = (id) => ({
  type: DELETE_DIRECTORIES_REQUEST,
  payload: { id },
  meta: {
    offline: {
      effect: {
        url: URL.tasks.delete(id),
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      },
      commit: { type: DELETE_DIRECTORIES_COMMIT, meta: { id } },
      rollback: { type: DELETE_DIRECTORIES_ROLLBACK, meta: { id } },
    },
  },
});

export const updateDirectory = (body, id) => {
  return {
    type: UPDATE_DIRECTORIES_REQUEST,
    payload: { id, body },
    meta: {
      offline: {
        effect: {
          url: URL.tasks.update(id),
          method: 'PUT',
          body: JSON.stringify(body),
          headers: {
            'Content-Type': 'application/json',
          },
        },
        commit: { type: UPDATE_DIRECTORIES_COMMIT, meta: { id, body } },
        rollback: { type: UPDATE_DIRECTORIES_ROLLBACK, meta: { id, body } },
      },
    },
  };
};
