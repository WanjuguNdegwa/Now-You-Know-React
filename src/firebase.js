import { initializeApp } from 'firebase/app'

import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const app = initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
})

export const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, provider)
  } catch (error) {
    console.error(error)
  }
}

export const signOut = () => auth.signOut();

export const db = getFirestore(app)

export default app