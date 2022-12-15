export const getFirestore = jest.fn();
export const addDoc= jest.fn(()=>({}));
export const saveCollectionUsersDoc = jest.fn(((id, name, email, birthday, imgProfile)=>Promise.resolve({
   userDoc:{id},
}));
export const doc = jest.fn(() => ({}));
//doc(db, 'users', IdDocUser);
export const getDoc = jest.fn((docSnapp) => Promise.resolve({
    data: { name },
  }));

