import firebase from "firebase";

const firebaseConfig = {
  
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();

export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();
