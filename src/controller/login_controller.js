import { readCollectionUserDoc } from '../lib_firebase/db';
import { login, signInGoogle } from '../lib_firebase/auth';

export const loginTasks = (userEmail, userPassword) => login(userEmail, userPassword)
  .then((userCredential) => {
    const uid = userCredential.user.uid;

    return readCollectionUserDoc(uid)
      .then((docSnap) => {
        const name = docSnap.data().name;
        const imgProfile = docSnap.data().imgProfile;
        localStorage.setItem('uName', name);
        localStorage.setItem('uImgProfile', imgProfile);
      });
  });

export const loginGoogleTasks = () => signInGoogle()
  .then((userCredential) => {
    const uid = userCredential.user.uid;
    localStorage.setItem('uid', uid);

    return readCollectionUserDoc(uid)
      .then((docSnap) => {
        const name = docSnap.data().name;
        const imgProfile = docSnap.data().imgProfile;
        localStorage.setItem('uName', name);
        localStorage.setItem('uImgProfile', imgProfile);
      });
  });
