import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA8VXyaicuOgLrcokuEvxnltOq8valZdpU",
  authDomain: "netflix-clone-2aba1.firebaseapp.com",
  projectId: "netflix-clone-2aba1",
  storageBucket: "netflix-clone-2aba1.appspot.com",
  messagingSenderId: "656198735897",
  appId: "1:656198735897:web:3fa7b9e019daeb3da43288"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;