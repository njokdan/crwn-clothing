import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyCkERqOVSkUGFG6Ml42b0mOidFYdnQHvJg",
  authDomain: "crwn-db-7d8f4.firebaseapp.com",
  databaseURL: "https://crwn-db-7d8f4.firebaseio.com",
  projectId: "crwn-db-7d8f4",
  storageBucket: "crwn-db-7d8f4.appspot.com",
  messagingSenderId: "175423151551",
  appId: "1:175423151551:web:8b9408d47899b068de550a"
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
