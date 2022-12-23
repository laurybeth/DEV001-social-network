import {
  collection, onSnapshot, query, doc, getDoc, setDoc, orderBy, deleteDoc,
} from 'firebase/firestore';
import { db } from '../firebase.js';

export const saveCollectionUsersDoc = (id, name, email, birthday, imgProfile) => {
  const docRef = doc(db, 'users', id);
  console.log('yaaa !!!!!!! ', docRef);
  return setDoc(docRef, {
    id, name, email, birthday, imgProfile,
  });
};
/* export const querySnapshot = () => getDocs(collection(db, 'users'));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
}); */

export const saveCollectionPostDoc = (uid, text, file, date, likes = 0, nComments = 0) => setDoc(collection(db, 'posts'), {
  uid, text, file, likes, nComments, date,
});

export const readCollectionUserDoc = (idDocUser) => {
  const docRef = doc(db, 'users', idDocUser);
  console.log('!!!!!!!!!CONSOLEEEEEEEEE!!!', docRef);
  return getDoc(docRef);
};

export const readCollectionPost = (idDocPost) => {
  const docRef = doc(db, 'posts', idDocPost);
  return getDoc(docRef);
};

export const readAllCollectionPosts = (callback) => {
  const q = query(collection(db, 'posts'), orderBy('date', 'asc'));
  return onSnapshot(q, callback);
};

export const deleteItem = (idDoc, collectionName) => {
  const colRef = collection(db, collectionName);
  return deleteDoc(doc(colRef, idDoc));
};

/* export const getItemsByCondition = (value, collectionName) => {
  const colRef = collection(db, collectionName);
  const q = query(colRef, where('id', '===', value));
  return getDoc(q);
}; */
