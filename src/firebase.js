// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCTOkNxJdbeEtS7WM893HXNdCvpBmEpui8",
  authDomain: "portifoliouyo.firebaseapp.com",
  projectId: "portifoliouyo",
  storageBucket: "portifoliouyo.firebasestorage.app",
  messagingSenderId: "929381766137",
  appId: "1:929381766137:web:374569e10abfbf4997a328",
  measurementId: "G-99XTE36BN6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, collection, addDoc };
