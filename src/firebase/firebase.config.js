// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx4-Ob_6095cW6l3XAUOMnEUzxdRlTNqU",
  authDomain: "react-dragon-news-auth-bb04f.firebaseapp.com",
  projectId: "react-dragon-news-auth-bb04f",
  storageBucket: "react-dragon-news-auth-bb04f.appspot.com",
  messagingSenderId: "1076308043658",
  appId: "1:1076308043658:web:ee60327c6f1ec01c284a73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app