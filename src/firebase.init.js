// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHaKHf0-mwmSZHYCwgBoQ7gpFTMHbIP-M",
  authDomain: "dream-tulip.firebaseapp.com",
  projectId: "dream-tulip",
  storageBucket: "dream-tulip.appspot.com",
  messagingSenderId: "464110329684",
  appId: "1:464110329684:web:c4543c698f10024f4ef2c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);