// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgfuU8ABV_Am4a8plLi6uzrsbumy51Jt8",
  authDomain: "church-treasurer-dev.firebaseapp.com",
  projectId: "church-treasurer-dev",
  storageBucket: "church-treasurer-dev.appspot.com",
  messagingSenderId: "520012775172",
  appId: "1:520012775172:web:7d44263869d5d9a1f49a51",
  measurementId: "G-YPCD2HSQSR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
