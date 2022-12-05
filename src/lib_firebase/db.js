import {
  collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, setDoc, where,
} from 'firebase/firestore';
import { db } from '../firebase.js';

// CREATE

export const createItem = (userName, userEmail,userBirthday) => addDoc(collection(db, 'users'), { userName, userEmail ,userBirthday});
// console.log(userName, userEmail, userBirthday);
