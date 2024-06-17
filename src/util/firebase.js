// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATIwVKV9hMRfnEIwBNNXRGtCZKve99Tic",
  authDomain: "netflix-gpt-c716b.firebaseapp.com",
  projectId: "netflix-gpt-c716b",
  storageBucket: "netflix-gpt-c716b.appspot.com",
  messagingSenderId: "388303836478",
  appId: "1:388303836478:web:e9f19beb590025c341c86f",
  measurementId: "G-WKPRDG0Q26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();