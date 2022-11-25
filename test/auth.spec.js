import { registerFunction } from '../src/lib_firebase/auth.js';

describe('registerFunction', () => {
  it('is a function', () => {
    expect(typeof registerFunction).toBe('function');
  });
  it('deberia retornar un objeto con la propiedad email', () => {
    return registerFunction({}, 'abc@gmail.com', 'Ahb*78sd').then((user) => {
      expect(user.email).toBe('abc@gmail.com');
    });
  });
});
