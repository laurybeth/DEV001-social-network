export const getAuth=jest.fn();
export const createUserWithEmailAndPassword = jest.fn((auth, email, password) => Promise.resolve({user:{email}}));