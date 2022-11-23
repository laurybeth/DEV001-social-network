export const Login = (onNavigate) => {
  
  const $section = document.createElement('section');
  $section.className = 'container';
  $section.innerHTML = ` <img class="container__logo-register"src="./assets/img/logo_horizontal.png" alt="logo">
    <h4 class="container__title">Sign In</h4>`;
const $formL= document.createElement('form');
  $formL.id = 'registerForm';
  $formL.className = 'container form';
  $formL.innerHTML = `
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
    <input class="container__button__signup" type="submit" value="Sign In">
  `;


  const $button = document.createElement('button');


  $button.addEventListener('click', () => {
    onNavigate('/');
  });

  $div.append($title, $inputName, $button, $buttonBack);
  return $section;

};
