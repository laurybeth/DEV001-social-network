export const getAuth = jest.fn();
export const createUserWithEmailAndPassword = jest.fn(({ }, email, password) =>
  Promise.resolve({ 
    user: { email }
  }));
export const signInWithPopup = jest.fn(({}, provider) => Promise.resolve({ user: { provider } }));
