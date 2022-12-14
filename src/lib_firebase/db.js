import {
  collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, setDoc, where,
} from 'firebase/firestore';
import { db } from '../firebase.js';

export const saveCollectionUsersDoc = (name, email, birthday) => addDoc(collection(db, 'users'), { name, email, birthday });

/* export const querySnapshot = () => getDocs(collection(db, 'users'));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
}); */

export const readCollectionUserDoc = (IdDocUser) => {
  const docRef = doc(db, 'users', IdDocUser);
  return getDoc(docRef);
};
