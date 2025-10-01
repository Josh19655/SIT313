import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUBOP4aZsN7AseoR5qEAt6a19nckgsiEo",
  authDomain: "p-e79e8.firebaseapp.com",
  projectId: "p-e79e8",
  storageBucket: "p-e79e8.firebasestorage.app",
  messagingSenderId: "325588010101",
  appId: "1:325588010101:web:eb512dbf34faf7ae66643c",
  measurementId: "G-QK91ZM3K4H"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);