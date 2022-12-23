// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDsBdzR7VsMGC_yQQ-_QBR7GG8lF_v-wW0',
  authDomain: 'petbook-ca221.firebaseapp.com',
  projectId: 'petbook-ca221',
  storageBucket: 'petbook-ca221.appspot.com',
  messagingSenderId: '188453622252',
  appId: '1:188453622252:web:b4e8dcfdaa09dee6d830c9',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

// console.log(app, db, auth);
