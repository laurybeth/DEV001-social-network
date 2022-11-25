export const getAuth = jest.fn();
export const createUserWithEmailAndPassword = jest.fn(
(auth, email, password) => Promise.resolve({ user: { email } }));
export const signInWithPopup = jest.fn((auth, provider) => Promise.resolve({ user: { provider } }));
