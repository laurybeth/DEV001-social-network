import { registerTasks, registerGoogleTasks } from '../controller/register_controller.js';
import { validateEmail, validateName, validatePassword } from '../helpers';
import { Modal } from './Modal.js';

export const Register = (onNavigate) => {
  const $section = document.createElement('section');
  $section.className = 'container';
  const $idRegisterform = 'registerID';
  const $idGoogleSingIn = 'googleRSingInID';
  $section.innerHTML = `
    <img class="container__logo-register"src="https://raw.githubusercontent.com/JENNYFERGAMBOA/DEV001-social-network/main/src/assets/img/logo_horizontal.png" alt="logo">
    <form id = '${$idRegisterform}' class='container__form'>
    <div class="containerInput">  
    <input type="email" name="user_email" id='userEmail' class="containerInput__box" 
    pattern='[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}' required>  
    <span class=containerInput__line></span>  
    <label for="email"class="containerInput__label">Email</label>
  </div>
  <p id='warningsEmail' class='warnings'></p>
  <div class="containerInput">
    <input class="containerInput__box" type="text"  name="user_name" id="userName" required >
    <span class=containerInput__line></span>
    <label for="userName" class="containerInput__label">Full name</label>
  </div>
  <p id='warningsName' class='warnings'></p>
  <div class="containerInput">
    <input class="containerInput__box" type="password" name="User_password" id='userPassword' required  >
    <span class=containerInput__line></span>
    <label for="userPassword" class="containerInput__label">Password</label>
  </div>
  <p id='warningsPassword' class='warnings'></p>
  <div class="containerInput ">
  <input  id="userDate" onfocus="(this.type = 'date')" class="containerInput__box" type="text" required  min="1900-01-01" max="2004-12-31"
>
   <span class=containerInput__line></span>
  <label for ="userDate" class="containerInput__label">Date of Birth</label>
  </div>
   <p id='warningsDate' class='warnings'></p>
  <div class="container__terms-conditions">
      <input class="input__conditions" id="input__conditions" name="User_terms&conditions" type="checkbox" >
      <label for="input__conditions" class="label__conditions" >I agree with terms and conditions</label>
    </div>
  <input class="container__button__signup btnsubmit" type="submit" value="Sign Up">
  </form>
  <div class='containerGoogle'>
  <img class='containerGoogle__logo' src='https://raw.githubusercontent.com/JENNYFERGAMBOA/DEV001-social-network/main/src/assets/img/2000px-Google_G_Logo.svg_.png'>
  <a class= 'containerGoogle__link' id='${$idGoogleSingIn}' href='#'>SING UP WITH GOOGLE</a>
  </div>
  <span class="container__alreadyAccount">Already have an account? 
  <a href="/login">
  <strong>Sign in</strong>
  </a>
  </span>
   `;

  /** **********inicio:validacion del formulario register ************** */

  const $userEmail = $section.querySelector('#userEmail');
  const $warningsEmail = $section.querySelector('#warningsEmail');
  const $userName = $section.querySelector('#userName');
  const $warningsName = $section.querySelector('#warningsName');
  const $userPassword = $section.querySelector('#userPassword');
  const $warningsPassword = $section.querySelector('#warningsPassword');

  $section.querySelector('#userEmail').addEventListener('blur', () => {
    const isValidEmail = validateEmail($userEmail.value);
    if (!isValidEmail) {
      $warningsEmail.innerHTML = 'The format does not match what was requested.<br>Example: example @mail.com';
    } else {
      $warningsEmail.innerHTML = null;
    }
  });

  $section.querySelector('#userName').addEventListener('blur', () => {
    const isValidName = validateName($userName.value);
    if (!isValidName) {
      $warningsName.innerHTML = 'A name and a surname, only letters <br> Example: Melania Palomino';
    } else {
      $warningsName.innerHTML = null;
    }
  });

  $section.querySelector('#userPassword').addEventListener('blur', () => {
    const isValidPassword = validatePassword($userPassword.value);
    if (!isValidPassword) {
      $warningsPassword.innerHTML = 'The password must have between 8 and 16 characters<br>Least one digit<br>Least one lowercase letter<br>Least one uppercase letter<br>Least one non-alphanumeric character.';
    } else {
      $warningsPassword.innerHTML = null;
    }
  });
  /** ********** fin:validacion del formulario register ********************* */
  // button retorna al welcome
  const $registerForm = $section.querySelector('#registerID');
  $registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const userEmail = $registerForm[0].value;
    const userName = $registerForm[1].value;
    const userPassword = $registerForm[2].value;
    const userBirthday = $registerForm[3].value;

    registerTasks(userName, userEmail, userBirthday, userPassword)
      .then((docSnap) => {
        console.log('docSnap.data() ', docSnap.data());

        Modal('Welcome: ', `${docSnap.data().name}`);
        setTimeout(() => {
          document.getElementById('modal').style.display = 'none';
        }, 2000);
        onNavigate('/wall');
      })
      .catch((error) => {
        const errorCode = error.code;
        // const email = error.customData.email;
        if (errorCode === 'auth/email-already-in-use') {
          Modal('Error:', 'Email already in use');
        } else {
          Modal('Error:', 'Something went wrong');
        }
        console.log('registerTasks-Error en el registro', errorCode);
      });

    $registerForm.reset();
  });

  const $linkGoogle = $section.querySelector('#googleRSingInID');

  $linkGoogle.addEventListener('click', (e) => {
    e.preventDefault();

    registerGoogleTasks()
      .then((docSnap) => {
        Modal('Welcome: ', `${docSnap.data().name}`);
        setTimeout(() => {
          document.getElementById('modal').style.display = 'none';
        }, 2000);

        onNavigate('/wall');
      })
      .catch((error) => {
        const errorCode = error.code;
        // The email of the user's account used.
        // const email = error.customData.email;
        if (errorCode === 'auth/email-already-in-use') {
          Modal('Error:', 'Email already in use');
        } else {
          Modal('Error:', 'Something went wrong');
          console.log('signInGoogle-Create user error', errorCode);
        }
      });
  });

  return ($section);
};
