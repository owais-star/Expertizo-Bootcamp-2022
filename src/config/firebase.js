import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCwLFs75sV6D2iSipTbwjaQCc5iLm4-JDQ",
    authDomain: "expertizobootcamp.firebaseapp.com",
    projectId: "expertizobootcamp",
    storageBucket: "expertizobootcamp.appspot.com",
    messagingSenderId: "893988224745",
    appId: "1:893988224745:web:e18cf02b2c403975607a78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const storage = getStorage(app);

export { auth, db, app, storage }