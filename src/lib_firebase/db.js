import {
  collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, setDoc, where,
} from 'firebase/firestore';
import { db } from '../firebase.js';

export const saveCollectionUsersDoc = (userName, userEmail, userBirthday) => addDoc(collection(db, 'users'), { userName, userEmail, userBirthday });

/*export const querySnapshot = () => getDocs(collection(db, 'users'));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});*/