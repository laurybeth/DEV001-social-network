import { Register } from '../src/components/Register.js';

const element = Register();

describe('Test a register', () => {
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

describe('Test a enlace de registro con Google', () => {
  const linkG = element.querySelector('.containerGoogle__link');

  it('Probar si existe el enlace de registro con Google', () => {
    expect(linkG).not.toBeNull();
  });
});

