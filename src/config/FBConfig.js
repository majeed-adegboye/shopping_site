import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


var FBConfig = {
    apiKey: "AIzaSyBlfAYoLslTBEjdB_tZK9ACkwrXkzxgom4",
    authDomain: "shoppingsite-38041.firebaseapp.com",
    databaseURL: "https://shoppingsite-38041.firebaseio.com",
    projectId: "shoppingsite-38041",
    storageBucket: "",
    messagingSenderId: "635932367491",
    appId: "1:635932367491:web:1529caf8a2081bc6"
  };

  // Initialize Firebase
  firebase.initializeApp(FBConfig);



  export default firebase;