export const emailValidation = (value) => {
  if (!value) {
    return 'Заполните поле';
  }

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return 'Нужный формат text@text.domen';
  }

  return undefined;
};

export const passwordValidation = (value) => {
  if (!value) {
    return 'Заполните поле';
  }

  if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,}$/i.test(value)) {
    return 'enter correct password';
  }
}


export const required = (value) => {
  if (!value) {
    return 'Заполните поле';
  }
};
