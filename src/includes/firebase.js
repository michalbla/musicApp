import firebase from "firebase/app";
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDc72Q4BbUCqEh6WDydtzLL1BVz0BzWckg",
    authDomain: "music-9c419.firebaseapp.com",
    projectId: "music-9c419",
    storageBucket: "music-9c419.appspot.com",
    appId: "1:1061536146930:web:f080d9c7eb54701d74376b"
  };

  
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();
  
  const usersCollection = db.collection('user');

  
  export {
    auth,
    db,
    usersCollection,
  };
  