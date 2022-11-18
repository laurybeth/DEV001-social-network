export const Register = (onNavigate) => {
  const $section = document.createElement('section');
  $section.className = 'container';

  $section.innerHTML = `<img class="container__logo"src="./img/logo_horizontal.png" alt="logo">
  <h2>Sign Up</h2>
  <form class="container form">
  <input type="email" placeholder="Email" pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}" title="the format does not match what was requested" required>
  <input type="text" placeholder="Full name" pattern="/ ^ [a-zA-Z] + [a-zA-Z] + $ /" title="Only letters" required>
  <input type="password" placeholder="Password" pattern="/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&]{8,15}/" title="letters and numbers, minimum 8 characters" required>
  <label>Date of Birth</label>
  <input type="date" required>
  <div class="container__terms&conditions">
  <input type="checkbox" required>
  <label>I agree with terms and conditions</label>
  </div>
  </form>`;

  const $divButtons = document.createElement('div');
  $divButtons.className = 'container__button';

  const $signUpButton = document.createElement('button');
  $signUpButton.type = 'submit';
  $signUpButton.textContent = 'Sign Up';

  const $buttonBack = document.createElement('button');
  $buttonBack.textContent = 'Return';

  $divButtons.append($signUpButton, $buttonBack);

  $section.append($divButtons);

  // button retorna al welcome
  $buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });

  return $section;
};
