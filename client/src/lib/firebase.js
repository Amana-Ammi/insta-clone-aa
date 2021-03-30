// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyDPb1OvO1CuEV4omfG9GGUvWSLJM_ZxgRg",
    authDomain: "instagram-amana.firebaseapp.com",
    databaseURL: "https://instagram-amana-default-rtdb.firebaseio.com",
    projectId: "instagram-amana",
    storageBucket: "instagram-amana.appspot.com",
    messagingSenderId: "371699356031",
    appId: "1:371699356031:web:e170a250c7092f34e90a4a"
  };

const firebase = window.firebase.initializeApp(config);
const { FieldValue } = window.firebase.firestore;

// seedDatabase(firebase);

export { firebase, FieldValue };