import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeLr-j-7JdHFRdBtzL75Z9ScnkwEk5luI",
  authDomain: "house-marketplace-app-ca10e.firebaseapp.com",
  projectId: "house-marketplace-app-ca10e",
  storageBucket: "house-marketplace-app-ca10e.appspot.com",
  messagingSenderId: "922893244593",
  appId: "1:922893244593:web:1e95bb668ec705a2272a90",
  measurementId: "G-R54DK8CCFF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();