import { validateEmail, validateName, validatePassword } from '../src/helpers.js';

describe('validateEmail', () => {
  it('Is a function', () => {
    expect(typeof validateEmail).toBe('function');
  });
  it('email melania@gmail.com, answer is TRUE', () => {
    expect(validateEmail('melania@gmail.com')).toBe(true);
  });
  it('email null, answer is FALSE', () => {
    expect(validateEmail('')).toBeFalsy();
  });
  it('email megmail.com, answer is FALSE', () => {
    expect(validateEmail('megmailcom')).toBeFalsy();
  });
});

describe('validateName', () => {
  it('Is a function', () => {
    expect(typeof validateName).toBe('function');
  });
  it('Name jose perez, answer is TRUE', () => {
    expect(validateName('jose perez')).toBe(true);
  });
  it('Name null, answer is FALSE', () => {
    expect(validateName('')).toBeFalsy();
  });
});

describe('validatePassword', () => {
  it('Is a function', () => {
    expect(typeof validatePassword).toBe('function');
  });
  it('At least it must have a number, a letter, an uppercase letter, a lowercase letter and a space character', () => {
    expect(validatePassword('123456AAko*')).toBe(true);
  });
  it('Does not accept empty values', () => {
    expect(validatePassword(' ')).toBeFalsy();
  });
  it('Maximum Characters 16', () => {
    expect(validatePassword('1234567890paloJ*')).toBe(true);
  });
  it('Minimum characters 8', () => {
    expect(validatePassword('12loJ*')).toBeFalsy();
  });
  it('Does not accept only numeric values', () => {
    expect(validatePassword('532356465')).toBeFalsy();
   });
  it('Does not accept only letters', () => {
    expect(validatePassword('eerrrrrrrrrrrrrrr')).toBeFalsy();
  });
});