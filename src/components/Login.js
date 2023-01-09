import { loginTasks, loginGoogleTasks } from '../controller/login_controller.js';
import { Modal } from './Modal.js';

export const Login = (onNavigate) => {
  const $section = document.createElement('section');
  const $idLoginForm = 'loginID';
  $section.className = 'container';
  const $idGoogleSingIn = 'googleLSingInID';
  $section.innerHTML = `
  <img class="container__logo-register"src="https://raw.githubusercontent.com/JENNYFERGAMBOA/DEV001-social-network/main/src/assets/img/logo_horizontal.png" alt="logo">
  <form class='container__form' id='${$idLoginForm}'>
  <div class="containerInput">  
  <input class="containerInput__box" type="email" name="User_email" pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}" title="the format does not match what was requested" required>  
  <span class=containerInput__line></span>  
  <label for="email"class="containerInput__label">Email</label>
</div>
  <div class="containerInput">
  <input class="containerInput__box" type="password" name="User_password" required>
  <span class=containerInput__line></span>
  <label for="password" class="containerInput__label">Password</label>
  <span class=containerInput__line></span>
</div>
<input class="container__button__login" type="submit" value="Sign In">
</form>
<div class='containerGoogle'>
<img class='containerGoogle__logo' src='https://raw.githubusercontent.com/JENNYFERGAMBOA/DEV001-social-network/main/src/assets/img/2000px-Google_G_Logo.svg_.png'>
<a class= 'containerGoogle__link' id='${$idGoogleSingIn}' href='#'>SING UP WITH GOOGLE</a>
  </div>
  <span class="container__alreadyAccount">Don’t have an account? 
  <a href="/register">
  <strong>Sign up here</strong>
  </a>
  </span>
 `;

  const $loginForm = $section.querySelector('#loginID');
  $loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userEmail = $loginForm[0].value;
    const userPassword = $loginForm[1].value;
    console.log(e.target);

    loginTasks(userEmail, userPassword)
      .then(() => {
        const uName = localStorage.getItem('uName');
        Modal('Welcome: ', `${uName}`);
        setTimeout(() => {
          document.getElementById('modal').style.display = 'none';
        }, 2000);
        onNavigate('/wall');
      })
      .catch((error) => {
        const errorCode = error.code;

        if (errorCode === 'auth/wrong-password') {
          Modal('Error:', 'Wrong-password');
        } else {
          Modal('Error:', 'Something went wrong');
        }

      // ..
      });
  });

  const $linkGoogle = $section.querySelector('#googleLSingInID');

  $linkGoogle.addEventListener('click', (e) => {
    e.preventDefault();

    loginGoogleTasks()
      .then(() => {
        const uName = localStorage.getItem('uName');

        Modal('Welcome: ', `${uName}`);
        setTimeout(() => {
          document.getElementById('modal').style.display = 'none';
        }, 2000);

        onNavigate('/wall');
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        if (errorCode === 'auth/wrong-password') {
          Modal('Error:', 'Wrong-password');
        } else {
          Modal('Error:', 'Something went wrong');
        }
      });
  });

  return $section;
};
