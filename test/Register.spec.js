import { Register } from '../src/components/Register.js';

const element = Register();

describe('Test to register', () => {
  const button = element.querySelector('.container__button__signup');
  const form = element.querySelector('.container__form');
  it('Should test if the register button exists', () => {
    expect(button).not.toBeNull();
  });
  it('Should test if on submit to the register button sends a form', () => {
    button.dispatchEvent(new Event('submit'));
    expect(form).not.toBeNull();
  });
});

describe('Test to the register link with Google', () => {
  const linkG = element.querySelector('.containerGoogle__link');

  it('Should test if the register link with Google exists', () => {
    expect(linkG).not.toBeNull();
  });
});

