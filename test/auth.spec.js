import { registerFunction, registerGoogleFunction } from '../src/lib_firebase/auth.js';


describe('registerFunction', () => {
  it('is a function', () => {
    expect(typeof registerFunction).toBe('function');
  });
  it('Should return an object with the property email', () => registerFunction('123@gmail.com', 'Ahb*78sd').then((userCredential) => {
    expect(userCredential.user.email).toBe('123@gmail.com');
  }));
});

describe('registerGoogleFunction', () => {
  it('is a function', () => {
    expect(typeof registerFunction).toBe('function');
  });
  it('Should return an object with the property email', () => registerFunction('123@gmail.com', 'Ahb*78sd').then((userCredential) => {
    expect(userCredential.user.email).toBe('123@gmail.com');
  }));
});