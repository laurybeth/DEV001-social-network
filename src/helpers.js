// funciones auxiliares

export function validateEmail(userEmail) {
  const regexEmail = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}/;
  return regexEmail.test(userEmail);
}

export function validateName(userName) {
  const regexName = /[a-zA-ZÀ-ÖØ-öø-ÿ]+\.?(( |-)[a-zA-ZÀ-ÖØ-öø-ÿ]+\.?)/;
  return regexName.test(userName);
}
export function validatePassword(userPassword) {
  const regexPassword = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
  return regexPassword.test(userPassword);
}
