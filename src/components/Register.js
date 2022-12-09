import { validateEmail, validateName, validatePassword } from '../helpers';
import { registerFunction, signInGoogle } from '../lib_firebase/auth';
import { saveCollectionUsersDoc } from '../lib_firebase/db';

import { Modal } from './Modal.js';

export const Register = (onNavigate) => {
  const $section = document.createElement('section');
  $section.className = 'container';

  $section.innerHTML = `
    <img class="container__logo-register"src="./assets/img/logo_horizontal.png" alt="logo">
   `;
  const $formR = document.createElement('form');
  $formR.id = 'registerForm';
  $formR.className = 'container__form';
  // $formR.action="./lib/index.js"
  $formR.innerHTML = `
     <div class="containerInput">  
      <input type="email" name="user_email" id='userEmail' class="containerInput__box" required>  
      <span class=containerInput__line></span>  
      <label for="email"class="containerInput__label">Email</label>
    </div>
    <p id='warningsEmail' class='warnings'></p>
    <div class="containerInput">
      <input class="containerInput__box" type="text"  name="user_name" id="userName" required>
      <span class=containerInput__line></span>
      <label for="name" class="containerInput__label">Full name</label>
    </div>
    <p id='warningsName' class='warnings'></p>
    <div class="containerInput">
      <input class="containerInput__box" type="password" name="User_password" id='userPassword' required>
      <span class=containerInput__line></span>
      <label for="password" class="containerInput__label">Password</label>
    </div>
    <p id='warningsPassword' class='warnings'></p>
    <div class="containerInput ">
    <input  id="userDate" onfocus="(this.type = 'date')" class="containerInput__box" type="text" required  min="1900-01-01" max="2004-12-31"
>
     <span class=containerInput__line></span>
    <label for ="containerInput__box" class="containerInput__label">Date of Birth</label>
    </div>
     <p id='warningsDate' class='warnings'></p>
    <div class="container__terms-conditions">
        <input class="input__conditions" id="input__conditions" name="User_terms&conditions" type="checkbox" >
        <label for="input__conditions" class="label__conditions" >I agree with terms and conditions</label>
      </div>
    <input class="container__button__signup btnsubmit" type="submit" value="Sign Up">`;

  const $cGoogle = document.createElement('div');
  $cGoogle.className = 'containerGoogle';
  const $imgGoogle = document.createElement('img');
  $imgGoogle.className = 'containerGoogle__logo';
  $imgGoogle.src = './assets/img/2000px-Google_G_Logo.svg_.png';
  const $linkGoogle = document.createElement('a');
  $linkGoogle.href = '#';
  $linkGoogle.id = 'googleLink';
  $linkGoogle.className = 'containerGoogle__link';
  $linkGoogle.textContent = 'SING UP WITH GOOGLE';

  $cGoogle.append($imgGoogle, $linkGoogle);

  $section.append($formR, $cGoogle);
  $section.insertAdjacentHTML('beforeend', `
  <span class="container__alreadyAccount">Already have an account? 
  <a href="/login">
  <strong>Sign in</strong>
  </a>
  </span>`);

  $section.querySelector('#userEmail').addEventListener('blur', validateEmail);
  $section.querySelector('#userName').addEventListener('blur', validateName);
  $section.querySelector('#userPassword').addEventListener('blur', validatePassword);

  // button retorna al welcome
  $formR.addEventListener('submit', (e) => {
    e.preventDefault();

    const userEmail = $formR[0].value;
    const userName = $formR[1].value;
    const userPassword = $formR[2].value;
    const userBirthday = $formR[3].value;

    registerFunction(userEmail, userPassword).then((userCredential) => {
      saveCollectionUsersDoc(userName, userEmail, userBirthday)
        .then((docRef) => {
          onNavigate('/wall');
          console.log('docRef', docRef.id);
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log('Create user error', errorCode);
        });

      const user = userCredential.user;
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // const email = error.customData.email;
      if (errorCode === 'auth/email-already-in-use') { Modal('Error:', 'Email already in use'); } else { Modal('Error:', 'Something went wrong'); }
      console.log('Error en el registro', errorCode);
    });

    $formR.reset();
  });

  $linkGoogle.addEventListener('click', (e) => {
    e.preventDefault();

    signInGoogle()
      .then((userCredential) => {
        // alert('Te registraste con google');
        // Modal('Congratulations: ', `${userCredential.user.email} Successful registration'`);

        saveCollectionUsersDoc(userCredential.user, 'users')
          .then((docRef) => {
            onNavigate('/wall');
            console.log('docRef', docRef.id);
          })
          .catch((error) => {
            const errorCode = error.code;
            console.log('Create user error', errorCode);
          });

        const user = userCredential.user;
        console.log('UserG: ', user);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        if (errorCode === 'auth/email-already-in-use') { Modal('Error:', 'Email already in use'); } else { Modal('Error:', 'Something went wrong'); }
      });
  });

  return ($section);
};
