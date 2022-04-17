import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  signInWithAuthProvider,
  GoogleAuthProvider,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDRU-jDbRQZp7F9zhTODTnX2jZmAU4OXvU',
  authDomain: 'crown-clothing-9ee34.firebaseapp.com',
  projectId: 'crown-clothing-9ee34',
  storageBucket: 'crown-clothing-9ee34.appspot.com',
  messagingSenderId: '787300898378',
  appId: '1:787300898378:web:0b00f2af9391c28c5cb8b3',
  measurementId: 'G-VWF8GE66GN',
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  // if no user data, create it
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(`Error creating user: ${error.message}`);
    }
  }

  // if user does exist return document
  return userDocRef;
};