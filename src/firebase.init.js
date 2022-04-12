// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBCiT-XjGdBgqApaKc1yrpAMHgHFwqA6fk",
    authDomain: "router-firebase-integrat-af0fb.firebaseapp.com",
    projectId: "router-firebase-integrat-af0fb",
    storageBucket: "router-firebase-integrat-af0fb.appspot.com",
    messagingSenderId: "68088750370",
    appId: "1:68088750370:web:6bd855a683db118ead457b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;