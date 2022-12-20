import {
  collection, onSnapshot, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, setDoc, where,
} from 'firebase/firestore';
import { db } from '../firebase.js';

export const saveCollectionUsersDoc = (id, name, email, birthday, imgProfile) => addDoc(collection(db, 'users'), {
  id, name, email, birthday, imgProfile,
});
/* export const querySnapshot = () => getDocs(collection(db, 'users'));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
}); */

export const saveCollectionPostDoc = (uid, text, file, likes = 0, nComments = 0) => addDoc(collection(db, 'posts'), {
  uid, text, file, likes, nComments,
});

export const readCollectionUserDoc = (IdDocUser) => {
  const docRef = doc(db, 'users', IdDocUser);
  return getDoc(docRef);
};

export const readCollectionPost = (IdDocPost) => {
  const docRef = doc(db, 'posts', IdDocPost);
  return getDoc(docRef);
};

export const readAllCollectionPosts = (callback) => {
  const q = query(collection(db, 'posts'), where('uid', '!=', ''));
  return onSnapshot(q, callback);
};

/*   const q = query(collection(db, "cities"), where("state", "==", "CA"));
const unsubscribe = onSnapshot(q, (querySnapshot) => {
  const cities = [];
  querySnapshot.forEach((doc) => {
      cities.push(doc.data().name);
  });
  console.log("Current cities in CA: ", cities.join(", "));
}); */
