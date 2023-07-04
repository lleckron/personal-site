// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlQGsryAbhUKgrLi-Ts6sd1_JLNQtgGDQ",
  authDomain: "leckron-17032.firebaseapp.com",
  projectId: "leckron-17032",
  storageBucket: "leckron-17032.appspot.com",
  messagingSenderId: "802012214977",
  appId: "1:802012214977:web:cbbe8e4aa8997367da0640",
  measurementId: "G-1W7CN6MNDB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);