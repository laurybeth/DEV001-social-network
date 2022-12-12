import {
  createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../firebase';

/**

 */
export const registerFunction = (email, password) => createUserWithEmailAndPassword(auth, email, password);

export const signInGoogle = () => {
  const provider = new GoogleAuthProvider();
  // console.log('hola soy provider', provider);
  // const credential = provider.credentialFromResult(result);
  // const token = credential.accessToken;

  return signInWithPopup(auth, provider);
};

export const loginFunction = (email, password) => signInWithEmailAndPassword(auth, email, password);

/* export const wallFunction = (user) => onAuthStateChanged (function callback(user)); */

/* export const userCurrent = auth.currentUser;
if (userCurrent !== null) {
  // The user object has basic properties such as display name, email, etc.
  const name = user.name;
  const email = user.email;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;

  // The user's ID, unique to the Firebase project. Do NOT use
  // this value to authenticate with your backend server, if
  // you have one. Use User.getToken() instead.
  const uid = user.uid;
  console.log('hola soy console del currentUser', userCurrent);
}
else {console.log('hola soy console del currentUser', userCurrent);} */

export const currentUser = () => onAuthStateChanged();
