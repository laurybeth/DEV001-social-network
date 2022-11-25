import { createUserWithEmailAndPassword,signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase';

export const registerFunction = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert('Registrado satisfactoriamente');

      console.log('User: ', user);
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log('errorCode: ', errorCode);
      console.log('errorMessage ', errorMessage);
    // ..
    });
};

export const registerGoogleFunction = async (provider) => {
  await signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      const user = result.user;
    // ...
    })
    .catch((error) => {
    // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    });
};
