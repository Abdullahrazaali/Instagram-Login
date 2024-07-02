import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"; // Ensure using lite version

const firebaseConfig = {
    apiKey: "AIzaSyDKL8jDNy44W-8MnL2ILX4YuA8vqq0imqc",
    authDomain: "insta-login-390c9.firebaseapp.com",
    projectId: "insta-login-390c9",
    storageBucket: "insta-login-390c9.appspot.com",
    messagingSenderId: "800064424310",
    appId: "1:800064424310:web:c711e122e155498d791257"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };