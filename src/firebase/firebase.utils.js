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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
