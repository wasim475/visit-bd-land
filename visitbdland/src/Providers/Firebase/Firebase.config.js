// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoNqnHcaDOLZ2nYI_xxQ04OgAJ3MeG7TY",
  authDomain: "visit-bd-land.firebaseapp.com",
  projectId: "visit-bd-land",
  storageBucket: "visit-bd-land.appspot.com",
  messagingSenderId: "483745458382",
  appId: "1:483745458382:web:bb054f77480027de65489f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;