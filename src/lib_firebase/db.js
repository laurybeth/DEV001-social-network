import {
  collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, setDoc, where, } from 'firebase/firestore';
import { db } from '../firebase.js';

export const saveCollectionUsersDoc = (id, name, email, birthday, imgProfile) => addDoc(collection(db, 'users'), {
  id, name, email, birthday, imgProfile });

/* export const querySnapshot = () => getDocs(collection(db, 'users'));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
}); */

export const readCollectionUserDoc = (IdDocUser) => {
  const docRef = doc(db, 'users', IdDocUser);
  return getDoc(docRef);
};
