import {
  collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, setDoc, where,
} from 'firebase/firestore';
import { db } from '../firebase.js';

// CREATE
export const createItem = (obj1, obj2, items) => {
  const col = db.collection(items).doc().set(obj1);
  const colRef = col(db, items);
  const data = addDoc(colRef, obj2);
  return data.id;
};
