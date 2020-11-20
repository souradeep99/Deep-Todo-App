import firebase from 'firebase';


const firebaseApp = firebase.initializeApp ({
    apiKey: "Add Your API Key",
    authDomain: "deep-todo-app.firebaseapp.com",
    databaseURL: "https://deep-todo-app.firebaseio.com",
    projectId: "deep-todo-app",
    storageBucket: "deep-todo-app.appspot.com",
    messagingSenderId: "Your Messaging ID",
    appId: "Your API ID",
    measurementId: "Your Measurement IdD"
  });

const db = firebaseApp.firestore();

export default db;