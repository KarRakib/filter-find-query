// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLE3CDx8j-pD1Y_9xHLay_PN4DXLcGAr8",
  authDomain: "e-shop-cf4f2.firebaseapp.com",
  projectId: "e-shop-cf4f2",
  storageBucket: "e-shop-cf4f2.appspot.com",
  messagingSenderId: "908241427224",
  appId: "1:908241427224:web:17bd798e150a26bdb19c6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app