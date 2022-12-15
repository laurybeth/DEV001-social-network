export const getFirestore = jest.fn();
export const collection = jest.fn(getFirestore, 'users');
export const addDoc = jest.fn(({},{id, name, email, birthday, imgProfile}) => Promise.resolve({
  userDoc: { id },
}));
 /* export const saveCollectionUsersDoc = jest.fn((id, name, email, birthday, imgProfile) => Promise.resolve({
  userDoc: { id },
})); */ 
export const doc = jest.fn(() => ({}));

// doc(db, 'users', IdDocUser);
export const getDoc = jest.fn((docSnap) => Promise.resolve({
  data: { name: 'Sofia Henao' },
}));
