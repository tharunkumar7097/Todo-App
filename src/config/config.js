// import firebase from 'firebase'
// import 'firebase/auth'
// import 'firebase/firestore'
import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyARrd9MkmNF1Lq4Co6TVrmEE8-wAFCYN0Y",
    authDomain: "todo-app-7b870.firebaseapp.com",
    projectId: "todo-app-7b870",
    storageBucket: "todo-app-7b870.appspot.com",
    messagingSenderId: "903109288566",
    appId: "1:903109288566:web:12b638f22932c55ebff557"
  };

  // firebase.initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);


const auth = app.auth();
const db = app.firestore();

export { auth, db} 





// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// Initialize Firebase