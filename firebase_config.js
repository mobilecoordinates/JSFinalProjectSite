import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyARX3TqdlODzexuyoD6gohzq1-R1W6qaeQ",
    authDomain: "tip-a-teacher.firebaseapp.com",
    databaseURL: "https://tip-a-teacher.firebaseio.com",
    projectId: "tip-a-teacher",
    storageBucket: "tip-a-teacher.appspot.com",
    messagingSenderId: "1060444355811",
    appId: "1:1060444355811:web:930d3eb85b8563717b59d6"
  };

  const firebaseInstance = firebase
  .initializeApp(firebaseConfig)
  .database();

  export default firebaseInstance;

