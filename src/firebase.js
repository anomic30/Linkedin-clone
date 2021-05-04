import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBWz2xdhz2lIhGqJF-zd_SkkIh7Oa5nlc0",
    authDomain: "linkedin-clone-7b111.firebaseapp.com",
    projectId: "linkedin-clone-7b111",
    storageBucket: "linkedin-clone-7b111.appspot.com",
    messagingSenderId: "721901907727",
    appId: "1:721901907727:web:418858b9726c2d8c8f587a",
    measurementId: "G-1RHSY9VED6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };