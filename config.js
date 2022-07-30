import firebase from 'firebase';
require("@firebase/firestore");



const firebaseConfig = {
    apiKey: "AIzaSyC2KYqNKw8Cm2TsbSvuRHyr4WFh-w2Oh9Q",
    authDomain: "e-library-9a82a.firebaseapp.com",
    projectId: "e-library-9a82a",
    storageBucket: "e-library-9a82a.appspot.com",
    messagingSenderId: "758504861078",
    appId: "1:758504861078:web:ed26251d7b9784c7ed81b7"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();