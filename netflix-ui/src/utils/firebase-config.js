import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDRcAhxDUc_gxbmmd08_O4x_bCoe8C4jKQ",
  authDomain: "netflix-app-febe5.firebaseapp.com",
  projectId: "netflix-app-febe5",
  storageBucket: "netflix-app-febe5.appspot.com",
  messagingSenderId: "1036484975822",
  appId: "1:1036484975822:web:6cb14e7ca8ccaf1091449f",
  measurementId: "G-TS057S1F1V"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
