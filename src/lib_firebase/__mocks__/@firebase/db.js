export const getFirestore = jest.fn();
export const saveCollectionUsersDoc = jest.fn();
export const doc = jest.fn();
//doc(db, 'users', IdDocUser);
export const getDoc = jest.fn((docRef) => Promise.resolve({
    user: { email },
  }));

