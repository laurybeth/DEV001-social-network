import { registerFunction } from '../src/lib_firebase/auth.js';

describe('registerFunction', () => {
  it('is a function', () => {
    expect(typeof registerFunction).toBe('function');
  });
  it('deberia retornar un objeto con la propiedad email', () => registerFunction('123@gmail.com', 'Ahb*78sd').then((userCredential) => {
    expect(userCredential.user.email).toBe('123@gmail.com');
  }));
});
