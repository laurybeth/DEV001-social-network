import {
  collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, setDoc, where,
} from 'firebase/firestore';
import { db } from '../firebase.js';

// CREATE
export const createUser = (userID, userName, userEmail, userPassword) => {
  setDoc(doc(db, 'users', userID), {
    id: userID,
    name: userName,
    email: userEmail,
    password: userPassword,

  });
};
