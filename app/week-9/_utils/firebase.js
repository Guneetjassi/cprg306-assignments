import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBemcA9JMLK3BekPQf03zl6RJBo37lFLd8",
  authDomain: "shopping-list-8868c.firebaseapp.com",
  projectId: "shopping-list-8868c",
  storageBucket: "shopping-list-8868c.appspot.com",
  messagingSenderId: "1052351251448",
  appId: "1:1052351251448:web:38796d86d3fd964b35cc0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);