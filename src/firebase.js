// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwFE8_5hUaqe1wp7WU1O65_578eBzvYbA",
  authDomain: "preneurship-f214b.firebaseapp.com",
  projectId: "preneurship-f214b",
  storageBucket: "preneurship-f214b.appspot.com",
  messagingSenderId: "423200070647",
  appId: "1:423200070647:web:56c2f80dfae5a88245ecf2",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export { firebase };
