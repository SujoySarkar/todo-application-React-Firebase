import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyCvHW7sMmK1gbJbvnDnPmbe-sEHtEwRyjQ",
    authDomain: "todo-application-651bc.firebaseapp.com",
    databaseURL: "https://todo-application-651bc.firebaseio.com",
    projectId: "todo-application-651bc",
    storageBucket: "todo-application-651bc.appspot.com",
    messagingSenderId: "597662968071",
    appId: "1:597662968071:web:3e9ad3243aeccdb21e3da2",
    measurementId: "G-LG1PRVHBH3"
});

const db = firebaseApp.firestore();
export default db;


