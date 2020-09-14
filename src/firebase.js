import firebase from "firebase";

const firebaseConfig = {
// ConfigDetails
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
