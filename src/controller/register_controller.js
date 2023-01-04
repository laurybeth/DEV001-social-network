import { saveCollectionUsersDoc, readCollectionUserDoc } from '../lib_firebase/db.js';
import { register, signInGoogle } from '../lib_firebase/auth.js';

export const registerTasks = (name, email, birthday, password) => register(email, password)
  .then((userCredential) => {
    const uid = userCredential.user.uid;
    userCredential.user.displayName = name;
    const imgProfile = 'https://raw.githubusercontent.com/JENNYFERGAMBOA/DEV001-social-network/main/src/assets/img/imgProfileDefault.png';
    userCredential.user.photoURL = imgProfile;
    return saveCollectionUsersDoc(uid, name, email, birthday, imgProfile)
      .then(() => readCollectionUserDoc(uid));
  });

/* readCollectionUserDoc(docRef.id)
        .then((docSnap) => {
          console.log(docSnap.data()); */

export const registerGoogleTasks = () => signInGoogle()
  .then((userCredential) => {
    console.log('userCredential.user en registerGoogleTasks:', userCredential.user);
    // console.log('user en registerGoogleTasks:', user);
    const uid = userCredential.user.uid;
    const name = userCredential.user.displayName;
    const email = userCredential.user.email;
    const birthday = userCredential.user.metadata.creationTime;
    const imgProfile = userCredential.user.photoURL;
    console.log(uid, name, email, birthday, imgProfile);

    return saveCollectionUsersDoc(uid, name, email, birthday, imgProfile);
  });
