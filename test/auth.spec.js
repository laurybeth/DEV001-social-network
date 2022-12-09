import { registerFunction, signInGoogle, loginFunction } from '../src/lib_firebase/auth.js';

describe('registerFunction', () => {
  it('is a function', () => {
    expect(typeof registerFunction).toBe('function');
  });
  it('Should return an object with the property email', () => registerFunction('123@gmail.com', 'Ahb*78sd').then((userCredential) => {
    expect(userCredential.user.email).toBe('123@gmail.com');
  }));
});

describe('loginFunction', () => {
  it('is a function', () => {
    expect(typeof registerFunction).toBe('function');
  });
  it('Should return an object with the property email', () => loginFunction('123@gmail.com', 'Ahb*78sd').then((userCredential) => {
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