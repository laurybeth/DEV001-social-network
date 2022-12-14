import { saveCollectionUsersDoc, readCollectionUserDoc } from '../lib_firebase/db.js';
import { register } from '../lib_firebase/auth.js';

export const registerTasks = (name, email, birthday, password) => register(email, password)
  .then(() => saveCollectionUsersDoc(name, email, birthday));
  /* readCollectionUserDoc(docRef.id)
        .then((docSnap) => {
          console.log(docSnap.data()); */
