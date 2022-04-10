import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import {
  doc,
  setDoc,
  getFirestore,
  onSnapshot,
  addDoc,
  serverTimestamp,
  collection,
  orderBy,
  query,
} from "firebase/firestore";

const app = initializeApp({
  apiKey: "AIzaSyC_Y1K73mMnbmKRYddU2s9gIzLqo5VnIEs",
  authDomain: "hack4bengal-alunk.firebaseapp.com",
  projectId: "hack4bengal-alunk",
  storageBucket: "hack4bengal-alunk.appspot.com",
  messagingSenderId: "634250048584",
  appId: "1:634250048584:web:4c2f8202ad7ea4a9d6547d",
});

const auth = getAuth();
const db = getFirestore();

export {
  app,
  auth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  setDoc,
  doc,
  db,
  onSnapshot,
  addDoc,
  collection,
  serverTimestamp,
  query,
  orderBy,
};
