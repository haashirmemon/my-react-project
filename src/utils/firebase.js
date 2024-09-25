import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyC_DSVWDFp1GjUf02WCcgfeRY6b4sOVItg",
    authDomain: "fire-base-project-11d07.firebaseapp.com",
    projectId: "fire-base-project-11d07",
    storageBucket: "fire-base-project-11d07.appspot.com",
    messagingSenderId: "669246444842",
    appId: "1:669246444842:web:3581a080e0aba5cf98ba53"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storageDB = getStorage(app);
export { auth, db, storageDB };