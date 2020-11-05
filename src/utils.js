export const formatDate = (dateString, isDisplayDate) => {
  const date = new Date(dateString);
  let month = '' + (date.getMonth() + 1);
  let day = '' + date.getDate();
  const year = date.getFullYear();

  if (month.length < 2) {
    month = '0' + month;
  }

  if (day.length < 2) {
    day = '0' + day;
  }

  return !isDisplayDate ? [year, month, day].join('-') : [day, month].join('.');
};

export const getDayWithMonth = (dateString) => {
  const date = new Date(dateString);

  return date.toLocaleString('ru-RU', { day: 'numeric', month: 'long' });
};

export const getDay = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString('ru-RU', { weekday: 'short' });
};

export const isEmptyObject = (obj) => !Object.keys(obj).length;

export const compareObjects = (obj1, obj2) => JSON.stringify(obj1) === JSON.stringify(obj2);
