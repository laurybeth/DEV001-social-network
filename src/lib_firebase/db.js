import {
  collection, onSnapshot, getDocs, query, doc, getDoc, addDoc, orderBy, deleteDoc, updateDoc, setDoc, where,
} from 'firebase/firestore';
import { db } from '../firebase.js';

export const saveCollectionUsersDoc = (id, name, email, birthday, imgProfile) => addDoc(collection(db, 'users'), {
  id, name, email, birthday, imgProfile,
});
/* export const querySnapshot = () => getDocs(collection(db, 'users'));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
}); */

export const saveCollectionPostDoc = (uid, text, file, date, likes = 0, nComments = 0) => addDoc(collection(db, 'posts'), {
  uid, text, file, likes, nComments, date,
});

export const readCollectionUserDoc = (idDocUser) => {
  const docRef = doc(db, 'users', idDocUser);
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
