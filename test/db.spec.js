import { addDoc } from 'firebase/firestore';
import { saveCollectionUsersDoc, readCollectionUserDoc } from '../src/lib_firebase/db.js';

const user = {
  id: 'CdfmqRjUhSoj14p1uG1J',
  name1: 'Sofia Henao',
  email: 'sofia@gmail.com',
  birthday: '2004-12-04',
  imgProfile: 'https://raw.githubusercontent.com/JENNYFERGAMBOA/DEV001-social-network/main/src/assets/img/imgProfileDefault.png',
};

describe.only('saveCollectionFunction', () => {
  it('is a function', () => {
    expect(typeof saveCollectionUsersDoc).toBe('function');
  });
  /* it('Should return an object with the new colletion', () => saveCollectionUsersDoc(user.id, user.name1, user.email, user.birthday, user.imgProfile).then((userDoc) => {
    expect(userDoc.id).toBe(user.id);
  })); */

  it('Should return an object with the new colletion', () => {
    saveCollectionUsersDoc(user.id, user.name1, user.email, user.birthday, user.imgProfile);
    expect(addDoc).toHaveBeenCalled();
  });
});

describe('readCollectionUserDoc', () => {
  it('is a function', () => {
    expect(typeof readCollectionUserDoc).toBe('function');
  });
  it('Should return an object with the property email', () => readCollectionUserDoc('CdfmqRjUhSoj14p1uG1J').then((docSnap) => {
    expect(docSnap.data.name).toBe('Sofia Henao');
  }));
});
