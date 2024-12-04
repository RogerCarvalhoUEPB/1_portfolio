// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYJB780W3f7YSD00Ze6cIfcmcxNrFFRwE",
  authDomain: "webpagesertaomaker.firebaseapp.com",
  projectId: "webpagesertaomaker",
  storageBucket: "webpagesertaomaker.firebasestorage.app",
  messagingSenderId: "328487871752",
  appId: "1:328487871752:web:3fcd7102924c4a738c78bd",
  measurementId: "G-2N3HEYY2S6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default analytics;