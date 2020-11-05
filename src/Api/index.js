export const URL_PREFIX = 'http://localhost:3001/';

export const URL = {
  home: URL_PREFIX,
  tasks: {
    get: (query) => {
      console.log('get');
    },
    add: `${URL_PREFIX}/tasks`,
    delete: (id) => `${URL_PREFIX}/tasks/${id}`,
    update: (id) => `${URL_PREFIX}/tasks/${id}`,
  },
};
