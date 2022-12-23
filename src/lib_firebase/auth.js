import {
  createUserWithEmailAndPassword,
  signInWithPopup, GoogleAuthProvider,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../firebase';

export const register = (email, password) => createUserWithEmailAndPassword(auth, email, password);

export const signInGoogle = () => {
  const provider = new GoogleAuthProvider();
  // console.log('hola soy provider', provider);
  // const credential = provider.credentialFromResult(result);
  // const token = credential.accessToken;

  return signInWithPopup(auth, provider);
};

export const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const currentUser = () => auth.currentUser;
export const userState = (callback) => auth.onAuthStateChanged(callback);
