export const Welcome = (onNavigate) => {
  const $section = document.createElement('section');
  $section.className = 'container';
  $section.innerHTML = `<img class="container__img" src="./assets/img/portada_01.png" alt="front page petbook"> 
  <img  class="container__logo"src="./assets/img/logo_horizontal.png" alt="logo">
  <p class="container__slogan">The best social application to show the daily life of your pets.</p>`;
  const $divButtons = document.createElement('div');
  $divButtons.className = 'container__button';
  const $buttonLogin = document.createElement('button');
  $buttonLogin.className = 'container__button__login ';
  const $buttonSignUp = document.createElement('button');
  $buttonSignUp.className = 'container__button__signup ';

  $buttonSignUp.textContent = 'Sign Up';
  $buttonLogin.textContent = 'Sign in';

  $buttonLogin.addEventListener('click', () => {
    onNavigate('/login');
  });

  $buttonSignUp.addEventListener('click', () => {
    onNavigate('/register');
  });

  $divButtons.append($buttonSignUp, $buttonLogin);
  $section.append($divButtons);
  return $section;
};