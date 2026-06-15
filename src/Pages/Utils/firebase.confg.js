
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getAnalytics} from 'firebase/analytics';
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBNYs4K9nYCLUDmaWqZ2cAA1ufjJTIJgBA",
  authDomain: "netflix-react-bfbaa.firebaseapp.com",
  projectId: "netflix-react-bfbaa",
  storageBucket: "netflix-react-bfbaa.appspot.com",
  messagingSenderId: "344023529383",
  appId: "1:344023529383:web:4150bbbc3451375383e882",
  measurementId: "G-RHB7BTZ5XQ"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)
const database = getDatabase(app)
const firebaseAuth = getAuth(app)

export {database, firebaseAuth};
