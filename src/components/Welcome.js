export const Welcome = (onNavigate) => {
  const $div = document.createElement('div');
  const $title = document.createElement('h2');
  const $buttonLogin = document.createElement('button');
  const $buttonRegister = document.createElement('button');

  $title.textContent = 'Welcome to PetBook =D';
  $buttonLogin.textContent = 'Login';
  $buttonRegister.textContent = 'Sign Up';
  $buttonLogin.addEventListener('click', () => {
    onNavigate('/login');
  });

  $buttonRegister.addEventListener('click', () => {
    onNavigate('/Register');
    console.log('Register');
  });

  $div.append($title, $buttonRegister, $buttonLogin);
  return $div;
};
