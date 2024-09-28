import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAgfuU8ABV_Am4a8plLi6uzrsbumy51Jt8",
  authDomain: "church-treasurer-dev.firebaseapp.com",
  projectId: "church-treasurer-dev",
  storageBucket: "church-treasurer-dev.appspot.com",
  messagingSenderId: "520012775172",
  appId: "1:520012775172:web:7d44263869d5d9a1f49a51",
  measurementId: "G-YPCD2HSQSR"
};

const app = initializeApp(firebaseConfig);

export { app };
