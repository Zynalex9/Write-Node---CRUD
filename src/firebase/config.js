import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB8EkhZnN12LynbOJbyV-cQdE_k2uF49p0",
  authDomain: "writenode-d62fa.firebaseapp.com",
  projectId: "writenode-d62fa",
  storageBucket: "writenode-d62fa.appspot.com",
  messagingSenderId: "538670213436",
  appId: "1:538670213436:web:b613cc241a20e20ac2d639",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
