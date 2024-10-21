import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider,signOut,onAuthStateChanged,signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD9GDtcJxLP2TTjYoTMTZewiPfeAaBOv_8",
  authDomain: "st-project-25a1c.firebaseapp.com",
  projectId: "st-project-25a1c",
  storageBucket: "st-project-25a1c.appspot.com",
  messagingSenderId: "980243412065",
  appId: "1:980243412065:web:5fdaeda4583a3b6a0be620",
  measurementId: "G-BQY9RECC58"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth= getAuth(app)
const db= getFirestore(app)
const storage= getStorage(app)


export {auth,db,storage,app,analytics,GoogleAuthProvider,signOut,onAuthStateChanged,signInWithEmailAndPassword,createUserWithEmailAndPassword }