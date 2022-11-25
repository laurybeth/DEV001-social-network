export const Login = (onNavigate) => {
  const $section = document.createElement('section');
  $section.className = 'containerLogin';
  $section.innerHTML = ` <img class="containerLogin__logo-login"src="./assets/img/logo_horizontal.png" alt="logo">
    
  <form class="containerLogin_form">
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
    </form>
  `;
/*
  const $button = document.querySelector('.container__button__signup');

  $button.addEventListener('submit', (e) => {
    e.preventDefault();
    onNavigate('/');
  });
*/
  return $section;
};
