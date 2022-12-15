import { saveCollectionUsersDoc, readCollectionUserDoc } from '../src/lib_firebase/db.js';

describe('saveCollectionFunction', () => {
  it('is a function', () => {
    expect(typeof saveCollectionUsersDoc).toBe('function');
  });
  it('Should return an object with the new colletion', () => saveCollectionUsersDoc('users').then((collection(db, 'users')) => {
    expect().toBe();
  }));
});

describe('readCollectionUserDoc', () => {
  it('is a function', () => {
    expect(typeof readCollectionUserDoc).toBe('function');
  });
  it('Should return an object with the property email', () => readCollectionUserDoc('123@gmail.com', 'Ahb*78sd').then((docSnap) => {
    expect(docSnap.data().userEmail).toBe('123@gmail.com');
  }));
});
