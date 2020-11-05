import {
  DELETE_DIRECTORIES_REQUEST,
  DELETE_DIRECTORIES_ROLLBACK,
  GET_DIRECTORIES_REQUEST,
  GET_DIRECTORIES_ROLLBACK,
  UPDATE_DIRECTORIES_REQUEST,
  UPDATE_DIRECTORIES_ROLLBACK,
} from '../actions/types';

const initialState = {
  rootId: null,
  directories: [],
};

const directoriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DIRECTORIES_REQUEST:
    case GET_DIRECTORIES_ROLLBACK:
      return {
        ...state,
        directories: [...state.directories, ...payload.data],
      };
    case DELETE_DIRECTORIES_REQUEST:
    case DELETE_DIRECTORIES_ROLLBACK:
      return {
        ...state,
        directories: state.directories.filter((value) => value.id !== payload.id),
      };
    case UPDATE_DIRECTORIES_REQUEST:
    case UPDATE_DIRECTORIES_ROLLBACK:
      const taskIdx = state.tasks.findIndex((item) => item.id === payload.id);
      return {
        ...state,
        directories: [
          ...state.directories.slice(0, taskIdx),
          { id: payload.id, ...payload.body },
          ...state.directories.slice(taskIdx + 1),
        ],
      };
    default:
      return { ...state };
  }
};

export default directoriesReducer;
