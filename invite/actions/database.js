import firebase from 'firebase';

 var config = {
    apiKey: "AIzaSyC9Xp2Qsqppv5oXoSFNL1AYaXcsSAG5eeM",
    authDomain: "redux-firebase-e0dfa.firebaseapp.com",
    databaseURL: "https://redux-firebase-e0dfa.firebaseio.com",
    storageBucket: "redux-firebase-e0dfa.appspot.com",
    messagingSenderId: "211133398580"
  };
  firebase.initializeApp(config);
const database = firebase.database();

export default database;
