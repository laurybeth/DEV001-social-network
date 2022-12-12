export const getAuth = jest.fn();

export const createUserWithEmailAndPassword = jest.fn((getAuth, email, password) => Promise.resolve({
  user: { email },
}));

export const signInWithEmailAndPassword = jest.fn((getAuth, email, password) => Promise.resolve({
  user: { email },
}));

// export class GoogleAuthProvider {}
export const GoogleAuthProvider = jest.fn(() => ({}));

export const signInWithPopup = jest.fn((getAuth, GoogleAuthProvider) => Promise.resolve({ user: { email: '123@gmail.com' } }));
