import { GoogleAuthProvider } from 'firebase/auth';
import { getAuth, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { app } from '../firebase.js';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    throw new Error(error.message);
  }
};
