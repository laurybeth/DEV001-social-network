export const Welcome = (onNavigate) => {
  const $div = document.createElement('div');
  $div.className = 'container';
 /* const $divFrontPageImg= document.createElement('img');
  $divFrontPageImg.src="./img/portada_01.png";
  $divFrontPageImg.className= 'FrontPage';
  const $divLogoImg= document.createElement('img');
  $divLogoImg.src="./img/logo_horizontal.png";
  $divLogoImg.className= 'LogoImg';*/

  const $title = document.createElement('h2');
  const $buttonLogin = document.createElement('button');
  const $buttonRegister = document.createElement('button');

  $title.textContent = 'The best social application to show the daily life of your pets.';
  $buttonRegister.textContent = 'Sign Up';
  $buttonLogin.textContent = 'Log in';
  $buttonLogin.addEventListener('click', () => {
    onNavigate('/login');
  });

  $buttonRegister.addEventListener('click', () => {
    onNavigate('/Register');
    console.log('Register');
  });

  $div.append(/*$divFrontPageImg,$divLogoImg,*/$title, $buttonRegister, $buttonLogin);
  return $div;
};
