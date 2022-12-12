import { saveCollectionUsersDoc, readCollectionUserDoc } from '../lib_firebase/db.js';
import { registerFunction } from '../lib_firebase/auth.js';

export const registration = (name, email, birthday, password) => registerFunction(email, password)
  .then((userCredential) => {
    saveCollectionUsersDoc(name, email, birthday)
      .then((docRef) => {
        readCollectionUserDoc(docRef.id)
          .then((docSnap) => {
            console.log(docSnap.data());
            return docSnap;
          })

          .catch((error) => error);
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log('saveCollectionUsersDoc - The promise no exist', errorCode);
      });

    const user = userCredential.user;
  });
