import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_apiKey,
  authDomain: process.env.REACT_APP_FIREBASE_authDomain,
  databaseURL: process.env.REACT_APP_FIREBASE_databaseURL,
  projectId: process.env.REACT_APP_FIREBASE_projectId,
  storageBucket: process.env.REACT_APP_FIREBASE_storageBucket,
  messagingSenderId: process.env.REACT_APP_FIREBASE_messagingSenderId,
  appId: process.env.REACT_APP_FIREBASE_appId,
});

// export const registerUser = (email, password) => {

//   firebase.auth().createUserWithEmailAndPassword(email, password)
// .then((userCredential) => {
//   // Signed in 
//   var user = userCredential.user;
//   alert("User Created")
//   // ...
// })
// .catch((error) => {
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   alert("User Creation Failed", error.code)
//   // ..
// });
// }


export const auth = app.auth();
export const firebaseDB = app.database();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export default app;
