import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCDibIQIl2zBkODnxZQ3MVAF5KR-pMw0xM",
  authDomain: "clone-80380.firebaseapp.com",
  databaseURL: "https://clone-80380.firebaseio.com",
  projectId: "clone-80380",
  storageBucket: "clone-80380.appspot.com",
  messagingSenderId: "1029205690454",
  appId: "1:1029205690454:web:46856efc6bb6b4b359d3f7",
  measurementId: "G-TGD00MJRR5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
