// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoeKIdb9A6kAD28JMyZF9_tAX24iNmHR4",
  authDomain: "linkedin-clone-69176.firebaseapp.com",
  projectId: "linkedin-clone-69176",
  storageBucket: "linkedin-clone-69176.appspot.com",
  messagingSenderId: "804875833088",
  appId: "1:804875833088:web:730002db5a972b8f0d6de5",
  measurementId: "G-EK414HS5ZR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth, app};