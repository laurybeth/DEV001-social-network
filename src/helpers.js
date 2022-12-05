// funciones auxiliares

export function validateEmail() {
  const $userEmail = document.getElementById('userEmail');
  const $warningsEmail = document.getElementById('warningsEmail');
  const regexEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  if (!regexEmail.test($userEmail.value)) {
    $warningsEmail.innerHTML = 'The format does not match what was requested.<br>Example: example @mail.com';
    $userEmail.value = '';
  } else {
    $warningsEmail.innerHTML = '';
  }
}

export function validateName() {
  const $userName = document.getElementById('userName');
  const $warningsName = document.getElementById('warningsName');
  const regexName = /[a-zA-ZÀ-ÖØ-öø-ÿ]+\.?(( |-)[a-zA-ZÀ-ÖØ-öø-ÿ]+\.?)/;
  if (!regexName.test($userName.value)) {
    $warningsName.innerHTML = 'A name and a surname, only letters <br> Example: Melania palomino';
    $userName.value = '';
  } else {
    $warningsName.innerHTML = '';
  }
}
export function validatePassword() {
  const $userPassword = document.getElementById('userPassword');
  const $warningsPassword = document.getElementById('warningsPassword');
  const regexPassword = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
  if (!regexPassword.test($userPassword.value)) {
    $warningsPassword.innerHTML = 'The password must have between 8 and 16 characters<br>Least one digit<br>Least one lowercase letter<br>Least one uppercase letter<br>Least one non-alphanumeric character.';
    $userPassword.value = '';
  } else {
    $warningsPassword.innerHTML = '';
  }
}
