import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDkVC7HrDlfNtSZxHZLTZlWEWtk40ZjoJ0",
  authDomain: "ecommerce-with-react-d8697.firebaseapp.com",
  databaseURL: "https://ecommerce-with-react-d8697-default-rtdb.firebaseio.com",
  projectId: "ecommerce-with-react-d8697",
  storageBucket: "ecommerce-with-react-d8697.appspot.com",
  messagingSenderId: "732205501624",
  appId: "1:732205501624:web:ccb13300fad4249a3a784d",
  measurementId: "G-FMV9BS4PR7"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export {auth,fs,storage}