import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config =  {
    apiKey: "AIzaSyAsMJ0PoXDeVtzDmCvot6q73ewQdId82n8",
    authDomain: "testichri.firebaseapp.com",
    databaseURL: "https://testichri.firebaseio.com",
    projectId: "testichri",
    storageBucket: "testichri.appspot.com",
    messagingSenderId: "111213421715",
    appId: "1:111213421715:web:a8b5d41d0c3a88ab691966",
    measurementId: "G-4059T77JR5"
  };

  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore =firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt : 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider) ;