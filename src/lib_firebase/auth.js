import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase';

/**

 */
export const registerFunction = (email, password) => createUserWithEmailAndPassword(auth, email, password);

export const registerGoogleFunction = () => {
  const provider = new GoogleAuthProvider();
  // const credential = provider.credentialFromResult(result);
  // const token = credential.accessToken;

  return signInWithPopup(auth, provider);
};
