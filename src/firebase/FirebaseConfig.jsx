// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoXMLccikNx1TbZV4_Z9ga7uAg6ccIcZo",
  authDomain: "e-commerce-31fb5.firebaseapp.com",
  projectId: "e-commerce-31fb5",
  storageBucket: "e-commerce-31fb5.appspot.com",
  messagingSenderId: "904299983795",
  appId: "1:904299983795:web:65db69e273faa2452211c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB,auth}