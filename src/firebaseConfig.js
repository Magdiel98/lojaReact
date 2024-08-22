import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkm_YzwI9_dngBD-8X1ph3dWfwCJYlR1k",
  authDomain: "lojareact-7a7e1.firebaseapp.com",
  projectId: "lojareact-7a7e1",
  storageBucket: "lojareact-7a7e1.appspot.com",
  messagingSenderId: "506143135618",
  appId: "1:506143135618:web:d5fa9b0ef3e27f1c73619b",
  measurementId: "G-G36971NFVM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const realtimeDb = getDatabase(app);

export {analytics, auth, realtimeDb};