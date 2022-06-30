import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMd1B1_b-RVMEnSlVDHRYlIffbLMYT1zI",
  authDomain: "facebook-clone-5cb60.firebaseapp.com",
  projectId: "facebook-clone-5cb60",
  storageBucket: "facebook-clone-5cb60.appspot.com",
  messagingSenderId: "264838164908",
  appId: "1:264838164908:web:6227f15354f5fc64a44a09",
  measurementId: "G-Y0V4D3CCY8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

