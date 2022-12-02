import { loginFunction, loginGoogleFunction } from '../lib_firebase/auth';
import { Modal } from './Modal.js';

export const Login = (onNavigate) => {
  const $section = document.createElement('section');
  $section.className = 'container';
  $section.innerHTML = `
  <img class="container__logo-register"src="./assets/img/logo_horizontal.png" alt="logo">
 `;
  const $formR = document.createElement('form');
  $formR.id = 'registerForm';
  $formR.className = 'container__form';
  $formR.innerHTML = `
    <div class="containerInput">  
      <input class="containerInput__box" type="email" name="User_email" pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}" title="the format does not match what was requested" required>  
      <span class=containerInput__line></span>  
      <label for="email"class="containerInput__label">Email</label>
    </div>
      <div class="containerInput">
      <input class="containerInput__box" type="password" name="User_password" pattern= "^(?=.*\\d)(?=.*[\\u0021-\\u002b\\u003c-\\u0040])(?=.*[A-Z])(?=.*[a-z])\\S{8,16}$" title="The password must have between 8 and 16 characters, at least one digit, at least one lowercase letter, at least one uppercase letter, and at least one non-alphanumeric character." required>
      <span class=containerInput__line></span>
      <label for="password" class="containerInput__label">Password</label>
      <span class=containerInput__line></span>
    </div>
    <input class="container__button__login" type="submit" value="Sign In">
  `;

  const $cGoogle = document.createElement('div');
  $cGoogle.className = 'containerGoogle';
  const $imgGoogle = document.createElement('img');
  $imgGoogle.className = 'containerGoogle__logo';
  $imgGoogle.src = './assets/img/2000px-Google_G_Logo.svg_.png';
  const $linkGoogle = document.createElement('a');
  $linkGoogle.href = '#';
  $linkGoogle.id = 'googleLink';
  $linkGoogle.className = 'containerGoogle__link';
  $linkGoogle.textContent = 'SING IN WITH GOOGLE';

  $cGoogle.append($imgGoogle, $linkGoogle);

  $section.append($formR, $cGoogle);
  $section.insertAdjacentHTML('beforeend', `
  <span class="container__alreadyAccount">Don’t have an account? 
  <a href="/Register">
  <strong>Sign up here</strong>
  </a>
  </span>`);
  /*
  const $button = document.querySelector('.container__button__signup');

  $button.addEventListener('submit', (e) => {
    e.preventDefault();
    onNavigate('/');
  });
*/

  $formR.addEventListener('submit', (e) => {
    e.preventDefault();
    const userEmail = $formR[0].value;
    const userPassword = $formR[1].value;
    console.log(e.target);// pueden correrlo que sale  en esa linea

    loginFunction(userEmail, userPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        Modal('Congratulations: ', 'Successful registration');

        console.log('User: ', user);

        return userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        // Modal('Error en el registro', errorMessage);
        console.log('errorMessage: ', errorMessage);
        Modal('Error:', errorCode);
        // Modal('hola modal: ', errorMessage);

      // ..
      });
    onNavigate('/Wall');
  });
  $linkGoogle.addEventListener('click', (e) => {
    e.preventDefault();

    loginGoogleFunction()
      .then((result) => {
        // alert('Te registraste con google');
        Modal('Congratulations: ', 'Successful registration');
        const user = result.user;
        console.log('UserG: ', user);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        Modal('Error:', 'Mail already exist');
      });
      onNavigate('/Wall');
  });

  return $section;
};
