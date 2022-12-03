import { registerFunction, googleFunction } from '../lib_firebase/auth';
import { createItem } from '../lib_firebase/db';
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
      <input class="containerInput__box" type="email" name="User_email" pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}" title="the format does not match what was requested" required>  
      <span class=containerInput__line></span>  
      <label for="email"class="containerInput__label">Email</label>
    </div>
    <div class="containerInput">
      <input class="containerInput__box" type="text"  name="User_name" pattern="\\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+" title="Only letters" required>
      <span class=containerInput__line></span>
      <label for="name" class="containerInput__label">Full name</label>
    </div>
    <div class="containerInput">
      <input class="containerInput__box" type="password" name="User_password" pattern= "^(?=.*\\d)(?=.*[\\u0021-\\u002b\\u003c-\\u0040])(?=.*[A-Z])(?=.*[a-z])\\S{8,16}$" title="The password must have between 8 and 16 characters, at least one digit, at least one lowercase letter, at least one uppercase letter, and at least one non-alphanumeric character." required>
      <span class=containerInput__line></span>
      <label for="password" class="containerInput__label">Password</label>
 
    </div>
    <div  id="date" class="containerInput ">
    <input  id="user_date" onfocus="(this.type = 'date')" class="containerInput__box" type="text" required  min="1900-01-01" max="2004-12-31">
     <span class=containerInput__line></span>
      <label for ="containerInput__box" class="containerInput__label">Date of Birth</label>
  
    </div>
    <div class="container__terms-conditions">
        <input class="input__conditions" id="input__conditions" name="User_terms&conditions" type="checkbox" required>
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

  // button retorna al welcome
  $formR.addEventListener('submit', (e) => {
    e.preventDefault();
    const userEmail = $formR[0].value;
    const userPassword = $formR[2].value;

    registerFunction(userEmail, userPassword)
      .then((userCredential) => {
        const user = userCredential.user;

       // Modal('Congratulations: ', `${userCredential.user.email} Successful registration'`);
       createItem(userCredential.user, 'users')
       .then(data => { 
             console.log('createItem data', data); })

       .catch((error) => {
         const errorCode = error.code;
         console.log('Create item error', errorCode);
       });
        onNavigate('/wall');

        console.log('User: ', user);
        return userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        //const email = error.customData.email;

        if (errorCode === 'auth/email-already-in-use') { Modal('Error:', 'Email already in use'); } else { Modal('Error:', 'Something went wrong'); }

        console.log('Error en el registro', errorCode);
      });
  });

  $linkGoogle.addEventListener('click', (e) => {
    e.preventDefault();

    googleFunction()
      .then((userCredential) => {
        // alert('Te registraste con google');
        //Modal('Congratulations: ', `${userCredential.user.email} Successful registration'`);

        createItem(userCredential.user, 'users')
          .then(data => { 
                console.log('createItem data', data); })

          .catch((error) => {
            const errorCode = error.code;
            console.log('Create item error', errorCode);
          });

        onNavigate('/wall');
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
