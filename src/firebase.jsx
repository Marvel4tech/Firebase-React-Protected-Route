import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBEm8yxq2B7Jooj5VBTwbgPjpaWYZBtFf0",
  authDomain: "fir-react-protected-route.firebaseapp.com",
  projectId: "fir-react-protected-route",
  storageBucket: "fir-react-protected-route.appspot.com",
  messagingSenderId: "39132391891",
  appId: "1:39132391891:web:d1c0d97df1556269c0a726"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);