export const Register = (onNavigate) => {
  const $div = document.createElement('div');
  const $form = document.createElement('form');
  const $title = document.createElement('h2');
  const $subTitle = document.createElement('h4');
  const $inputEmail = document.createElement('input');
  $inputEmail.type = 'email';
  const $inputFullName = document.createElement('input');
  const $inputUser = document.createElement('input');
  const $inputPassword = document.createElement('input');
  $inputPassword.type = 'password';

  const $label = document.createElement('label');
  const $inputDay = document.createElement('input');
  $inputDay.type = 'date';
  const $inputTandC = document.createElement('input');
  $inputTandC.type = 'checkbox';
  const $SignUpbutton = document.createElement('button');
  $SignUpbutton.type = 'submit';

  const $buttonBack = document.createElement('button');

  $title.textContent = 'Pet Book';
  $subTitle.textContent = 'Sign Up';
  $label.innerHTML = 'Date of Birth';
  // button retorna al welcom
  $buttonBack.textContent = 'Return';
  $buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });

  $form.append(
    $title,
    $subTitle,
    $inputEmail,
    $inputFullName,
    $inputUser,
    $inputPassword,
    $label,
    $inputDay,
    $inputTandC,
    $SignUpbutton,
    $buttonBack,
  );
  console.log(`Este es un formulario${$form}`);
  $div.append($form);

  return $div;
};
