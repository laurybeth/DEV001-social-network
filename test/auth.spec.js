import { register, signInGoogle, login } from '../src/lib_firebase/auth.js';

describe('register', () => {
  it('is a function', () => {
    expect(typeof register).toBe('function');
  });
  it('Should return an object with the property email', () => register('123@gmail.com', 'Ahb*78sd').then((userCredential) => {
    expect(userCredential.user.email).toBe('123@gmail.com');
  }));
});

describe('login', () => {
  it('is a function', () => {
    expect(typeof login).toBe('function');
  });
  it('Should return an object with the property email', () => login('123@gmail.com', 'Ahb*78sd').then((userCredential) => {
    expect(userCredential.user.email).toBe('123@gmail.com');
  }));
});

describe('signInGoogle', () => {
  it('is a function', () => {
    expect(typeof signInGoogle).toBe('function');
  });
  it('Should return an object with the property email', () => signInGoogle().then((userCredential) => {
    expect(userCredential.user.email).toBe('123@gmail.com');
  }));
});
