import { saveCollectionUsersDoc, readCollectionUserDoc } from '../lib_firebase/db.js';
import { register, signInGoogle } from '../lib_firebase/auth.js';

export const registerTasks = (name, email, birthday, password, imgProfile) => register(email, password)
  .then((userCredential) => {
    const newUid = userCredential.user.uid;
    return saveCollectionUsersDoc(newUid, name, email, birthday, imgProfile);
  });

/* readCollectionUserDoc(docRef.id)
        .then((docSnap) => {
          console.log(docSnap.data()); */

export const registerGoopgleTasks = () => signInGoogle()
  .then((userCredential) => {
    console.log('soy google:', userCredential.user);
    const newUid = userCredential.user.uid;
    const name = userCredential.user.displayName;
    const email = userCredential.user.email;
    const birthday = userCredential.user.metadata.creationTime;
    const imgProfile = userCredential.user.photoURL;
    console.log(newUid, name, email, birthday, imgProfile);

    return saveCollectionUsersDoc(newUid, name, email, birthday,imgProfile);
  });
