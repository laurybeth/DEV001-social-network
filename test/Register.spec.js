import { Register } from '../src/components/Register.js';

describe('Test to register', () => {
  const element = Register();
  const button = element.querySelector('.container__button__signup');
  const form = element.querySelector('.container__form');
  it('Probar si existe el botón registro', () => {
    expect(button).not.toBeNull();
  });
  it('Probar si al dar submit al botón de registro este envía un formulario', () => {
    button.dispatchEvent(new Event('submit'));
    expect(form).not.toBeNull();
  });
});
